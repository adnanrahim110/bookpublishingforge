"use client";

import Title from "@/components/ui/Title";
import { motion } from "framer-motion";
import Image from "next/image";

const Abouthero = () => {
  return (
    <section className="pt-32 pb-20 bg-background relative overflow-hidden min-h-screen max-h-180 flex items-center">
      <img
        src="/imgs/frame.png"
        className="absolute bottom-0 left-0 h-90 mix-blend-multiply w-auto z-1"
        alt=""
      />
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-primary-100 px-4 py-1.5 rounded-full text-sm font-medium text-primary-700 mb-6 shadow-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
              </span>
              Est. 2014 • 10+ Years of Excellence
            </motion.div>

            <Title
              tag="h1"
              size="text-5xl lg:text-7xl font-bold leading-tight"
              highlight="Legacy"
              className="mb-6"
            >
              Craft Your Legacy
            </Title>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-foreground-muted text-lg md:text-xl max-w-xl mb-8 leading-relaxed"
            >
              We're more than just publishers. We are the architects of stories,
              dedicated to transforming your manuscript into a masterpiece that
              inspires readers for generations to come.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-8"
            >
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-foreground">500+</span>
                <span className="text-sm text-foreground-muted uppercase tracking-wider">
                  Books Published
                </span>
              </div>
              <div className="w-px h-12 bg-slate-200" />
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-foreground">50+</span>
                <span className="text-sm text-foreground-muted uppercase tracking-wider">
                  Awards Won
                </span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative z-20 w-full"
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="relative rounded-r-2xl aspect-square rounded-l-md overflow-hidden transform rotate-y-[-15deg] rotate-x-[5deg]">
              <Image
                src="/imgs/about-hero.png"
                alt="Book Cover"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default Abouthero;
