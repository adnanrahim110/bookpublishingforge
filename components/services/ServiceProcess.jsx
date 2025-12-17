"use client";

import Title from "@/components/ui/Title";
import { motion } from "framer-motion";

const ServiceProcess = ({ process }) => {
  return (
    <section className="section-padding bg-white overflow-hidden">
      <div className="container-custom">
        <div className="mb-16 md:text-center max-w-3xl mx-auto">
          <Title tag="h2" highlight="Steps" className="mb-6">
            How It Works
          </Title>
          <p className="text-foreground-muted text-lg">
            Our streamlined process ensures transparency and quality from start
            to finish.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group relative"
              >
                {/* Step Number Bubble */}
                <div className="w-16 h-16 mx-auto bg-white border-2 border-primary-100 rounded-full flex items-center justify-center text-xl font-bold text-primary-600 shadow-sm relative z-10 group-hover:scale-110 group-hover:border-primary-500 group-hover:bg-primary-500 group-hover:text-white transition-all duration-300 mb-6">
                  {step.step}
                </div>

                {/* Content Card */}
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 text-center hover:bg-white hover:shadow-lg hover:-translate-y-2 transition-all duration-300 h-full">
                  <h3 className="text-lg font-bold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-foreground-muted leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceProcess;
