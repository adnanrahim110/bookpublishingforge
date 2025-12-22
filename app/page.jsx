import {
  ContactForm,
  CTA,
  FAQs,
  Hero2,
  Portfolio,
  Process,
  Services,
  Stats,
  Testimonials,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <Hero2 />
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
