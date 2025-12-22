"use client";

import Title from "@/components/ui/Title";
import { processSteps } from "@/constants";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { FileCheck, FileText, Rocket, Settings } from "lucide-react";
import Link from "next/link";

const stepIcons = [FileText, FileCheck, Settings, Rocket];

const Process = () => {
  return (
    <section
      id="process"
      className="section-padding bg-background overflow-hidden relative min-h-250 lg:min-h-240 flex items-center"
    >
      <div className="container-custom relative h-full">
        <div className="lg:hidden flex flex-col gap-12 relative">
          <div className="mb-8">
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-widest mb-2 block">
              How It Works
            </span>
            <Title tag="h2" highlight="Work?">
              So How Does This Work?
            </Title>
          </div>

          <div className="absolute left-8 top-32 bottom-0 w-0.5 bg-primary-100">
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="w-full bg-primary-500 origin-top"
            />
          </div>

          {processSteps.map((step, idx) => {
            const Icon = stepIcons[idx];
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.2 }}
                viewport={{ once: true }}
                className="flex gap-6 relative z-10 pl-2"
              >
                <div className="w-12 h-12 shrink-0 rounded-full bg-white border-2 border-primary-100 flex items-center justify-center shadow-md relative z-10 mt-1">
                  <span className="font-heading font-bold text-primary-600">
                    {step.step}
                  </span>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex-1">
                  <div className="w-10 h-10 bg-primary-50 rounded-lg flex items-center justify-center mb-4 text-primary-600">
                    <Icon size={20} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-foreground-muted text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <svg
          viewBox="0 0 800 440.47"
          className="absolute w-auto left-[53%] -top-5 -translate-x-1/2 h-180 pointer-events-none z-0 overflow-visible"
        >
          <motion.path
            d="M7.2,47.39V173.74c0,12.71,10.36,46.36,49.65,48.94,19.53.24,125.26-.56,141-.56s50-3.91,73.32,26.21c11.77,14.82,9.36,37,9.65,49.88.27,11.59,0,53.89,0,69.65,0,15.36,3.35,52.17,43.8,63.62a41.25,41.25,0,0,0,7.32,1.37c18,1.75,64.77,1.28,84.88,1.28,44.23.1,66.12,2.44,86.59-17.56s18.12-40.95,18.35-56.95,0-67.29,0-79.29c0-10.87-9.66-44-39.49-52.53A49.57,49.57,0,0,0,468.59,226c-51.11,0-81.19-.48-92.21-.94-11.3-.47-49.41-4.24-57.41-45.42-1.89-21.64-3.77-81.88-1.65-104.7,2-21.38,8.31-46.49,40.25-56.92a42.54,42.54,0,0,1,12.2-2.08c44.08-1,285.77-1.24,313.43-1.24,28.07,0,48.08,7.62,55.21,35.63a30.72,30.72,0,0,1,.93,6.88c.7,24.76-.14,132.55-.14,146.55,0,14.83-4.23,39-34.41,43.24-11.47.53-48,.35-48,.35"
            className="inline-block"
            fill="none"
            stroke="#000"
            strokeMiterlimit={10}
            strokeWidth={1}
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 3, ease: "easeInOut" }}
            viewport={{ once: true }}
          />
        </svg>
        <div className="hidden lg:grid grid-cols-1">
          <div className="grid grid-cols-[1.5fr_1fr_1fr] gap-x-8 relative h-full">
            <div className="pl-10 pr-7 pt-10 relative z-10">
              <Title tag="h2" highlight="Work?" size="xl:text-6xl">
                So How Does This Work?
              </Title>
              <p className="text-foreground-muted mt-4">
                Our streamlined process ensures a hassle-free experience from
                start to finish.
              </p>
            </div>
            <ProcessCard
              step={processSteps[2]}
              icon="/imgs/p1.png"
              number={3}
              align="center"
              delay={2}
            />
            <ProcessCard
              step={processSteps[3]}
              icon="/imgs/p2.png"
              number={4}
              align="center"
              delay={2.4}
            />
          </div>
          <div className="grid grid-cols-[1.5fr_1fr_1fr] gap-x-8 mt-2">
            <ProcessCard
              step={processSteps[0]}
              icon="/imgs/p3.png"
              number={1}
              align="center"
              delay={0.6}
            />

            <ProcessCard
              step={processSteps[1]}
              icon="/imgs/p4.png"
              number={2}
              align="center"
              delay={1.6}
            />

            <div className="flex flex-col justify-start pt-24 px-8 relative z-10">
              <svg
                viewBox="0 0 70.35 53.18"
                className="absolute -top-5 w-32 -left-5"
              >
                <motion.path
                  d="M1.75,10.14S11.22.67,24,2.67,42.28,14.14,41.75,21.38s-4.27,8.52-6.94,8.26c-3-.3-4.59-7.5,2.64-10.21s15.36,0,20.13,6.39,5.34,14.79,1.81,25.38"
                  fill="none"
                  stroke="#000"
                  strokeLinecap="round"
                  strokeMiterlimit={10}
                  strokeWidth={0.8}
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 1.2, ease: "easeInOut" }}
                  viewport={{ once: true }}
                />
                <motion.polyline
                  points="51.57 42.14 59.22 51.79 68.39 43.61"
                  fill="none"
                  stroke="#000"
                  strokeLinecap="round"
                  strokeMiterlimit={10}
                  strokeWidth={0.8}
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 1, ease: "easeInOut", delay: 1 }}
                  viewport={{ once: true }}
                />
              </svg>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.5 }}
                viewport={{ once: true }}
              >
                <Link
                  href="/contact"
                  className="text-4xl font-light text-foreground mb-4 group"
                >
                  <span className="underline underline-offset-4 decoration-1 group-hover:decoration-2 transition-all ease-in-out duration-300">
                    Ready to <span className="text-primary">Start?</span> <br />
                    Get Your Free Quote
                  </span>
                  <span className="inline-block ml-1.5 text-primary text-[38px] align-top group-hover:translate-x-1 transition-transform ease-in-out duration-300">
                    &#10148;
                  </span>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProcessCard = ({ step, icon, number, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.5 }}
      viewport={{ once: true }}
      className="p-6 pt-5 w-full max-w-70 relative flex flex-col justify-start items-center"
    >
      <div
        className={cn(
          "absolute left-1/2 -translate-x-1/2 size-16 rounded-[50%_50%_38%_62%/50%_63%_37%_50%] bg-purple-200 text-black border-5 border-background flex items-center justify-center font-bold text-2xl -top-7"
        )}
      >
        {number}
      </div>
      <div className="w-44 mb-4">
        <img src={icon} alt={step.title} />
      </div>

      <div className="text-center">
        <h4 className="font-bold text-2xl mb-1 text-foreground">
          {step.title}
        </h4>
        <p className="text-sm text-foreground-muted">{step.description}</p>
      </div>
    </motion.div>
  );
};

export default Process;
