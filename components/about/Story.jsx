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
                src="/imgs/story-team.png"
                alt="Forge My Book Team working together"
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
            <Title tag="h2" highlight="Forge" className="mb-6">
              Why a "Forge"?
            </Title>
            <div className="space-y-4 text-foreground-muted">
              <p>
                The name "Forge" isn't an accident. A forge is where raw
                materials are transformed with skill, heat, and pressure into
                something stronger and more valuable. We see the publishing
                process the same way. We are a US-based company that proudly
                facilitates the authors worldwide.
              </p>
              <p>
                We founded Book Publishing Forge because we saw too many
                talented writers give up, not for lack of skill, but from the
                frustration of navigating a complex industry alone. We saw too
                many great ideas lost to confusion about formatting, fear of
                marketing, or the sheer exhaustion of doing it all by
                themselves.
              </p>
              <p>
                Our mission is simple: to be the steady, skilled hands that help
                you shape your raw manuscript into a polished, professional, and
                published book. We provide the heat of creative collaboration
                and the pressure of professional standards to help you forge
                your literary legacy.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Story;
