"use client";

import Button from "@/components/ui/Button";
import Title from "@/components/ui/Title";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

const ServiceHero = ({ service }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const hero = service.hero;

  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[95vh] flex items-center pt-32 pb-20 overflow-hidden bg-white"
    >
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[80vw] h-[80vw] md:w-[60vw] md:h-[60vw] bg-linear-to-bl from-primary-50/80 via-indigo-50/50 to-transparent rounded-full blur-[100px] translate-x-1/4 -translate-y-1/4" />
        <div className="absolute bottom-0 left-0 w-[50vw] h-[50vw] bg-linear-to-tr from-accent-50/60 to-transparent rounded-full blur-[80px] -translate-x-1/4 translate-y-1/4" />

        <div className="absolute inset-0 opacity-[0.03] bg-[url('/imgs/noise.png')] mix-blend-overlay" />
      </div>

      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <motion.div
            style={{ y, opacity }}
            className="flex-1 text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary-100 bg-white/80 backdrop-blur-md text-primary-600 text-sm font-semibold tracking-wide shadow-xs mb-8 mx-auto lg:mx-0"
            >
              <Sparkles size={16} className="text-accent-500" />
              <span className="uppercase">{service.title}</span>
            </motion.div>

            <Title
              tag="h1"
              highlight={hero.highlight}
              size="text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1]!"
              className="mb-6 pb-2"
            >
              {hero.title}
            </Title>

            <div className="space-y-6 mb-10">
              {Array.isArray(hero.text) ? (
                hero.text.map((paragraph, index) => (
                  <motion.p
                    key={index}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="text-xl text-foreground-muted leading-relaxed max-w-2xl mx-auto lg:mx-0 font-light"
                    dangerouslySetInnerHTML={{ __html: paragraph }}
                  />
                ))
              ) : (
                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-xl text-foreground-muted leading-relaxed max-w-2xl mx-auto lg:mx-0 font-light"
                  dangerouslySetInnerHTML={{ __html: hero.text }}
                />
              )}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button
                href="/contact"
                size="lg"
                icon={ArrowRight}
                className="shadow-lg shadow-primary-500/20 hover:shadow-primary-500/30"
              >
                Get Started
              </Button>
              <Button
                href="#features"
                variant="outline"
                size="lg"
                className="bg-white/50 backdrop-blur-sm hover:bg-white"
              >
                Explore Features
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex-1 w-full max-w-xl lg:max-w-none relative perspective-[2000px]"
            initial={{ opacity: 0, x: 50, rotateY: -10 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10"
            >
              <div className="relative aspect-4/5 md:aspect-square rounded-4xl overflow-hidden shadow-[0_40px_100px_-30px_rgba(0,0,0,0.2)] ring-1 ring-white/50 bg-white group">
                <Image
                  src={`/imgs/services/${service.slug}.jpg`}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  priority
                />

                <div className="absolute inset-0 bg-linear-to-t from-foreground/60 via-transparent to-transparent opacity-60" />

                <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-lg">
                  <div className="flex items-center justify-between text-white">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider opacity-80 mb-1 text-white/70">
                        Service
                      </p>
                      <p className="text-lg font-bold text-white">
                        {service.title}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent-200 rounded-full blur-3xl opacity-40 animate-pulse" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary-200 rounded-full blur-3xl opacity-40 animate-pulse delay-1000" />

            <motion.div
              className="absolute inset-0 border-2 border-primary-100/50 rounded-4xl -z-10"
              animate={{ rotate: [0, 5, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              style={{ scale: 1.05 }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;
