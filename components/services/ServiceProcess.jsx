"use client";

import Title from "@/components/ui/Title";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const ServiceProcess = ({ process }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const title =
    process.title && process.title !== "" ? process.title : "How It Works";
  const highlight =
    process.highlight && process.highlight !== "" ? process.highlight : "Works";
  const text =
    process.text && process.text !== ""
      ? process.text
      : "Our streamlined process ensures transparency and quality from start to finish.";
  const steps = process.steps || [];

  return (
    <section
      ref={containerRef}
      className="section-padding bg-slate-50 overflow-hidden relative"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 inset-x-0 h-40 bg-linear-to-b from-white to-transparent" />
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-primary-100/30 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 left-0 w-80 h-80 bg-accent-100/30 rounded-full blur-[100px]" />
      </div>

      <div className="container-custom relative z-10">
        <div className="mb-20 md:text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block mb-4 px-4 py-1.5 rounded-full border border-primary-200 bg-primary-50/50 text-primary-700 text-sm font-semibold tracking-wide"
          >
            Process Workflow
          </motion.div>
          <Title tag="h2" highlight={highlight} className="mb-6">
            {title}
          </Title>
          <p className="text-foreground-muted text-lg md:text-xl">{text}</p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-10 bottom-10 w-1 bg-slate-200 rounded-full overflow-hidden">
            <motion.div
              style={{ height: lineHeight }}
              className="w-full bg-linear-to-b from-primary-400 via-accent-500 to-primary-600"
            />
          </div>

          <div className="space-y-16 md:space-y-24">
            {steps.map((step, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={idx}
                  className={`relative flex items-center md:justify-between ${
                    isEven ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  <div
                    className={`w-full md:w-[45%] ${
                      isEven ? "text-left md:text-right" : "text-left"
                    }`}
                  >
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6, delay: idx * 0.1 }}
                      className="relative group p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:border-primary-100 transition-all duration-300"
                    >
                      <div
                        className={`absolute top-0 ${
                          isEven ? "right-0 md:left-auto md:right-0" : "left-0"
                        } w-1.5 h-full bg-linear-to-b from-primary-400 to-accent-400 rounded-l-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                      />

                      <div className="mb-4 inline-flex items-center gap-3">
                        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-50 text-primary-600 font-bold text-sm border border-primary-100">
                          {idx + 1}
                        </span>
                        <h3 className="text-xl font-bold text-foreground group-hover:text-primary-700 transition-colors">
                          {step.t}
                        </h3>
                      </div>
                      <p className="text-foreground-muted leading-relaxed">
                        {step.d}
                      </p>
                    </motion.div>
                  </div>

                  <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: 0.2,
                        type: "spring",
                        stiffness: 200,
                      }}
                      className="w-12 h-12 rounded-full bg-white border-4 border-slate-100 shadow-md flex items-center justify-center z-10 relative"
                    >
                      <div className="w-4 h-4 rounded-full bg-linear-to-br from-primary-500 to-accent-500 shadow-inner" />
                      <div className="absolute inset-0 rounded-full bg-primary-400/20 animate-ping opacity-0 group-hover:opacity-100" />
                    </motion.div>
                  </div>

                  <div className="hidden md:block w-[45%]" />
                </div>
              );
            })}
          </div>

          <div className="md:hidden absolute left-8 top-10 bottom-10 w-0.5 bg-slate-200">
            <motion.div
              style={{ height: lineHeight }}
              className="w-full bg-primary-400"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceProcess;
