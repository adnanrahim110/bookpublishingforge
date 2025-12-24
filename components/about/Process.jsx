"use client";

import Title from "@/components/ui/Title";
import { motion, useScroll, useTransform } from "framer-motion";
import { BookOpen, Edit3, Layers, PenTool, Send } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

const steps = [
  {
    title: "Begins With Free Consultation",
    description:
      "It all starts with a conversation. We listen to your vision, your goals, and where you feel stuck. We'll discuss your manuscript, target audience, and what success looks like for you. This is where we craft a custom blueprint for your book’s journey—no pressure, just honest advice.",
    icon: PenTool,
    number: "01",
    rotation: 2,
  },
  {
    title: "The Blueprint – Strategy & Planning",
    description:
      "With a clear goal in mind, we build your detailed publishing plan. This includes timelines, service recommendations (editing, design, marketing), and a transparent quote. You’ll know exactly what to expect, when, and why, before we begin any work.",
    icon: Edit3,
    number: "02",
    rotation: -1,
  },
  {
    title: "The Crafting – Expert Execution",
    description:
      "This is where your book takes shape. Our team of editors, designers, and writers gets to work, guided by your plan. You’ll receive regular updates and have opportunities for feedback at every key milestone. We’re crafting with you, not just for you.",
    icon: Layers,
    number: "03",
    rotation: 1.5,
  },
  {
    title: "The Launch – Publishing & Promotion",
    description:
      "Your polished manuscript is ready for the world. We handle the technical setup (formatting, distribution, retailer listings) and execute the launch strategy we planned. From securing your ISBN to running launch-day promotions, we ensure your book makes a splash.",
    icon: BookOpen,
    number: "04",
    rotation: -2,
  },
  {
    title: "The Legacy – Ongoing Support",
    description:
      "Our partnership doesn’t end on launch day. We provide post-launch guidance, sales insights, and support for your next steps, whether that’s marketing a current book or planning your next one. We’re invested in your long-term success as an author.",
    icon: Send,
    number: "05",
    rotation: 1,
  },
];

const Process = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={containerRef} className="relative h-[300vh]">
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-100/30 rounded-full blur-3xl -translate-x-1/2" />
          <div className="absolute bottom-1/4 right-1/4 w-full max-w-lg h-96 bg-amber-50/50 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 container-custom w-full max-w-5xl mx-auto h-full flex flex-col justify-center">
          <div className="text-center mb-12">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-primary-600 font-semibold text-sm uppercase tracking-widest mb-4 block"
            >
              Our Process
            </motion.span>
            <Title tag="h2" highlight="Process" className="mb-6">
              Our Process To Publish Your Ideal Book
            </Title>
            <p className="text-foreground-muted text-lg max-w-2xl mx-auto">
              We believe a great publishing journey should feel guided, not
              confusing. That’s why every author we partner with follows our
              clear, proven 5-step path.
            </p>
          </div>

          <div className="relative w-full max-md:aspect-4/3 md:h-90 flex items-center justify-center">
            {steps.map((step, index) => {
              const rangeStart = index * (1 / steps.length);
              const rangeEnd = (index + 1) * (1 / steps.length);

              const exitProgress = useTransform(
                scrollYProgress,
                [rangeStart, rangeEnd],
                [0, 1]
              );

              const x = useTransform(exitProgress, [0, 1], [0, -1000]);
              const rotate = useTransform(
                exitProgress,
                [0, 1],
                [step.rotation, -45]
              );
              const opacity = useTransform(exitProgress, [0, 0.8], [1, 0]);

              return (
                <ManuscriptPage
                  key={index}
                  step={step}
                  index={index}
                  total={steps.length}
                  style={{
                    x,
                    rotate,
                    opacity,
                    zIndex: steps.length - index,
                  }}
                />
              );
            })}

            <div className="absolute inset-0 flex items-center justify-center z-0">
              <Link
                href="/contact"
                className="text-center p-8 bg-white/50 backdrop-blur-sm rounded-xl border-2 border-dashed border-primary-200 hover:bg-primary-400 hover:border-white/50 hover:-translate-y-1 hover:shadow-[5px_5px_0px] hover:shadow-primary-50 transition-all duration-300 group"
              >
                <BookOpen
                  size={48}
                  className="mx-auto text-primary-400 group-hover:text-primary-200 mb-4"
                />
                <h3 className="text-4xl font-bold text-primary-800 group-hover:text-primary-950 group-hover:text-shadow-sm text-shadow-white/40 transition-colors duration-300">
                  Ready to Publish?
                </h3>
                <p className="text-primary-600 group-hover:text-primary-100 transition-colors duration-300">
                  Your legacy awaits.
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ManuscriptPage = ({ step, style }) => {
  return (
    <motion.div style={style} className="absolute top-0 left-0 w-full h-full">
      <div
        className="w-full h-full bg-[#fdfbf7] rounded-xl shadow-2xl border border-stone-200 p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center relative overflow-hidden transform origin-bottom-left"
        style={{
          backgroundImage: `url("https://www.transparenttextures.com/patterns/cream-paper.png")`,
          boxShadow:
            "0 25px 50px -12px rgba(0, 0, 0, 0.15), inset 0 0 0 1px rgba(0,0,0,0.05)",
        }}
      >
        <div className="absolute inset-0 opacity-30 pointer-events-none mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/rough-cloth.png')]" />

        <div className="relative z-10 w-full h-full flex flex-col md:flex-row gap-8 md:gap-16 items-center">
          <div className="shrink-0 flex flex-col items-center justify-center w-full md:w-1/8 border-b md:border-b-0 md:border-r border-stone-200 pb-6 md:pb-0 md:pr-12 border-dashed">
            <div className="text-[8rem] md:text-[8rem] font-serif leading-none text-stone-100 font-bold absolute -top-20 -left-12 select-none -z-10 text-stroke">
              {step.number}
            </div>
            <div className="w-20 h-20 rounded-full bg-primary-900 text-white flex items-center justify-center shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300">
              <step.icon size={32} strokeWidth={1.5} />
            </div>
          </div>

          <div className="flex-1 text-center md:text-left">
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-stone-800 mb-6 relative inline-block">
              {step.title}
              <svg
                className="absolute w-full h-3 -bottom-2 left-0 text-primary-300"
                viewBox="0 0 100 10"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 5 Q 50 10 100 5"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>
            </h3>
            <p className="text-stone-600 text-lg md:text-xl leading-relaxed font-serif italic">
              "{step.description}"
            </p>

            <div className="absolute bottom-4 right-4 opacity-10 -rotate-12 border-4 border-stone-800 p-2 rounded-lg">
              <span className="text-xs font-black uppercase text-stone-800">
                Forge Approved
              </span>
            </div>
          </div>
        </div>

        <div className="absolute left-0 top-0 bottom-0 w-8 bg-linear-to-r from-stone-300/30 to-transparent pointer-events-none" />
      </div>
    </motion.div>
  );
};

export default Process;
