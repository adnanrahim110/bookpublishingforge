"use client";

import Title from "@/components/ui/Title";
import { reviews } from "@/constants";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section
      id="testimonials"
      className="section-padding relative overflow-hidden bg-slate-50"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-100/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-100/30 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary-600 font-semibold text-sm uppercase tracking-widest mb-3 block"
          >
            Testimonials
          </motion.span>
          <div className="mb-6">
            <Title tag="h2" highlight="Authors">
              What Our Authors Say
            </Title>
          </div>
          <p className="text-foreground-muted text-lg">
            Don't just take our word for it. Hear from authors who've trusted us
            to bring their stories to life.
          </p>
        </div>

        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            centeredSlides={false}
            loop={true}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            pagination={{
              clickable: true,
              el: ".swiper-pagination-testimonials",
              bulletClass: "testimonial-bullet",
              bulletActiveClass: "testimonial-bullet-active",
            }}
            breakpoints={{
              640: {
                slidesPerView: 1.5,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 2.5,
                spaceBetween: 30,
              },
              1280: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            className="pb-16!"
          >
            {reviews.map((review, index) => (
              <SwiperSlide key={review.id}>
                <TestimonialCard
                  review={review}
                  isActive={index === activeIndex}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              ref={prevRef}
              className="w-12 h-12 rounded-full bg-white shadow-lg border border-primary-100 text-primary-500 hover:bg-primary-500 hover:text-white transition-all duration-300 flex items-center justify-center"
            >
              <ChevronLeft size={24} />
            </button>

            <div className="swiper-pagination-testimonials flex gap-2" />

            <button
              ref={nextRef}
              className="w-12 h-12 rounded-full bg-white shadow-lg border border-primary-100 text-primary-500 hover:bg-primary-500 hover:text-white transition-all duration-300 flex items-center justify-center"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .testimonial-bullet {
          width: 10px;
          height: 10px;
          background: #cbd5e1;
          border-radius: 9999px;
          cursor: pointer;
          transition: all 0.3s ease;
          display: inline-block;
        }
        .testimonial-bullet-active {
          background: #2e86ab;
          width: 28px;
        }
      `}</style>
    </section>
  );
};

const TestimonialCard = ({ review, isActive }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="h-full"
    >
      <div
        className={`relative bg-white rounded-2xl p-6 md:p-8 h-full transition-all duration-300 ${
          isActive
            ? "shadow-xl shadow-primary-500/10 border-2 border-primary-200"
            : "shadow-lg border border-slate-100 hover:shadow-xl hover:border-primary-100"
        }`}
      >
        <div className="absolute top-4 right-4 text-primary-100">
          <Quote size={40} strokeWidth={1} />
        </div>

        <div className="relative z-10">
          <div className="flex items-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={16}
                className={
                  i < review.rating
                    ? "text-amber-400 fill-amber-400"
                    : "text-slate-200"
                }
              />
            ))}
          </div>

          <p className="text-foreground leading-relaxed mb-6 text-sm md:text-base line-clamp-4">
            "{review.text}"
          </p>

          <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
            <div className="relative w-12 h-12 rounded-full overflow-hidden bg-primary-100 ring-2 ring-primary-50">
              <Image
                src={`https://placehold.co/100x100/2E86AB/FFFFFF?text=${review.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}`}
                alt={review.name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h4 className="font-bold text-foreground">{review.name}</h4>
              <p className="text-primary-500 text-sm">{review.role}</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Testimonials;
