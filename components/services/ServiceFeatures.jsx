"use client";

import Title from "@/components/ui/Title";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const ServiceFeatures = ({ features }) => {
  return (
    <section id="features" className="section-padding bg-slate-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Title tag="h2" highlight="Includes" className="mb-6">
            What's Included
          </Title>
          <p className="text-foreground-muted text-lg">
            A comprehensive suite of features designed to deliver professional
            results at every stage.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-2xl shadow-xs border border-slate-100 hover:shadow-xl hover:border-primary-100 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center text-primary-600 mb-6 group-hover:bg-primary-500 group-hover:text-white transition-colors duration-300">
                <CheckCircle2 size={24} />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary-700 transition-colors">
                Feature {index + 1}
              </h3>
              <p className="text-foreground-muted font-medium leading-relaxed">
                {feature}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceFeatures;
