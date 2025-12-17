"use client";

import Button from "@/components/ui/Button";
import Title from "@/components/ui/Title";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const ServiceHero = ({ service }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 45]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[90vh] flex items-center pt-32 pb-20 overflow-hidden bg-white"
    >
      {/* Background Abstract Art - "The Flow" */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[80vw] h-[80vw] md:w-[50vw] md:h-[50vw] bg-linear-to-br from-primary-50 to-indigo-50 rounded-full blur-3xl opacity-60 translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-[60vw] h-[60vw] bg-linear-to-tr from-amber-50 to-rose-50 rounded-full blur-3xl opacity-60 -translate-x-1/3 translate-y-1/3" />

        {/* Animated Grid */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text Content - Brutalist/Minimal Layout */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            style={{ y, opacity }}
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary-100 bg-white/50 backdrop-blur-md text-primary-600 text-sm font-medium mb-6 mx-auto lg:mx-0"
            >
              <Sparkles size={14} />
              <span className="uppercase tracking-widest text-xs">
                Premium Service
              </span>
            </motion.div>

            <Title
              tag="h1"
              size="text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1]"
              className="mb-6"
            >
              {service.title}
            </Title>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-foreground-muted mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0"
            >
              {service.heroDescription}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button href="/contact" size="lg" icon={ArrowRight}>
                Get Started
              </Button>
              <Button href="#features" variant="outline" size="lg">
                Explore Features
              </Button>
            </motion.div>
          </motion.div>

          {/* Visual Content - "The Monolith" Card */}
          <motion.div
            className="flex-1 w-full max-w-lg lg:max-w-none perspective-[1000px]"
            initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              style={{ rotate }}
              className="relative aspect-square md:aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl ring-1 ring-black/5 bg-white group"
            >
              {/* Main Image */}
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent opacity-80" />

              {/* Floating UI Elements designed to look like a tool interface */}
              <div className="absolute inset-x-0 bottom-0 p-8 text-white">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30">
                    <service.icon size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-white/80 font-medium">
                      Expertise Level
                    </p>
                    <p className="text-lg font-bold">World-Class</p>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-8 right-8 w-20 h-20 rounded-full border border-white/20 border-dashed animate-spin-slow" />
            </motion.div>

            {/* Back Glow */}
            <div className="absolute -inset-4 bg-primary-500/20 blur-3xl rounded-full -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;
