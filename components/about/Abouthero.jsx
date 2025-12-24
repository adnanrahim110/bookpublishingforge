"use client";

import Title from "@/components/ui/Title";
import { motion } from "framer-motion";
import Image from "next/image";

const Abouthero = () => {
  return (
    <section className="pt-32 pb-20 bg-background relative overflow-hidden min-h-screen flex items-center">
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
            <Title tag="h1" highlight="Forge" className="mb-4">
              About Book Publishing Forge
            </Title>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-foreground-muted text-lg xl:text-xl max-w-xl mb-8 leading-relaxed"
            >
              Every book begins as a spark—an idea, a memory, a story that needs
              to be told. But between that spark and a finished book on a
              reader's shelf lies a journey that can feel overwhelming, lonely,
              and filled with technical hurdles. <br />
              That's where we come in. At Book Publishing Forge, we believe that
              great stories deserve to be published with care, clarity, and
              expert support. We're not a faceless corporation; we're your
              partners, guides, and biggest advocates on the path from
              manuscript to masterpiece.
            </motion.p>
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
