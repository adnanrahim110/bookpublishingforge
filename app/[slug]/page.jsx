import { legalPages } from "@/constants";
import { services } from "@/constants/services";
import { notFound } from "next/navigation";
import LegalPage from "./LegalPage";
import ServicePage from "./ServicePage";

export async function generateStaticParams() {
  const serviceParams = services.map(({ slug }) => ({
    slug: slug,
  }));

  const legalParams = legalPages.map(({ slug }) => ({
    slug: slug,
  }));
  return [...serviceParams, ...legalParams];
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (service) {
    return {
      title: `${service.title} | Book Publishing Forge`,
    };
  }

  const legal = legalPages.find((p) => p.slug === slug);
  if (legal) {
    return {
      title: `${legal.title} | Book Publishing Forge`,
    };
  }

  return {
    title: "Page Not Found - Forge My Book",
  };
}

export default async function DynamicPage({ params }) {
  const { slug } = await params;

  const service = services.find((s) => s.slug === slug);
  if (service) {
    const { icon: _icon, ...serializableService } = service;
    return <ServicePage service={serializableService} />;
  }
  const legal = legalPages.find((p) => p.slug === slug);
  if (legal) {
    return <LegalPage legal={legal} />;
  }
  return notFound();
}
