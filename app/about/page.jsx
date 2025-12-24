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
      <CTA
        cta={{
          title: "The First Page of Your Publishing Journey",
          text: "Your story is waiting. Let’s move it from your hands into readers’ hearts. <br/> Schedule your free, no-pressure consultation today. We’ll talk about your manuscript, your vision, and the clearest path forward, straightforward guidance from a team that’s been in your shoes.",
        }}
      />
      <ContactForm />
    </>
  );
}
