"use client";

import { Loader2 } from "lucide-react";
import Link from "next/link";
import { forwardRef } from "react";

const Button = forwardRef(
  (
    {
      children,
      variant = "solid",
      tone = "primary",
      size = "default",
      className = "",
      disabled = false,
      isLoading = false,
      icon: Icon,
      iconPosition = "right",
      href,
      target,
      type = "button",
      onClick,
      ...props
    },
    ref
  ) => {
    const isDisabled = disabled || isLoading;

    const sizes = {
      sm: "px-5 py-2.5 text-sm",
      default: "px-7 py-2.5 text-base",
      lg: "px-9 py-4.5 text-lg",
    };

    const content = (
      <>
        {Icon && iconPosition === "left" && !isLoading && (
          <Icon className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-0.5" />
        )}
        <span className="relative z-10">{children}</span>
        {Icon && iconPosition === "right" && !isLoading && (
          <Icon className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5" />
        )}
        {isLoading && <Loader2 className="w-5 h-5 animate-spin" />}
      </>
    );

    const baseStyles = `
      group relative inline-flex items-center justify-center gap-2.5
      font-semibold rounded-xl overflow-hidden cursor-pointer
      transition-all duration-300 ease-out
      focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary-500
      ${sizes[size]}
    `;

    const getButtonStyles = () => {
      if (isDisabled) {
        return `${baseStyles} bg-gray-200 text-gray-400 cursor-not-allowed ${className}`;
      }

      if (variant === "solid") {
        const toneStyles = {
          primary: `
            bg-primary-500 text-white
            before:absolute border-2 border-primary-500 before:inset-0 before:bg-primary-600 before:translate-y-full before:transition-transform before:duration-300 before:ease-out
            hover:before:translate-y-0
            after:absolute border-2 after:inset-0 after:bg-gradient-to-t after:from-black/10 after:to-transparent after:opacity-0 after:transition-opacity after:duration-200
            active:after:opacity-100
            shadow-lg shadow-primary-500/20 hover:shadow-xl hover:shadow-primary-500/30
          `,
          secondary: `
            bg-foreground text-white
            before:absolute border-2 border-foreground before:inset-0 before:bg-foreground/80 before:translate-y-full before:transition-transform before:duration-300 before:ease-out
            hover:before:translate-y-0
            shadow-lg shadow-foreground/20 hover:shadow-xl hover:shadow-foreground/30
          `,
          ghost: `
            bg-primary-50 text-primary-600
            before:absolute border-2 border-primary-100 before:inset-0 before:bg-primary-100 before:scale-x-0 before:origin-left before:transition-transform before:duration-300 before:ease-out
            hover:before:scale-x-100
          `,
        };
        return `${baseStyles} ${toneStyles[tone]} ${className}`;
      }

      if (variant === "outline") {
        const toneStyles = {
          primary: `
            bg-transparent text-primary-500 border-2 border-primary-500
            before:absolute before:inset-0 before:bg-primary-500 before:scale-x-0 before:origin-center before:transition-transform before:duration-300 before:ease-out
            hover:before:scale-x-100 hover:text-white
          `,
          secondary: `
            bg-transparent text-foreground border-2 border-foreground
            before:absolute before:inset-0 before:bg-foreground before:scale-x-0 before:origin-center before:transition-transform before:duration-300 before:ease-out
            hover:before:scale-x-100 hover:text-white
          `,
          ghost: `
            bg-transparent text-foreground-muted border-2 border-border
            before:absolute before:inset-0 before:bg-primary-50 before:scale-y-0 before:origin-bottom before:transition-transform before:duration-300 before:ease-out
            hover:before:scale-y-100 hover:border-primary-500 hover:text-primary-500
          `,
        };
        return `${baseStyles} ${toneStyles[tone]} ${className}`;
      }

      return `${baseStyles} ${className}`;
    };

    const buttonElement = <span className={getButtonStyles()}>{content}</span>;

    if (href && !isDisabled) {
      return (
        <Link ref={ref} href={href} target={target} {...props}>
          {buttonElement}
        </Link>
      );
    }

    return (
      <button
        ref={ref}
        type={type}
        onClick={onClick}
        disabled={isDisabled}
        {...props}
      >
        {buttonElement}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
