"use client";

import {
  ContactForm,
  CTA,
  FAQs,
  Portfolio,
  Testimonials,
} from "@/components/sections";
import {
  ServiceFeatures,
  ServiceHero,
  ServiceProcess,
} from "@/components/services";

const ServicePage = ({ service }) => {
  return (
    <>
      <ServiceHero service={service} />
      <ServiceFeatures features={service.features} />
      <ServiceProcess process={service.process} />
      <Portfolio />
      <Testimonials />
      <CTA cta={service.cta} />
      <FAQs faqs={service.faqs} />
      <ContactForm />
    </>
  );
};

export default ServicePage;
