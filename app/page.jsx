"use client";

import {
  ContactForm,
  CTA,
  FAQs,
  Hero,
  Portfolio,
  Process,
  Services,
  Stats,
  Testimonials,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Process />
      <Stats />
      <Portfolio />
      <Testimonials />
      <CTA />
      <FAQs />
      <ContactForm />
    </>
  );
}
