"use client";

import { stats } from "@/constants";
import { motion, useInView, useSpring } from "framer-motion";
import { Award, BookOpen, Layers, Users } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

const Counter = ({ value, label, icon: IconName, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const numericValue = parseInt(value.replace(/\D/g, ""));
  const suffix = value.replace(/[0-9]/g, "");

  const springValue = useSpring(0, {
    damping: 30,
    stiffness: 100,
    duration: 2,
  });

  useEffect(() => {
    if (isInView) {
      springValue.set(numericValue);
    }
  }, [isInView, numericValue, springValue]);

  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      setDisplayValue(Math.floor(latest));
    });
  }, [springValue]);

  const icons = {
    book: BookOpen,
    users: Users,
    layers: Layers,
    award: Award,
  };

  const Icon = icons[IconName] || BookOpen;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="flex flex-col items-center text-center px-3 py-5 xl:p-6 bg-white rounded-2xl border border-primary-50 shadow-xs hover:shadow-md transition-shadow"
    >
      <div className="w-14 h-14 rounded-full bg-primary-50 flex items-center justify-center text-primary-500 mb-4">
        <Icon size={28} strokeWidth={1.5} />
      </div>

      <div className="text-3xl lg:text-4xl xl:text-5xl font-heading font-bold text-foreground mb-2 flex items-baseline">
        {displayValue}
        <span className="text-2xl md:text-3xl text-primary-500 ml-1">
          {suffix}
        </span>
      </div>

      <p className="text-foreground-muted font-medium uppercase tracking-wide text-sm">
        {label}
      </p>
    </motion.div>
  );
};

const Stats = () => {
  return (
    <section className="py-20 bg-[#F8FAFC]">
      <div className="container-custom">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <Counter key={index} {...stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
