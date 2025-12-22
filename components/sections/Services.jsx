"use client";

import Title from "@/components/ui/Title";
import { services } from "@/constants/services";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { SectionHeading } from "../ui";

const ServiceCard = ({ service, index }) => {
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true }}
      className="group relative h-full"
    >
      <Link href={`/${service.slug}`} className="block h-full">
        <div className="relative h-full bg-white rounded-3xl p-8 border border-primary-100/50 shadow-sm transition-all duration-300 hover:shadow-[0_20px_40px_-15px_rgba(46,134,171,0.15)] hover:-translate-y-2 overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-br from-primary-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <div className="absolute -right-8 -top-8 w-32 h-32 bg-primary-100/30 rounded-full blur-2xl group-hover:bg-primary-100/60 transition-colors duration-500" />

          <div className="relative z-10 flex flex-col h-full">
            <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary-50 text-primary-500 group-hover:scale-110 group-hover:bg-primary-500 group-hover:text-white transition-all duration-300">
              <Icon className="w-7 h-7" strokeWidth={1.5} />
            </div>

            <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary-600 transition-colors">
              {service.title}
            </h3>

            <p className="text-foreground-muted leading-relaxed mb-6 grow">
              {service.shortDescription}
            </p>

            <div className="flex items-center text-sm font-semibold text-primary-500 group-hover:text-primary-600">
              <span className="relative overflow-hidden">
                Learn More
                <span className="absolute left-0 bottom-0 w-full h-px bg-primary-500 -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
              </span>
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

const Services = () => {
  return (
    <section
      id="services"
      className="section-padding pt-32 bg-white relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-primary-100 to-transparent" />

      <div className="container-custom relative z-10">
        <SectionHeading
          subtitle="What We Do"
          title="Ever Wonder How a Book Really Gets Made?"
          highlight="Book"
          description="It’s more than just uploading a file. It’s a journey, and we’re here to guide you through every step with care, professionalism, and real human support."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) =>
            idx === services.length - 2 ? null : (
              <ServiceCard key={service.slug} service={service} index={idx} />
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Services;
