"use client";

import { Button, Input, Select, Textarea } from "@/components/ui";
import Title from "@/components/ui/Title";
import { contactDetails, socialLinks } from "@/constants";
import { motion } from "framer-motion";
import { Clock, Mail, MapPin, MessageSquare, Phone, Send } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const serviceOptions = [
  { value: "", label: "Select a service..." },
  { value: "ghostwriting", label: "Ghostwriting" },
  { value: "editing", label: "Book Editing" },
  { value: "proofreading", label: "Proofreading" },
  { value: "cover-design", label: "Cover Design" },
  { value: "formatting", label: "Formatting" },
  { value: "publishing", label: "Publishing" },
  { value: "marketing", label: "Book Marketing" },
  { value: "audiobook", label: "Audiobook Production" },
  { value: "distribution", label: "Book Distribution" },
  { value: "ebook", label: "eBook Creation" },
];

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactSection />
    </>
  );
}

const ContactHero = () => {
  return (
    <section className="pt-32 pb-16 bg-linear-to-b from-primary-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-100/50 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-20 w-96 h-96 bg-primary-50/50 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block bg-primary-100 text-primary-700 px-4 py-1.5 rounded-full text-sm font-medium mb-6"
          >
            Contact Us
          </motion.span>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Title
              tag="h1"
              size="text-4xl md:text-5xl lg:text-6xl font-bold"
              highlight="Touch"
              className="mb-6"
            >
              Let's Get In Touch
            </Title>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-foreground-muted text-lg md:text-xl"
          >
            Have a question or ready to start your publishing journey? We'd love
            to hear from you.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
    setFormData({ name: "", email: "", phone: "", service: "", message: "" });
  };

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-5 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Contact Information
              </h2>
              <p className="text-foreground-muted">
                Reach out through any of these channels. We typically respond
                within 24 hours.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center text-primary-500 shrink-0">
                  <Phone size={22} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                  <p className="text-foreground-muted">
                    {contactDetails.phone}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center text-primary-500 shrink-0">
                  <Mail size={22} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Email</h3>
                  <p className="text-foreground-muted">
                    {contactDetails.email}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center text-primary-500 shrink-0">
                  <MapPin size={22} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    Address
                  </h3>
                  <p className="text-foreground-muted">
                    {contactDetails.address}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center text-primary-500 shrink-0">
                  <Clock size={22} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    Working Hours
                  </h3>
                  <p className="text-foreground-muted">
                    {contactDetails.workingHours}
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-100">
              <h3 className="font-semibold text-foreground mb-4">Follow Us</h3>
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => (
                  <Link
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-foreground-muted hover:bg-primary-500 hover:text-white transition-colors duration-300"
                  >
                    <social.icon size={18} />
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            {isSuccess ? (
              <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="text-green-600" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-green-800 mb-2">
                  Message Sent!
                </h3>
                <p className="text-green-700 mb-6">
                  Thank you for reaching out. We'll get back to you within 24
                  hours.
                </p>
                <Button
                  onClick={() => setIsSuccess(false)}
                  variant="outline"
                  className="border-green-300 text-green-700 hover:bg-green-100"
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-slate-50 rounded-2xl p-8 shadow-lg border border-slate-100"
              >
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Send Us a Message
                </h2>

                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <Input
                    label="Your Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                  />
                  <Input
                    label="Email Address"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <Input
                    label="Phone Number"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 000-0000"
                  />
                  <Select
                    label="Service Interest"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    options={serviceOptions}
                  />
                </div>

                <div className="mb-6">
                  <Textarea
                    label="Your Message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your book project..."
                    rows={5}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  variant="solid"
                  tone="primary"
                  className="w-full"
                  disabled={isSubmitting}
                  icon={Send}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
