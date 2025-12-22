"use client";

import { motion } from "framer-motion";
import Title from "../ui/Title";

const Hero = () => {
  return (
    <section className="pt-32 pb-16 bg-linear-to-b from-primary-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-100/50 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-20 w-96 h-96 bg-primary-50/50 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block bg-primary-100 text-primary-700 px-4 py-1.5 rounded-full text-sm font-medium mb-6"
          >
            Contact Us
          </motion.span>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Title
              tag="h1"
              size="text-4xl md:text-5xl lg:text-6xl font-bold"
              highlight="World"
              className="mb-6"
            >
              Let's Get Your Story Out Into the World
            </Title>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-foreground-muted text-lg md:text-xl"
          >
            Have a question about publishing? Ready to start your book journey?
            Or just want to chat about your idea? We’d love to hear from you.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
