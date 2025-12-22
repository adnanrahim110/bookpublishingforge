"use client";

import { Button } from "@/components/ui";
import { contactDetails, footerLinks } from "@/constants";
import { motion } from "framer-motion";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-foreground text-white overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage: `
            linear-gradient(135deg, transparent 25%, rgba(255,255,255,0.02) 25%, rgba(255,255,255,0.02) 50%, transparent 50%, transparent 75%, rgba(255,255,255,0.02) 75%),
            linear-gradient(45deg, transparent 25%, rgba(255,255,255,0.01) 25%, rgba(255,255,255,0.01) 50%, transparent 50%, transparent 75%, rgba(255,255,255,0.01) 75%)
          `,
          backgroundSize: "60px 60px, 40px 40px",
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          opacity: 0.03,
        }}
      />

      <div className="absolute top-0 right-0 w-150 h-150 bg-linear-to-br from-primary-500/15 to-primary-600/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-125 h-125 bg-linear-to-tr from-primary-400/10 to-transparent rounded-full blur-[120px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-100 bg-primary-500/3 rounded-full blur-[100px]" />

      <div className="relative">
        <div className="container-custom py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
            <div className="lg:col-span-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Link href="/" className="inline-block mb-6">
                  <Image
                    src="/imgs/logo-w.png"
                    width={400}
                    height={100}
                    alt="Book Publishing Forge Logo"
                    className="w-84"
                  />
                </Link>
                <p className="text-white/70 max-w-sm">
                  Your story, forged with care. We guide authors from messy
                  manuscripts to polished, published books, with clarity,
                  support, and a whole lot of heart.
                </p>
              </motion.div>
            </div>

            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h3 className="text-sm font-bold uppercase tracking-widest text-primary-400 mb-6">
                  Our Services
                </h3>
                <div className="grid grid-cols-2 gap-x-8 gap-y-3">
                  {footerLinks.services.map((link, index) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.03 }}
                    >
                      <Link
                        href={link.href}
                        className="group flex items-center gap-2 text-white/70 hover:text-primary-400 transition-colors duration-200"
                      >
                        <ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200" />
                        {link.name}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h3 className="text-sm font-bold uppercase tracking-widest text-primary-400 mb-6">
                  Contact Us
                </h3>
                <div className="space-y-4">
                  <a
                    href={`tel:${contactDetails.phone}`}
                    className="flex items-center gap-3 text-white/70 hover:text-white transition-colors duration-200 group"
                  >
                    <span className="p-2 rounded-lg bg-white/10 group-hover:bg-primary-500/20 transition-colors duration-200">
                      <Phone className="w-4 h-4" />
                    </span>
                    {contactDetails.phone}
                  </a>
                  <a
                    href={`mailto:${contactDetails.email}`}
                    className="flex items-center gap-3 text-white/70 hover:text-white transition-colors duration-200 group"
                  >
                    <span className="p-2 rounded-lg bg-white/10 group-hover:bg-primary-500/20 transition-colors duration-200">
                      <Mail className="w-4 h-4" />
                    </span>
                    {contactDetails.email}
                  </a>
                  <div className="flex items-start gap-3 text-white/70">
                    <span className="p-2 rounded-lg bg-white/10">
                      <MapPin className="w-4 h-4" />
                    </span>
                    <span>{contactDetails.address}</span>
                  </div>
                </div>

                <div className="mt-8">
                  <Button
                    href="/contact"
                    variant="solid"
                    tone="primary"
                    className="w-full"
                  >
                    Get Free Quote
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="container-custom py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-white/50 text-sm"
              >
                © {currentYear} Forge My Book. All rights reserved.
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="flex items-center gap-6"
              >
                {footerLinks.company.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-white/50 hover:text-white text-sm transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
