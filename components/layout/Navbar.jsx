"use client";

import { Button } from "@/components/ui";
import { navLinks } from "@/constants";
import { cn } from "@/lib/utils";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { ChevronDown, ChevronRight, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const pathname = usePathname();
  const dropdownRef = useRef(null);

  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setIsScrolled(latest > 20);
  });

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };

    if (activeDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [activeDropdown]);

  useEffect(() => {
    if (hidden) {
      setActiveDropdown(null);
    }
  }, [hidden]);

  const handleDropdownToggle = (name) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <>
      <motion.header
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg py-3"
            : "bg-transparent py-5"
        }`}
      >
        <nav className="container-custom flex items-center justify-between">
          <Link href="/" className="relative z-10">
            <Image
              src="/imgs/logo-b.png"
              width={500}
              height={100}
              alt="Book Publishing Forge"
              className="h-8 w-auto"
            />
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const url = link.href;
              const isActive = link.dropdown
                ? link.items.some((item) => item.href === pathname)
                : pathname === url;
              const isHovered = activeDropdown === link.name;

              return (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => handleDropdownToggle(link.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {link.dropdown ? (
                    <>
                      <button
                        className={`relative z-10 flex items-center gap-1 px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                          isActive
                            ? "text-primary-600"
                            : "text-foreground/70 hover:text-foreground"
                        }`}
                      >
                        {isActive && (
                          <motion.div
                            layoutId="navbar-active"
                            className={`absolute inset-0 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] border rounded-full -z-10 backdrop-blur-sm transition-colors duration-300 ${
                              isScrolled
                                ? "bg-primary-50/50 border-primary-200/60"
                                : "bg-white border-primary-100/50"
                            }`}
                            transition={{
                              type: "spring",
                              bounce: 0.2,
                              duration: 0.6,
                            }}
                          >
                            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-8 bg-primary-200/20 blur-xl rounded-full" />
                          </motion.div>
                        )}
                        {!isActive && activeDropdown === link.name && (
                          <motion.span
                            layoutId="navbar-hover"
                            className={`absolute inset-0 rounded-full -z-20 transition-colors duration-300 ${
                              isScrolled ? "bg-slate-100" : "bg-slate-50/80"
                            }`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{
                              type: "spring",
                              bounce: 0.2,
                              duration: 0.6,
                            }}
                          />
                        )}
                        {link.name}
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-300 ${
                            activeDropdown === link.name || isActive
                              ? "rotate-180 text-primary-600"
                              : "text-foreground/50"
                          }`}
                        />
                      </button>

                      <AnimatePresence>
                        {activeDropdown === link.name && (
                          <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.98 }}
                            transition={{ duration: 0.2 }}
                            className="absolute left-1/2 -translate-x-1/2 top-full pt-4 w-150"
                          >
                            <div
                              className={cn(
                                "rounded-2xl shadow-xl border border-white/20 overflow-hidden ring-1 ring-black/5",
                                isScrolled
                                  ? "bg-white"
                                  : "bg-white/90 backdrop-blur-xl"
                              )}
                            >
                              <div className="p-2 grid grid-cols-2 gap-2">
                                {link.items.map((item) => {
                                  const Icon = item.icon;
                                  return (
                                    <Link
                                      key={item.name}
                                      href={item.href}
                                      className={`group flex items-center gap-4 p-3 rounded-xl transition-all duration-300 hover:bg-primary-50/50 ${
                                        pathname === item.href
                                          ? "bg-primary-50/80"
                                          : "bg-transparent"
                                      }`}
                                    >
                                      <div
                                        className={`p-2.5 rounded-lg transition-colors duration-300 ${
                                          pathname === item.href
                                            ? "bg-primary-100 text-primary-600"
                                            : "bg-slate-100 text-slate-500 group-hover:bg-primary-100 group-hover:text-primary-600"
                                        }`}
                                      >
                                        <Icon size={20} strokeWidth={1.5} />
                                      </div>
                                      <div>
                                        <div
                                          className={`font-semibold text-sm transition-colors duration-300 ${
                                            pathname === item.href
                                              ? "text-primary-700"
                                              : "text-slate-700 group-hover:text-primary-700"
                                          }`}
                                        >
                                          {item.name}
                                        </div>
                                        <div className="text-xs text-slate-500 mt-0.5 font-medium">
                                          Learn more
                                        </div>
                                      </div>
                                    </Link>
                                  );
                                })}
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      className={`relative z-10 px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                        isActive
                          ? "text-primary-600"
                          : "text-foreground/70 hover:text-foreground"
                      }`}
                      onMouseEnter={() => setActiveDropdown(link.name)}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="navbar-active"
                          className={`absolute inset-0 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] border rounded-full -z-10 backdrop-blur-sm transition-colors duration-300 ${
                            isScrolled
                              ? "bg-primary-50/50 border-primary-200/60"
                              : "bg-white border-primary-100/50"
                          }`}
                          transition={{
                            type: "spring",
                            bounce: 0.2,
                            duration: 0.6,
                          }}
                        >
                          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-8 bg-primary-200/20 blur-xl rounded-full" />
                        </motion.div>
                      )}
                      {!isActive && activeDropdown === link.name && (
                        <motion.span
                          layoutId="navbar-hover"
                          className={`absolute inset-0 rounded-full -z-20 transition-colors duration-300 ${
                            isScrolled ? "bg-slate-100" : "bg-slate-50/80"
                          }`}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{
                            type: "spring",
                            bounce: 0.2,
                            duration: 0.6,
                          }}
                        />
                      )}
                      {link.name}
                    </Link>
                  )}
                </div>
              );
            })}
          </div>

          <div className="hidden lg:block">
            <Button href="/contact" variant="solid" tone="primary">
              Get Started
            </Button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden relative z-10 p-2 text-foreground hover:text-primary-500 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-foreground/20 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute top-0 right-0 bottom-0 w-full max-w-sm bg-white shadow-2xl overflow-y-auto"
            >
              <div className="pt-24 pb-8 px-6">
                <div className="space-y-2">
                  {navLinks.map((link, index) => {
                    const isActiveParent =
                      link.dropdown &&
                      link.items.some((item) => item.href === pathname);

                    return (
                      <motion.div
                        key={link.name}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        {link.dropdown ? (
                          <div>
                            <button
                              onClick={() => handleDropdownToggle(link.name)}
                              className={`flex items-center justify-between w-full py-3 text-lg font-medium ${
                                isActiveParent
                                  ? "text-primary-500"
                                  : "text-foreground"
                              }`}
                            >
                              {link.name}
                              <ChevronDown
                                className={`w-5 h-5 transition-transform duration-200 ${
                                  activeDropdown === link.name
                                    ? "rotate-180"
                                    : ""
                                }`}
                              />
                            </button>

                            <AnimatePresence>
                              {activeDropdown === link.name && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.3 }}
                                  className="overflow-hidden"
                                >
                                  <div className="pl-4 py-2 space-y-1">
                                    {link.items.map((item) => {
                                      const IconComponent = item.icon;
                                      const isActiveItem =
                                        pathname === item.href;
                                      return (
                                        <Link
                                          key={item.name}
                                          href={item.href}
                                          className={`flex items-center gap-3 py-2 transition-colors duration-200 ${
                                            isActiveItem
                                              ? "text-primary-500 font-medium"
                                              : "text-foreground-muted hover:text-primary-500"
                                          }`}
                                        >
                                          <IconComponent className="w-4 h-4" />
                                          {item.name}
                                        </Link>
                                      );
                                    })}
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        ) : (
                          <Link
                            href={link.href}
                            className={`block py-3 text-lg font-medium transition-colors duration-200 ${
                              pathname === link.href
                                ? "text-primary-500"
                                : "text-foreground hover:text-primary-500"
                            }`}
                          >
                            {link.name}
                          </Link>
                        )}
                      </motion.div>
                    );
                  })}
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="mt-8"
                >
                  <Button
                    href="/contact"
                    variant="solid"
                    tone="primary"
                    className="w-full"
                  >
                    Get Started
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
