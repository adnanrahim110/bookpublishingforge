"use client";

import { ChevronDown } from "lucide-react";
import { forwardRef, useState } from "react";

const Select = forwardRef(
  (
    {
      label,
      error,
      options = [],
      placeholder = "Select an option",
      className = "",
      containerClassName = "",
      ...props
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = useState(false);

    const baseStyles =
      "w-full py-3.5 px-4 pr-10 font-body text-base bg-background border rounded-lg transition-all duration-200 ease-in-out focus:outline-none appearance-none cursor-pointer";

    const stateStyles = error
      ? "border-red-500 focus:border-red-500 focus:shadow-[0_0_0_3px] focus:shadow-red-500/10"
      : "border-border focus:border-primary-500 focus:shadow-[0_0_0_3px] focus:shadow-primary-100";

    return (
      <div className={`relative ${containerClassName}`}>
        {label && (
          <label
            className={`block mb-2 text-sm font-medium transition-colors duration-200 ${
              isFocused ? "text-primary-500" : "text-foreground"
            } ${error ? "text-red-500" : ""}`}
          >
            {label}
          </label>
        )}
        <div className="relative">
          <select
            ref={ref}
            className={`${baseStyles} ${stateStyles} ${className}`}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            {...props}
          >
            <option value="" disabled>
              {placeholder}
            </option>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground-muted pointer-events-none" />
        </div>
        {error && (
          <p className="mt-1.5 text-sm text-red-500 animate-in fade-in slide-in-from-top-1 duration-200">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Select.displayName = "Select";

export default Select;
