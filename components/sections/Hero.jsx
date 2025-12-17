"use client";

import { Button } from "@/components/ui";
import { motion } from "framer-motion";
import Image from "next/image";
import Title from "../ui/Title";

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full pt-35 pb-28">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-1/3 blur-2xl aspect-square rounded-full bg-linear-to-br from-accent-50 to-background" />
        <div className="absolute -bottom-20 -right-20 w-1/3 blur-2xl aspect-square rounded-full bg-linear-to-br from-accent-50 to-background" />
      </div>
      <div className="container-custom relative z-10">
        <div className="absolute h-94 left-8 z-2 w-1/4">
          <motion.div
            initial={{ clipPath: "inset(0% 100% 0% 0%)" }}
            animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
            transition={{ duration: 2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="absolute -top-10 left-3 w-40 h-auto z-2"
          >
            <Image
              src="/imgs/hero-1.png"
              width={600}
              height={600}
              alt="Decorative floating book"
            />
          </motion.div>
          <motion.div
            initial={{ clipPath: "inset(0% 0% 0% 100%)" }}
            animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
            transition={{ duration: 2, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
            className="absolute -bottom-12 left-0 w-32 h-auto z-2"
          >
            <Image
              src="/imgs/hero-3.png"
              width={600}
              height={600}
              alt="Decorative floating book"
            />
          </motion.div>
        </div>
        <div className="absolute h-94 right-8 z-2 w-1/4">
          <motion.div
            initial={{ clipPath: "inset(0% 100% 0% 0%)" }}
            animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
            transition={{ duration: 2, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            className="absolute -top-10 -right-2 w-42 h-auto"
          >
            <Image
              src="/imgs/hero-2.png"
              width={600}
              height={600}
              alt="Decorative floating book"
            />
          </motion.div>
          <motion.div
            initial={{ clipPath: "inset(0% 0% 0% 100%)" }}
            animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
            transition={{ duration: 2, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
            className="absolute -bottom-12 w-34 h-auto -right-5"
          >
            <Image
              src="/imgs/hero-4.png"
              width={600}
              height={600}
              alt="Decorative floating book"
            />
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto mb-4 relative z-1"
        >
          <div className="relative rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=1200&h=700&fit=crop"
              alt="Open book on wooden desk"
              className="size-full max-h-94 object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-center"
        >
          <div className="relative inline-block">
            <Title tag="h1" highlight="Publishing" className="font-bold">
              Stories Worth Publishing
            </Title>
          </div>

          <p className="text-lg xl:text-xl font-medium text-foreground-muted mb-10 mx-auto max-w-3xl mt-5">
            Transform your manuscript into a professionally published book. We
            guide you through every step.
          </p>

          <Button
            href="/contact"
            className="bg-primary-600 hover:bg-primary-700 text-white rounded-lg px-8 text-lg font-semibold shadow-lg shadow-primary-600/20"
          >
            Get Your Free Quote
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="absolute left-1/2 -bottom-10 -translate-x-1/2 z-10 w-full"
      >
        <div className="container-custom">
          <div className="bg-white rounded-2xl shadow-[0_20px_40px_-5px_rgba(0,0,0,0.1)] max-w-4xl mx-auto py-4">
            <div className="flex flex-col md:flex-row items-center justify-around gap-8 md:gap-0 px-8">
              <div className="flex items-center gap-4">
                <svg
                  className="w-10 h-10 text-primary-500"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                </svg>
                <div className="text-left">
                  <div className="text-xl font-bold text-foreground">500+</div>
                  <div className="text-sm font-medium text-foreground-muted">
                    Published
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <svg
                  className="w-10 h-10 text-primary-500"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
                <div className="text-left">
                  <div className="text-xl font-bold text-foreground">1000+</div>
                  <div className="text-sm font-medium text-foreground-muted">
                    Authors
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <svg
                  className="w-10 h-10 text-primary-500"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
                <div className="text-left">
                  <div className="text-xl font-bold text-foreground">
                    Worldwide
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
