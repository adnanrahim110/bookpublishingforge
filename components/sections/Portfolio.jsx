"use client";

import Title from "@/components/ui/Title";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import { EffectCoverflow, Keyboard, Mousewheel } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Portfolio = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set((e.clientX - centerX) / (rect.width / 2));
    mouseY.set((e.clientY - centerY) / (rect.height / 2));
  };

  return (
    <section
      id="portfolio"
      className="section-padding relative overflow-hidden min-h-screen flex flex-col justify-center"
      ref={containerRef}
      onMouseMove={handleMouseMove}
    >
      <GravitationalField mouseX={mouseX} mouseY={mouseY} />

      <div className="container-custom mb-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary-600 font-semibold text-sm uppercase tracking-widest mb-3 block"
          >
            Browse Our Books
          </motion.span>
          <div className="mb-6">
            <Title tag="h2" highlight="Made">
              Take a Peek at What We’ve Made
            </Title>
          </div>
          <p className="text-foreground-muted text-lg">
            Curious what a professionally published book looks like? Browse our
            virtual shelf of recent success stories, flip through covers, read
            snippets, and get inspired.
          </p>
        </div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto perspective-[2000px]">
        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          loop={true}
          keyboard={{ enabled: true }}
          mousewheel={{ forceToAxis: true, sensitivity: 1 }}
          coverflowEffect={{
            rotate: 25,
            stretch: 0,
            depth: 350,
            modifier: 1,
          }}
          modules={[EffectCoverflow, Mousewheel, Keyboard]}
          className="py-12!"
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        >
          {[...Array(8)].map((_, idx) => (
            <SwiperSlide key={idx} className="w-[320px]! sm:w-95! pb-10">
              <BookCard
                book={`/imgs/portfolio/${idx + 1}.jpg`}
                isActive={idx === activeIndex}
                mouseX={mouseX}
                mouseY={mouseY}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

const BookCard = ({ book, isActive, mouseX, mouseY }) => {
  const cardRef = useRef(null);

  const springConfig = { stiffness: 150, damping: 15, mass: 0.1 };
  const rotateX = useSpring(
    useTransform(mouseY, [-1, 1], [8, -8]),
    springConfig
  );
  const rotateY = useSpring(
    useTransform(mouseX, [-1, 1], [-8, 8]),
    springConfig
  );

  return (
    <motion.div
      ref={cardRef}
      className="relative group cursor-grab active:cursor-grabbing"
      style={{
        rotateX: isActive ? rotateX : 0,
        rotateY: isActive ? rotateY : 0,
        transformStyle: "preserve-3d",
      }}
    >
      <div className="relative overflow-hidden aspect-298/419 transition-all duration-500">
        <Image src={book} alt="Book cover" fill className="object-cover" />
      </div>
    </motion.div>
  );
};

const GravitationalField = ({ mouseX, mouseY }) => {
  const springConfig = { stiffness: 50, damping: 20 };
  const x = useSpring(useTransform(mouseX, [-1, 1], [-50, 50]), springConfig);
  const y = useSpring(useTransform(mouseY, [-1, 1], [-50, 50]), springConfig);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute top-1/2 left-1/2 size-200 -translate-x-1/2 -translate-y-1/2"
        style={{ x, y }}
      >
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute inset-0 rounded-full border border-primary-200/20"
            style={{
              transform: `scale(${0.2 + i * 0.2})`,
            }}
            animate={{
              scale: [0.2 + i * 0.2, 0.25 + i * 0.2, 0.2 + i * 0.2],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
      </motion.div>

      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-primary-400/40 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 2 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  );
};

export default Portfolio;
