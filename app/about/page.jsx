import { AboutHero, Mission, Process, Story } from "@/components/about";
import { ContactForm, CTA } from "@/components/sections";

export const metadata = {
  title: "About Us | Book Publishing Forge",
  description:
    "Discover Book Publishing Forge's journey since 2014. Learn about our mission to empower authors and our commitment to excellence in publishing.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <Story />
      <Mission />
      <Process />
      <CTA />
      <ContactForm />
    </>
  );
}
