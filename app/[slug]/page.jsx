import { CTA, ContactForm, FAQs } from "@/components/sections";
import {
  ServiceFeatures,
  ServiceHero,
  ServiceProcess,
} from "@/components/services";
import { getAllServiceSlugs, getServiceBySlug } from "@/constants/services";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const slugs = getAllServiceSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Service Not Found - Forge My Book",
    };
  }

  return {
    title: `${service.title} - Forge My Book`,
    description: service.shortDescription,
  };
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const { icon: _icon, ...serviceForClient } = service;

  return (
    <>
      <ServiceHero service={serviceForClient} />
      <ServiceFeatures features={service.features} />
      <ServiceProcess process={service.process} />
      <FAQs items={service.faqs} />
      <CTA />
      <ContactForm />
    </>
  );
}
