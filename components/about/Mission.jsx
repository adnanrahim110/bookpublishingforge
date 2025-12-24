"use client";

import Title from "@/components/ui/Title";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Award, Handshake, Shield, Sparkles } from "lucide-react";
import { useRef, useState } from "react";

const values = [
  {
    icon: Handshake,
    title: "True Partnership, Not Just a Transaction.",
    description:
      "You'll work with a dedicated project manager who learns your goals and your voice. We're in your corner from the first conversation to the launch day celebration and beyond.",
    color: "rose",
  },
  {
    icon: Shield,
    title: "End-to-End Guidance.",
    description:
      "We help you see the big picture, guiding you through the entire publishing journey—from the first edit to the final marketing campaign—with clear, actionable steps.",
    color: "sky",
  },
  {
    icon: Award,
    title: "Quality as a Standard, Not an Upgrade.",
    description:
      "\"World-class\" isn't just a label on our site; it's our commitment. We work with experienced editors, award-winning designers, and savvy marketers because your story deserves nothing less.",
    color: "amber",
  },
];

const colorMap = {
  rose: {
    bg: "bg-rose-50",
    border: "border-rose-200",
    text: "text-rose-600",
    glow: "shadow-rose-200/50",
    ring: "ring-rose-100",
  },
  sky: {
    bg: "bg-sky-50",
    border: "border-sky-200",
    text: "text-sky-600",
    glow: "shadow-sky-200/50",
    ring: "ring-sky-100",
  },
  amber: {
    bg: "bg-amber-50",
    border: "border-amber-200",
    text: "text-amber-600",
    glow: "shadow-amber-200/50",
    ring: "ring-amber-100",
  },
};

const Mission = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 20%"],
  });

  return (
    <section
      className="section-padding bg-slate-50 relative overflow-hidden"
      ref={containerRef}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 -left-20 w-72 h-72 bg-primary-100/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 -right-20 w-96 h-96 bg-violet-50/50 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary-600 font-semibold text-sm uppercase tracking-widest mb-4 block"
          >
            Our Mission & Values
          </motion.span>
          <Title tag="h2" highlight="Different" className="mb-6">
            What Makes Us Different?
          </Title>
          <p className="text-foreground-muted text-lg">
            In a world of automated services and template-driven publishing, we
            choose a different path: <br />
            You're the Author. We're the Craftspeople. This is 100% your book.
            We never take rights or royalties. Our role is to provide the expert
            services—the writing, editing, design, and strategy—that bring your
            vision to life, while you remain in full creative and financial
            control.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <svg
            className="absolute left-1/2 -translate-1/2 top-1/2 h-[calc(100%-140px)] w-4 hidden md:block"
            preserveAspectRatio="none"
          >
            <line
              x1="50%"
              y1="0"
              x2="50%"
              y2="100%"
              stroke="#e2e8f0"
              strokeWidth="2"
              strokeDasharray="8 8"
            />
            <motion.line
              x1="50%"
              y1="0"
              x2="50%"
              y2="100%"
              stroke="url(#gradient)"
              strokeWidth="3"
              strokeLinecap="round"
              style={{ pathLength: scrollYProgress }}
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#2E86AB" />
                <stop offset="50%" stopColor="#7c3aed" />
                <stop offset="100%" stopColor="#f59e0b" />
              </linearGradient>
            </defs>
          </svg>

          <div className="space-y-16 md:space-y-0">
            {values.map((value, index) => (
              <ValueNode
                key={index}
                value={value}
                index={index}
                total={values.length}
                scrollProgress={scrollYProgress}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const ValueNode = ({ value, index }) => {
  const isEven = index % 2 === 0;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isHovered, setIsHovered] = useState(false);

  const colors = colorMap[value.color];

  return (
    <motion.div
      ref={ref}
      className={`relative grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-8 md:gap-12 items-center py-8 md:py-16`}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <motion.div
        className={`${isEven ? "md:order-3" : "md:order-1"} ${
          isEven ? "md:text-left" : "md:text-right"
        }`}
        initial={{ opacity: 0, x: isEven ? 50 : -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <motion.div
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          animate={isHovered ? { scale: 1.02 } : { scale: 1 }}
          className={`bg-white rounded-2xl p-6 md:p-8 shadow-lg border ${colors.border} hover:shadow-xl transition-shadow duration-300 relative overflow-hidden group`}
        >
          <div
            className={`absolute top-0 ${
              isEven ? "left-0" : "right-0"
            } w-20 h-20 ${colors.bg} rounded-br-[100px] -translate-y-1/2 ${
              isEven ? "-translate-x-1/2" : "translate-x-1/2"
            } group-hover:scale-125 transition-transform duration-500`}
          />

          <div className="relative z-10">
            <div
              className={`md:hidden mb-4 ${colors.bg} w-12 h-12 rounded-xl flex items-center justify-center ${colors.text}`}
            >
              <value.icon size={24} />
            </div>

            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">
              {value.title}
            </h3>
            <p className="text-foreground-muted leading-relaxed">
              {value.description}
            </p>
          </div>
        </motion.div>
      </motion.div>

      <div className="hidden md:flex md:order-2 justify-center relative">
        <motion.div
          className="relative"
          animate={isHovered ? { scale: 1.15 } : { scale: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <motion.div
            className={`absolute inset-0 rounded-full ${colors.bg} blur-md`}
            animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0.2, 0.5] }}
            transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
          />

          <div
            className={`relative w-16 h-16 rounded-full ${colors.bg} border-4 border-white shadow-xl ${colors.glow} flex items-center justify-center ring-4 ${colors.ring}`}
          >
            <value.icon
              className={`${colors.text}`}
              size={28}
              strokeWidth={1.5}
            />
          </div>

          <motion.div
            className={`absolute -top-4 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-primary-300`}
            animate={{ y: [0, -5, 0], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
          />
          <motion.div
            className={`absolute -bottom-4 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-primary-300`}
            animate={{ y: [0, 5, 0], opacity: [0.5, 1, 0.5] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: index * 0.3 + 0.5,
            }}
          />
        </motion.div>
      </div>

      <motion.div
        className={`hidden md:flex ${
          isEven ? "md:order-1 justify-end" : "md:order-3 justify-start"
        }`}
        initial={{ opacity: 0, x: isEven ? -50 : 50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <motion.div
          whileHover={{ rotate: [0, -5, 5, 0], scale: 1.1 }}
          transition={{ duration: 0.5 }}
          className={`w-24 h-24 rounded-2xl ${colors.bg} border ${colors.border} flex items-center justify-center shadow-md`}
        >
          <value.icon
            className={`${colors.text}`}
            size={40}
            strokeWidth={1.5}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Mission;
