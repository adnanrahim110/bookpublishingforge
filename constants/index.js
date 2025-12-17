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
      { name: "Ghostwriting", href: "/ghostwriting", icon: PenLine },
      { name: "Book Editing", href: "/book-editing", icon: FileEdit },
      { name: "Proofreading", href: "/proofreading", icon: BookCheck },
      { name: "Cover Design", href: "/cover-design", icon: Palette },
      { name: "Formatting", href: "/formatting", icon: LayoutGrid },
      { name: "Publishing", href: "/publishing", icon: Rocket },
      { name: "Book Marketing", href: "/book-marketing", icon: Megaphone },
      { name: "Audiobook Production", href: "/audiobook-production", icon: Headphones },
      { name: "Book Distribution", href: "/book-distribution", icon: Globe },
      { name: "eBook Creation", href: "/ebook-creation", icon: Tablet },
    ],
  },
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export const stats = [
  { value: "500+", label: "Books Published", icon: "book" },
  { value: "1000+", label: "Happy Authors", icon: "users" },
  { value: "50+", label: "Genres Covered", icon: "layers" },
  { value: "10+", label: "Years Experience", icon: "award" },
];

export const processSteps = [
  {
    step: 1,
    title: "Share Your Vision",
    description: "Tell us about your book idea, goals, and vision. We'll discuss your project in detail.",
  },
  {
    step: 2,
    title: "Get Your Quote",
    description: "Receive a customized quote based on your specific requirements and timeline.",
  },
  {
    step: 3,
    title: "We Craft Your Book",
    description: "Our expert team works on your manuscript with regular updates and revisions.",
  },
  {
    step: 4,
    title: "Publish & Promote",
    description: "Launch your book on major platforms with our comprehensive marketing support.",
  },
];

export const reviews = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "Fiction Author",
    avatar: "/images/testimonials/avatar-1.jpg",
    rating: 5,
    text: "Forge My Book transformed my rough manuscript into a polished masterpiece. Their editing team understood my voice and enhanced it beautifully.",
  },
  {
    id: 2,
    name: "David Chen",
    role: "Business Author",
    avatar: "/images/testimonials/avatar-2.jpg",
    rating: 5,
    text: "Professional, responsive, and incredibly talented. My business book exceeded all expectations thanks to their ghostwriting services.",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Memoir Writer",
    avatar: "/images/testimonials/avatar-3.jpg",
    rating: 5,
    text: "The entire publishing process was seamless. From cover design to marketing, they handled everything with expertise and care.",
  },
  {
    id: 4,
    name: "Michael Thompson",
    role: "Self-Help Author",
    avatar: "/images/testimonials/avatar-4.jpg",
    rating: 5,
    text: "Their book marketing strategy helped me reach readers I never thought possible. Truly a game-changer for my author career.",
  },
];

export const faqs = [
  {
    question: "What services do you offer?",
    answer: "We offer comprehensive book publishing services including ghostwriting, editing, proofreading, cover design, formatting, publishing, marketing, audiobook production, distribution, and eBook creation.",
  },
  {
    question: "How long does the publishing process take?",
    answer: "The timeline varies based on the project scope. Typically, editing takes 2-4 weeks, cover design 1-2 weeks, and full publishing including marketing can take 2-3 months.",
  },
  {
    question: "Do I retain the rights to my book?",
    answer: "Absolutely! You retain 100% ownership and rights to your book. We are here to help you publish, not to take ownership of your work.",
  },
  {
    question: "What genres do you work with?",
    answer: "We work with all genres including fiction, non-fiction, memoirs, business books, self-help, children's books, romance, thriller, fantasy, and more.",
  },
  {
    question: "How much does it cost to publish a book?",
    answer: "Costs vary based on services needed. We offer customized quotes based on your specific requirements. Contact us for a free consultation and detailed pricing.",
  },
  {
    question: "Do you offer payment plans?",
    answer: "Yes, we offer flexible payment plans to make our services accessible. We can discuss payment options during your consultation.",
  },
];

export const contactDetails = {
  phone: "+1 (555) 123-4567",
  email: "hello@forgemybook.com",
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
    { name: "Terms of Service", href: "/terms-of-service" },
  ],
};
