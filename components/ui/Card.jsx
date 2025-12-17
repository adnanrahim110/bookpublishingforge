"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const Card = ({
  children,
  className = "",
  href,
  hover = true,
  padding = "default",
  ...props
}) => {
  const baseStyles = "bg-white rounded-xl border border-border overflow-hidden";

  const hoverStyles = hover
    ? "transition-all duration-300 ease-in-out hover:border-primary-200 hover:shadow-lg hover:-translate-y-1"
    : "";

  const paddingStyles = {
    none: "",
    sm: "p-4",
    default: "p-6",
    lg: "p-8",
  };

  const cardContent = (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`${baseStyles} ${hoverStyles} ${paddingStyles[padding]} ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );

  if (href) {
    return <Link href={href}>{cardContent}</Link>;
  }

  return cardContent;
};

export default Card;
