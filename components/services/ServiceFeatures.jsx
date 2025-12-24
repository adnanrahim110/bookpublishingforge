"use client";

import Title from "@/components/ui/Title";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  Crown,
  Layers,
  Rocket,
  ShieldCheck,
  Sparkles,
  Star,
  Trophy,
  Zap,
} from "lucide-react";

const icons = [Star, Trophy, Zap, ShieldCheck, Rocket, Crown, Layers, Sparkles];

const FeatureCard = ({ feature, index }) => {
  const Icon = icons[index % icons.length] || CheckCircle2;

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      className="group relative flex flex-col justify-between h-full p-8 rounded-3xl bg-white border border-slate-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] overflow-hidden transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(48,137,170,0.15)] hover:-translate-y-1 hover:border-primary-100"
    >
      <div className="absolute inset-0 bg-linear-to-br from-primary-50/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <div className="absolute -right-10 -top-10 w-40 h-40 bg-primary-100/30 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

      <div className="relative z-10">
        <div className="w-14 h-14 mb-6 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-primary-500 transition-colors duration-300 group-hover:bg-primary-500 group-hover:text-white group-hover:scale-110 shadow-sm">
          <Icon size={28} strokeWidth={1.5} />
        </div>

        <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary-700 transition-colors">
          {feature.t}
        </h3>

        <p className="text-foreground-muted leading-relaxed text-sm md:text-base">
          {feature.d}
        </p>
      </div>
    </motion.div>
  );
};

const ServiceFeatures = ({ features }) => {
  const title = features.title || "What's Included";
  const highlight = features.highlight || "Included";
  const description =
    features.description ||
    "A comprehensive suite of features designed to deliver professional results at every stage.";

  return (
    <section className="section-padding bg-slate-50/50 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#3089aa 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="container-custom relative z-10">
        <div className="text-center flex flex-col items-center max-w-4xl mx-auto mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200 text-foreground-muted text-xs font-bold uppercase tracking-wider mb-5 shadow-xs"
          >
            <Zap size={12} className="text-accent-500 fill-accent-500" />
            Core Benefits
          </motion.div>

          <Title tag="h2" highlight={highlight} className="mb-6">
            {title}
          </Title>
          <p className="text-lg text-foreground-muted max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr"
        >
          {features.points.map((feature, index) => {
            const isLarge =
              features.points.length > 3 && (index === 0 || index === 3);

            return (
              <div
                key={index}
                className={`${isLarge ? "md:col-span-2 lg:col-span-1" : ""}`}
              >
                <FeatureCard feature={feature} index={index} />
              </div>
            );
          })}
        </motion.div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-primary-200/50 to-transparent" />
      </div>
    </section>
  );
};

export default ServiceFeatures;
