"use client";

import { Button, Input, Select, Textarea } from "@/components/ui";
import Title from "@/components/ui/Title";
import { contactDetails } from "@/constants";
import { motion } from "framer-motion";
import {
  Clock,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Send,
  User,
} from "lucide-react";
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

const ContactFormSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    alert("Thank you! We'll be in touch soon.");
    setFormData({ name: "", email: "", phone: "", service: "", message: "" });
  };

  return (
    <section
      id="contact-form"
      className="section-padding bg-white relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary-50/50 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-50/50 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-14 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-widest mb-4 block">
              Get In Touch
            </span>
            <Title tag="h2" highlight="Book" className="mb-6">
              Let’s Talk About Your Book
            </Title>
            <p className="text-foreground-muted mb-8">
              Tell us a little about your project, and we’ll send you a
              personalized publishing plan and quote, usually within a day.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary-50 flex items-center justify-center text-primary-500">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="font-semibold mb-1 text-foreground">Call Us</p>
                  <p className="text-foreground-muted">
                    {contactDetails.phone}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary-50 flex items-center justify-center text-primary-500">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="font-semibold mb-1 text-foreground">Email Us</p>
                  <p className="text-foreground-muted">
                    {contactDetails.email}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="shrink-0 w-12 h-12 rounded-full bg-primary-50 flex items-center justify-center text-primary-500">
                  <Clock size={20} />
                </div>
                <div>
                  <p className="font-semibold mb-1 text-foreground">
                    We’re here Monday–Friday, 9–5 EST
                  </p>
                  <p className="text-foreground-muted max-w-sm">
                    Weekend writers, feel free to email, we’ll get back to you
                    first thing Monday.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-slate-50 rounded-2xl p-8 shadow-lg border border-slate-100"
            >
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
                  rows={4}
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
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
