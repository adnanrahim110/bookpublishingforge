import {
  BookCheck,
  FileEdit,
  Globe,
  Headphones,
  LayoutGrid,
  Megaphone,
  Palette,
  PenLine,
  Rocket,
  Tablet,
} from "lucide-react";

export const navLinks = [
  { name: "Home", href: "/" },
  {
    name: "Services",
    href: "#",
    dropdown: true,
    items: [
      { name: "Ghostwriting Services", href: "/ghostwriting-services", icon: PenLine },
      { name: "Book Editing & Proofreading", href: "/book-editing-and-proofreading", icon: BookCheck },
      { name: "Book Cover Design", href: "/book-cover-design", icon: Palette },
      { name: "Book Formatting Services", href: "/book-formatting-services", icon: LayoutGrid },
      { name: "Book Publishing Services", href: "/book-publishing-services", icon: Rocket },
      { name: "Book Marketing Services", href: "/book-marketing-services", icon: Megaphone },
      { name: "Audiobook Production", href: "/audiobook-production", icon: Headphones },
      { name: "Book Distribution", href: "/book-distribution", icon: Globe },
      { name: "eBook Creation", href: "/ebook-creation", icon: Tablet },
    ],
  },
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export const stats = [
  { value: "500+", label: "Happy Authors", icon: "users" },
  { value: "35+", label: "Genres Covered", icon: "layers" },
  { value: "250+", label: "Books Published", icon: "book" },
  { value: "7+", label: "Years in Your Corner", icon: "award" },
];

export const processSteps = [
  {
    step: 1,
    title: "We Listen",
    description: "We begin with a focused conversation to understand your book, your audience, and what success means for your project.",
  },
  {
    step: 2,
    title: "We Plan",
    description: "We develop a clear, step-by-step roadmap tailored to your goals, timeline, budget, and publishing needs.",
  },
  {
    step: 3,
    title: "We Create & Refine",
    description: "Our team handles the writing, editing, and design process, incorporating your feedback at every stage to ensure the work reflects your vision.",
  },
  {
    step: 4,
    title: "We Launch & Celebrate",
    description: "We manage the technical and production details, allowing you to focus on sharing your book with readers and preparing for launch.",
  },
];

export const reviews = [
  {
    id: 1,
    name: "Michael Thompson",
    role: "Business Author",
    avatar: "/images/testimonials/avatar-1.jpg",
    rating: 5,
    text: "I was terrified no one would read my book. Their marketing team didn't just promote it, they found my readers. Sales I never dreamed of.",
  },
  {
    id: 2,
    name: "Sarah Thompson",
    role: "Fiction Author",
    avatar: "/images/testimonials/avatar-2.jpg",
    rating: 5,
    text: "I handed over my messy first draft, worried I’d lose my voice in editing. Instead, they polished it until it sang, my story, only stronger.",
  },
  {
    id: 3,
    name: "David Chen",
    role: "Memoir Writer",
    avatar: "/images/testimonials/avatar-3.jpg",
    rating: 5,
    text: "As a busy CEO, I didn’t have time to write the book I knew was inside me. Their ghostwriter listened, understood, and delivered my message perfectly.",
  },
];

export const ctaSection = {
  subtitle: "Start Your Publishing Journey Today",
  title: "Your Book’s First Chapter Starts Here",
  text: <> Your story is ready to be told. Let’s get it out of your hands and
    into the world. <br /> Get a free, no-strings consultation. We’ll
    chat about your manuscript, your goals, and the best path forward,
    just honest advice from people who’ve been there. <br /></>
}

export const displayFaqs = [
  {
    q: "What do you actually do?",
    a: "Everything. From writing and editing to designing, publishing, and marketing your book. Think of us as your all-in-one publishing partner.",
  },
  {
    q: "How long does this take?",
    a: "It depends on your book, but we'll give you a clear timeline upfront.",
  },
  {
    q: "Do I keep the rights to my book?",
    a: "Always. It's 100% yours.",
  },
  {
    q: "What genres do you work with?",
    a: "All of them. Fiction, nonfiction, memoir, business, you name it.",
  },
  {
    q: "How much does it cost?",
    a: "We'll build a custom quote based on your specific needs.",
  },
  {
    q: "Can I pay in installments?",
    a: "Yes. We offer flexible payment options and plans as we aim to work with clients on a long-term basis.",
  },
];

export const contactDetails = {
  phone: "+1 (555) 123-4567",
  email: "hello@bookpublishingforge.com",
  address: "123 Publishing Lane, New York, NY 10001",
  workingHours: "Mon - Fri: 9:00 AM - 6:00 PM EST",
};

export const footerLinks = {
  services: [
    { name: "Ghostwriting", href: "/ghostwriting" },
    { name: "Book Editing", href: "/book-editing" },
    { name: "Proofreading", href: "/proofreading" },
    { name: "Cover Design", href: "/cover-design" },
    { name: "Formatting", href: "/formatting" },
    { name: "Publishing", href: "/publishing" },
    { name: "Book Marketing", href: "/book-marketing" },
    { name: "Audiobook Production", href: "/audiobook-production" },
    { name: "Book Distribution", href: "/book-distribution" },
    { name: "eBook Creation", href: "/ebook-creation" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms & Conditions", href: "/terms-and-conditions" },
  ],
};

export const legalPages = [
  {
    slug: "privacy-policy",
    title: "Privacy Policy",
  },
  {
    slug: "terms-and-conditions",
    title: "Terms & Conditions",
  }
];
