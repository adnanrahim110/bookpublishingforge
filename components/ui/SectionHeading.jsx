"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Title from "./Title";

const SectionHeading = ({
  title,
  highlight = "",
  titleColor = "text-foreground",
  titleTag = "h2",
  subtitle,
  description,
  align = "center",
  className = "",
  titleClassName = "",
}) => {
  const alignStyles = {
    left: "text-left",
    center: "text-center mx-auto",
    right: "text-right ml-auto",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={cn(
        "max-w-3xl xl:max-w-5xl mb-12 md:mb-16",
        alignStyles[align],
        className
      )}
    >
      {subtitle && (
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="block text-primary-500 font-semibold text-sm uppercase tracking-wider mb-3"
        >
          {subtitle}
        </motion.span>
      )}
      <Title
        tag={titleTag}
        highlight={highlight}
        color={titleColor}
        className={titleClassName}
      >
        {title}
      </Title>
      {description && (
        <p className="text-foreground-muted xl:text-lg leading-relaxed mt-2">
          {description}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeading;
