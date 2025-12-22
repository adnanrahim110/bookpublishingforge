"use client";

import { Button, Input } from "@/components/ui";
import Title from "@/components/ui/Title";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const featuredBooks = [
  {
    src: "/imgs/portfolio/1.png",
    alt: "Featured book cover",
  },
  {
    src: "/imgs/portfolio/14.png",
    alt: "Featured book cover",
  },
  {
    src: "/imgs/portfolio/3.png",
    alt: "Featured book cover",
  },
  {
    src: "/imgs/portfolio/4.png",
    alt: "Featured book cover",
  },
  {
    src: "/imgs/portfolio/2.png",
    alt: "Featured book cover",
  },
  {
    src: "/imgs/portfolio/12.png",
    alt: "Featured book cover",
  },
  {
    src: "/imgs/portfolio/10.png",
    alt: "Featured book cover",
  },
  {
    src: "/imgs/portfolio/9.png",
    alt: "Featured book cover",
  },
  {
    src: "/imgs/portfolio/8.png",
    alt: "Featured book cover",
  },
  {
    src: "/imgs/portfolio/7.png",
    alt: "Featured book cover",
  },
  {
    src: "/imgs/portfolio/6.png",
    alt: "Featured book cover",
  },
  {
    src: "/imgs/portfolio/5.png",
    alt: "Featured book cover",
  },
];

const Hero2 = () => {
  const [lead, setLead] = useState({ name: "", email: "", phone: "" });

  const [offset, setOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartRef = useRef(0);
  const lastOffsetRef = useRef(0);
  const requestRef = useRef();
  const velocityRef = useRef(0.05);

  const animate = () => {
    if (!isDragging) {
      setOffset((prev) => (prev + velocityRef.current) % 360);
      requestRef.current = requestAnimationFrame(animate);
    }
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, [isDragging]);

  const handlePointerDown = (e) => {
    setIsDragging(true);
    dragStartRef.current = e.clientX;
    lastOffsetRef.current = offset;
    cancelAnimationFrame(requestRef.current);
  };

  const handlePointerMove = (e) => {
    if (isDragging) {
      const delta = e.clientX - dragStartRef.current;
      const sensitivity = 0.5;
      const newOffset = (lastOffsetRef.current - delta * sensitivity) % 360;
      setOffset(newOffset >= 0 ? newOffset : 360 + newOffset);
    }
  };

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  const handleChange = (e) => {
    setLead((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    document
      .getElementById("contact-form")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="relative min-h-screen w-full pt-28 overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-b from-primary-50 via-background to-white" />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-80 left-1/2 -translate-x-1/2 size-225 rounded-full bg-primary-100/65 blur-3xl" />
        <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-accent-100/50 blur-3xl" />
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-primary-200/40 blur-3xl" />
      </div>

      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 2px 2px, rgba(48,137,170,0.35) 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="absolute inset-0 bg-[url('/imgs/noisy_bg.png')] opacity-[0.08] mix-blend-multiply pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm border border-white/50 rounded-full px-5 py-2 shadow-sm"
          >
            <Sparkles className="w-4 h-4 text-primary-500" />
            <span className="text-sm font-semibold text-foreground">
              Book Publishing Forge
            </span>
          </motion.div>

          <div className="mt-3">
            <Title
              tag="h1"
              highlight="Manuscript"
              className="font-bold xl:text-5xl"
            >
              Is Your Manuscript Ready to be Published?
            </Title>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-3 text-lg md:text-xl text-foreground-muted max-w-4xl mx-auto"
          >
            Let’s Find Out! You’ve poured your heart into these pages <br /> Now
            let’s turn your story into something readers can hold, treasure, and
            share. At Book Publishing Forge, we walk beside you, from rough
            draft to polished published work.
          </motion.p>

          <motion.form
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="mt-6 bg-white/10 backdrop-blur-xl border border-white/60 rounded-2xl shadow-[0_25px_60px_-25px_rgba(10,22,40,0.25)] p-3"
          >
            <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_1fr_auto] gap-3">
              <Input
                name="name"
                value={lead.name}
                onChange={handleChange}
                placeholder="Your Name"
                aria-label="Your name"
                autoComplete="name"
                className="bg-white"
              />
              <Input
                name="email"
                type="email"
                value={lead.email}
                onChange={handleChange}
                placeholder="Email Address"
                aria-label="Email address"
                autoComplete="email"
                className="bg-white"
              />
              <Input
                name="phone"
                type="tel"
                value={lead.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                aria-label="Phone number"
                autoComplete="tel"
                className="bg-white"
              />
              <Button
                type="submit"
                variant="solid"
                tone="primary"
                icon={ArrowRight}
                className="min-w-55"
              >
                Publish My Book Now
              </Button>
            </div>
          </motion.form>
        </div>

        <div className="relative mt-6 h-90 sm:h-105 md:h-120 max-w-6xl mx-auto select-none">
          <div className="relative z-10 w-full h-full flex items-end justify-center">
            <div
              className="absolute inset-0 z-20 cursor-grab active:cursor-grabbing flex items-end justify-center overflow-hidden"
              onPointerDown={handlePointerDown}
              onPointerUp={handlePointerUp}
              onPointerLeave={handlePointerUp}
              onPointerMove={handlePointerMove}
            >
              <div
                className="absolute -bottom-70 size-85 sm:size-115 md:size-140 rounded-full"
                style={{
                  transform: `rotate(${offset}deg)`,
                  pointerEvents: "none",
                }}
              >
                <Image
                  src="/imgs/globe.png"
                  alt="Spinning Earth Globe"
                  fill
                  className="object-cover"
                  draggable={false}
                />
              </div>
            </div>

            <div className="absolute left-1/2 -bottom-1 w-0 h-0 [--orbit-radius:160px] sm:[--orbit-radius:220px] md:[--orbit-radius:270px] z-19 pointer-events-none">
              <CarouselItems books={featuredBooks} offset={offset} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CarouselItems = ({ books, offset }) => {
  return books.map((book, index) => {
    const spacing = 360 / books.length;

    let angle = (10 + index * spacing + offset) % 360;
    let dist = Math.abs(angle - 90);
    if (dist > 180) dist = 360 - dist;

    const zIndex = Math.max(1, Math.round(10 - dist / 15));
    const tilt = 90;

    return (
      <div
        key={`${book.src}-${index}`}
        className="absolute left-0 bottom-0 w-0 h-0"
        style={{
          zIndex,
          transform: `rotate(${-angle}deg) translateX(var(--orbit-radius))`,
        }}
      >
        <div
          className="absolute left-0 bottom-0 -translate-x-1/2 origin-bottom transition-opacity duration-300"
          style={{
            transform: `rotate(${tilt}deg)`,
          }}
        >
          <div className="relative w-[clamp(86px,10vw,150px)] aspect-3/4 rounded-t-xl overflow-hidden shadow-[0_25px_50px_-25px_rgba(10,22,40,0.55)] ring-1 ring-white/70">
            <Image
              src={book.src}
              alt={book.alt}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 86px, (max-width: 1024px) 120px, 150px"
            />
          </div>
        </div>
      </div>
    );
  });
};

export default Hero2;
