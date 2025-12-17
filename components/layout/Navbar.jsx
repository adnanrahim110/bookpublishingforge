"use client";

import { Button } from "@/components/ui";
import { navLinks } from "@/constants";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
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

          <div className="hidden lg:flex items-center gap-8 text-lg">
            {navLinks.map((link) => (
              <div key={link.name} className="relative">
                {link.dropdown ? (
                  <div className="relative" ref={dropdownRef}>
                    <button
                      onClick={() => handleDropdownToggle(link.name)}
                      className="flex items-center gap-1 text-foreground font-medium hover:text-primary-500 transition-colors duration-200 py-2 cursor-pointer"
                    >
                      {link.name}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          activeDropdown === link.name ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <AnimatePresence>
                      {activeDropdown === link.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 20 }}
                          transition={{ duration: 0.3, ease: "easeOut" }}
                          className="fixed left-1/2 -translate-x-1/2 top-20 w-[95vw] max-w-6xl"
                        >
                          <div className="relative bg-white/95 backdrop-blur-xl rounded-3xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.15)] border border-white/50 overflow-hidden">
                            <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-primary-400 via-primary-500 to-primary-600" />
                            <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-100/50 rounded-full blur-3xl" />
                            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary-50/50 rounded-full blur-3xl" />

                            <div className="relative flex">
                              <div className="flex-1 p-8">
                                <div className="flex items-center gap-2 mb-6">
                                  <div className="w-8 h-0.5 bg-linear-to-r from-primary-500 to-transparent" />
                                  <span className="text-xs font-bold text-primary-500 uppercase tracking-widest">
                                    Our Services
                                  </span>
                                </div>

                                <div className="grid grid-cols-2 gap-3">
                                  {link.items.map((item, index) => {
                                    const IconComponent = item.icon;
                                    return (
                                      <motion.div
                                        key={item.name}
                                        initial={{ opacity: 0, y: 15 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{
                                          delay: index * 0.04,
                                          duration: 0.3,
                                        }}
                                      >
                                        <Link
                                          href={item.href}
                                          className="group flex items-center gap-4 p-4 rounded-2xl bg-transparent hover:bg-linear-to-r hover:from-primary-50 hover:to-transparent border border-transparent hover:border-primary-100 transition-all duration-300"
                                        >
                                          <span className="relative p-3 rounded-xl bg-linear-to-br from-primary-50 to-primary-100 text-primary-500 group-hover:from-primary-100 group-hover:to-primary-200 group-hover:scale-110 transition-all duration-300 shadow-sm">
                                            <IconComponent className="w-5 h-5" />
                                            <span className="absolute inset-0 rounded-xl bg-primary-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                          </span>
                                          <div>
                                            <span className="block font-semibold text-foreground group-hover:text-primary-600 transition-colors duration-200">
                                              {item.name}
                                            </span>
                                            <span className="text-xs text-foreground-muted opacity-0 group-hover:opacity-100 transition-all duration-300">
                                              Learn more →
                                            </span>
                                          </div>
                                        </Link>
                                      </motion.div>
                                    );
                                  })}
                                </div>
                              </div>

                              <div className="w-80 relative overflow-hidden">
                                <div className="absolute inset-0 bg-linear-to-br from-primary-500 via-primary-600 to-primary-700" />
                                <div
                                  className="absolute inset-0 opacity-10"
                                  style={{
                                    backgroundImage:
                                      "radial-gradient(circle, white 1px, transparent 1px)",
                                    backgroundSize: "20px 20px",
                                  }}
                                />

                                <div className="relative h-full p-8 flex flex-col justify-between text-white">
                                  <div>
                                    <motion.div
                                      initial={{ opacity: 0, x: 20 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      transition={{ delay: 0.2 }}
                                    >
                                      <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-xs font-semibold mb-4 backdrop-blur-sm">
                                        ✨ Start Your Journey
                                      </span>
                                      <h3 className="font-qurova text-2xl font-bold mb-3">
                                        Ready to Publish Your Book?
                                      </h3>
                                      <p className="text-white/80 text-sm mb-6">
                                        Transform your manuscript into a
                                        professionally published book. Get
                                        expert guidance every step of the way.
                                      </p>
                                      <Button
                                        href="/contact"
                                        variant="solid"
                                        className="bg-white text-primary-600 hover:bg-white/90 hover:shadow-xl shadow-lg"
                                      >
                                        Get Free Quote
                                      </Button>
                                    </motion.div>
                                  </div>

                                  <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                    className="mt-6 flex items-center gap-3 pt-6 border-t border-white/20"
                                  >
                                    <div className="flex -space-x-2">
                                      <div className="w-8 h-8 rounded-full bg-white/30 border-2 border-white flex items-center justify-center text-xs font-bold">
                                        5★
                                      </div>
                                    </div>
                                    <div className="text-sm">
                                      <span className="font-semibold">
                                        500+ Authors
                                      </span>
                                      <span className="text-white/70">
                                        {" "}
                                        trust us
                                      </span>
                                    </div>
                                  </motion.div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    className={`font-medium transition-colors duration-200 py-2 ${
                      pathname === link.href
                        ? "text-primary-500"
                        : "text-foreground hover:text-primary-500"
                    }`}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
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
                  {navLinks.map((link, index) => (
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
                            className="flex items-center justify-between w-full py-3 text-lg font-medium text-foreground"
                          >
                            {link.name}
                            <ChevronDown
                              className={`w-5 h-5 transition-transform duration-200 ${
                                activeDropdown === link.name ? "rotate-180" : ""
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
                                    return (
                                      <Link
                                        key={item.name}
                                        href={item.href}
                                        className="flex items-center gap-3 py-2 text-foreground-muted hover:text-primary-500 transition-colors duration-200"
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
                  ))}
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
