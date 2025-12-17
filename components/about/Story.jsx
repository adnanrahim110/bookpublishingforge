"use client";

import Title from "@/components/ui/Title";
import { motion } from "framer-motion";
import Image from "next/image";

const Story = () => {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-50/50 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-4/3 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://placehold.co/800x600/2E86AB/FFFFFF?text=Our+Team"
                alt="Forge My Book Team"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-primary-500 text-white p-6 rounded-xl shadow-xl">
              <div className="text-4xl font-bold font-heading">10+</div>
              <div className="text-primary-100 text-sm">
                Years of Excellence
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-widest mb-4 block">
              Our Story
            </span>
            <Title tag="h2" highlight="Journey" className="mb-6">
              A Journey Built on Passion
            </Title>
            <div className="space-y-4 text-foreground-muted">
              <p>
                Forge My Book was born from a simple yet powerful idea: every
                story deserves to be told, and every author deserves expert
                guidance to bring their vision to life.
              </p>
              <p>
                Founded in 2014 by a team of publishing veterans and literary
                enthusiasts, we set out to democratize the publishing industry.
                We saw talented writers struggling to navigate the complex world
                of book publishing, and we knew we could help.
              </p>
              <p>
                Today, we've helped over 500 authors across 50+ genres transform
                their manuscripts into professionally published books. From
                first-time writers to seasoned authors, our commitment remains
                the same: to craft legacies that last generations.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Story;
