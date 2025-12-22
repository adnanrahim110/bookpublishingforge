"use client";

import Title from "@/components/ui/Title";
import { displayFaqs } from "@/constants";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import { useState } from "react";

const FAQs = ({ faqs = displayFaqs }) => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section
      id="faqs"
      className="section-padding bg-slate-50 relative overflow-hidden"
    >
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary-600 font-semibold text-sm uppercase tracking-widest mb-4 block"
          >
            FAQ
          </motion.span>
          <Title tag="h2" highlight="Questions" className="mb-6">
            Frequently Asked Questions
          </Title>
          <p className="text-foreground-muted text-lg">
            Questions? We’ve Got Answers. Publishing can feel confusing. Let’s
            clear things up.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="mb-4"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className={`w-full flex items-center justify-between p-5 text-left transition-all duration-300 ${
                  openIndex === index
                    ? "bg-primary-500 text-white shadow-lg rounded-t-xl"
                    : "bg-white text-foreground hover:bg-primary-50 shadow-sm rounded-xl"
                }`}
              >
                <div className="flex items-center gap-3">
                  <HelpCircle
                    size={20}
                    className={
                      openIndex === index ? "text-white" : "text-primary-500"
                    }
                  />
                  <span className="font-medium">{faq.q}</span>
                </div>
                <ChevronDown
                  size={20}
                  className={`transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-5 bg-white rounded-b-xl border-x border-b border-slate-100 text-foreground-muted">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;
