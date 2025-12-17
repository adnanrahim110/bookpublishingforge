"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React from "react";

/**
 * Title Component
 * Supports:
 * - Dynamic Tag (h1-h6)
 * - HTML tags in children (e.g., <br />, <span>)
 * - Text Highlighting with SVG underline
 * - Character-by-character animation
 * - Proper word wrapping (fixes line break issues)
 */
const Title = ({
  tag = "h2",
  className,
  size,
  color = "text-foreground",
  highlight = "",
  children,
  ...props
}) => {
  const Tag = motion[tag] || motion.h2;

  const defaultSizes = {
    h1: "text-5xl md:text-6xl xl:text-7xl font-bold",
    h2: "text-4xl md:text-5xl font-bold",
    h3: "text-3xl md:text-4xl font-semibold",
    h4: "text-2xl md:text-3xl font-semibold",
    h5: "text-xl md:text-2xl font-medium",
    h6: "text-lg md:text-xl font-medium",
  };

  const sizeClass = size || defaultSizes[tag] || defaultSizes.h2;

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
        delayChildren: 0.1,
      },
    },
  };

  const charVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  // --- Helper: Render a Word (group of chars) ---
  const renderWord = (word, i, isHighlight = false) => {
    return (
      <span
        key={i}
        className="inline-block whitespace-nowrap mr-[0.25em] relative"
      >
        {word.split("").map((char, charIndex) => (
          <motion.span
            key={`${i}-${charIndex}`}
            variants={charVariants}
            className={cn(
              "inline-block",
              isHighlight ? "text-primary-500" : ""
            )}
          >
            {char}
          </motion.span>
        ))}

        {/* If this groups highlighted words, we might want the underline per word or spanning.
            The previous implementation spanned the specific text segment.
            If we split by words, the underline should probably follow the highlight wrapper logic instead.
            Let's handle highlight wrapping at the text node level, not inside each word if possible,
            OR we add the underline to the word if it's highlighted.

            BUT: If highlighting a phrase "Hello World", we want one underline?
            Or underline per word? "Consultancy" image usually has continuous underline or specific word.
            User said "highlighting the part of title".
            Let's stick to the previous visual: Underline the *segment*.
        */}
      </span>
    );
  };

  // --- Helper: Process Text Nodes for Highlights and Words ---
  const processText = (text) => {
    if (!highlight) {
      // Just split by space to get words
      return text.split(/(\s+)/).map((segment, i) => {
        if (segment.match(/^\s+$/))
          return (
            <span key={i} className="inline-block">
              {" "}
            </span>
          ); // Preserve space
        return renderWord(segment, i);
      });
      // Actually simpler: text.split(" ").map... adds space logic.
      // Better: Split by words, render words with margin-right.
    }

    // Split by highlight
    const regex = new RegExp(`(${highlight})`, "gi");
    const parts = text.split(regex);

    return parts.map((part, i) => {
      const isHighlight = part.toLowerCase() === highlight.toLowerCase();

      // Split this part into words
      const words = part.split(" ");

      const content = words.map((word, wIndex) => {
        if (!word) return null; // Avoid empty strings from split
        // Render word container
        return (
          <span
            key={`${i}-${wIndex}`}
            className="inline-block whitespace-nowrap relative mr-[0.25em]"
          >
            {/* Chars */}
            {word.split("").map((char, cIndex) => (
              <motion.span
                key={`${i}-${wIndex}-${cIndex}`}
                variants={charVariants}
                className={cn(
                  "inline-block",
                  isHighlight ? "text-primary-500" : ""
                )}
              >
                {char}
              </motion.span>
            ))}
          </span>
        );
      });

      if (isHighlight) {
        return (
          <span key={i} className="relative inline-block text-primary-500">
            {/* Render Words inside Highlight Wrapper */}
            {content}

            {/* The SVG Underline for this highlighted segment */}
            <span className="absolute left-0 -bottom-2 w-full h-[0.4em] pointer-events-none">
              <motion.span
                className="block w-full h-full overflow-hidden"
                initial={{ clipPath: "inset(0% 100% 0% 0%)" }}
                whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 210.12 20"
                  className="w-full h-full text-primary-500"
                  preserveAspectRatio="none"
                >
                  <path
                    fill="currentColor"
                    d="M2.44,13.86A548.07,548.07,0,0,1,145.72,3.58c1.7.06,5.16.3,6.86.47,8,.62,19.49,1.73,27.33,2.9,7.4.84,16.43,2.62,23.76,3.88l1.69.3.42.08.21,0,.11,0a2.26,2.26,0,0,1,.79.32,2.15,2.15,0,0,1-1.46,3.92q-7-.64-13.93-1.18c-38.52-2.83-77.41-4.65-115.89-.8A180.7,180.7,0,0,0,55.5,16.75l-6.39,1.53-.1,0a1.17,1.17,0,0,0,.6-.47,1.1,1.1,0,0,0-1-1.67h.11l.43,0a392.21,392.21,0,0,1,47.13-1.05c9.12.44,18.34,1.22,27.11,3.85-8.87-2.21-18-2.62-27.14-2.79a435.13,435.13,0,0,0-44.34,2.16l-1.69.17-.85.09-.43,0h-.1a1.48,1.48,0,0,1-.85-.18,1.36,1.36,0,0,1-.46-1.9,1.44,1.44,0,0,1,.78-.58l.1,0,.21-.05,1.26-.34c3.82-1,7.87-2.17,11.76-2.8,6.46-1.3,13.88-2.33,20.45-3C123,5.84,165.57,8,205.72,11.57a1.8,1.8,0,0,0-.4,3.56l-.11,0-.21,0-.42-.08-1.67-.3-16.77-3A568.15,568.15,0,0,0,77.25,6.27,603.42,603.42,0,0,0,2.44,13.86Z"
                  />
                </svg>
              </motion.span>
            </span>
          </span>
        );
      }
      return content;
    });
  };

  // --- Helper: Recursive Children Processing ---
  const processChildren = (node) => {
    if (typeof node === "string") {
      return processText(node);
    }

    if (Array.isArray(node)) {
      return node.map((child, i) => (
        <React.Fragment key={i}>{processChildren(child)}</React.Fragment>
      ));
    }

    if (React.isValidElement(node)) {
      // Preserve specific tags like <br>
      if (node.type === "br") return <br />;

      // For other elements, recursively process their children
      return React.cloneElement(node, {
        ...node.props,
        children: processChildren(node.props.children),
      });
    }

    return node;
  };

  return (
    <Tag
      className={cn(
        sizeClass,
        color,
        "relative inline-block leading-tight",
        className
      )}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      {...props}
    >
      {processChildren(children)}
    </Tag>
  );
};

export default Title;
