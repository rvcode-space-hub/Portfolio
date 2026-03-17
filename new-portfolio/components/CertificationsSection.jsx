"use client";
import React, { useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import certification from "../utils/certification.json";
import { ChevronRight, ChevronLeft, X, Calendar } from "lucide-react";
import { useModal } from "./ModalContext";

export default function CertificationsSection() {
  const { preview, setPreview } = useModal();
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    scrollRef.current?.scrollBy({
      left: direction === "left" ? -400 : 400,
      behavior: "smooth",
    });
  };

  // ESC close
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setPreview(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [setPreview]);

  return (
    <div className="w-full py-24  px-6 md:px-10 relative">

      {/* 🔥 Glow Background */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full"></div>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative text-3xl text-center md:text-6xl font-bold text-white tracking-tight"
      >
        Professional{" "}
        <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
          Certifications
        </span>
      </motion.h2>

      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="relative mt-4 mb-10 text-gray-400 text-sm md:text-base max-w-xl mx-auto"
      >
        Showcasing verified skills, real-world experience, and continuous learning.
      </motion.p>

      {/* Arrows */}
      <div
        onClick={() => scroll("left")}
        className="absolute left-2 text-black top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-white/90 hover:bg-white p-3 rounded-full shadow-md transition"
      >
        <ChevronLeft size={24} />
      </div>

      <div
        onClick={() => scroll("right")}
        className="absolute right-2  text-black top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-white/90 hover:bg-white p-3 rounded-full shadow-md transition"
      >
        <ChevronRight size={24} />
      </div>

      {/* Cards */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar snap-x snap-mandatory"
      >
        {certification.map((card) => (
          <motion.div
            key={card.id}
            whileHover={{ y: -8, scale: 1.03 }}
            transition={{ type: "spring", stiffness: 200 }}
            onClick={() => setPreview(card)}
            className={`snap-center min-w-[300px] md:min-w-[380px] group cursor-pointer rounded-2xl p-4
            bg-white/5 backdrop-blur-md border border-white/10
            hover:border-blue-400 hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] transition-all`}
          >
            {/* Image */}
            <div className="relative rounded-xl overflow-hidden mb-4">
              <div className="relative w-full h-52">
                <Image
                  src={card.imgUrl}
                  alt={card.title}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-500"
                />
              </div>
            </div>

            {/* Date */}
            <span className="text-blue-400 text-sm flex items-center gap-2 mb-2">
              <Calendar size={16} />
              {card.date}
            </span>

            {/* Title */}
            <h3 className="text-lg font-semibold text-white mb-1 line-clamp-1 group-hover:text-blue-400 transition">
              {card.title}
            </h3>

            {/* Desc */}
            <p className="text-gray-400 text-sm mb-3 line-clamp-2">
              {card.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {card.tags?.map((tag, i) => (
                <span
                  key={i}
                  className="px-2 py-1 text-xs rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* 🔥 MODAL */}
      <AnimatePresence>
        {preview && (
          <motion.div
            className="fixed inset-0 z-[9999] bg-black/70 backdrop-blur-xl flex items-center justify-center"
            onClick={() => setPreview(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="relative w-[90%] md:w-[70%] lg:w-[60%] max-h-[90vh] flex flex-col items-center"
            >
              {/* Image */}
              <div className="relative w-full h-[60vh] bg-black rounded-xl overflow-hidden">
                <Image
                  src={preview.imgUrl}
                  alt={preview.title}
                  fill
                  className="object-contain p-4"
                />

                {/* Close */}
                <button
                  onClick={() => setPreview(null)}
                  className="absolute top-4 right-4 z-[10000] text-white bg-black/40 hover:bg-black/60 p-3 rounded-full backdrop-blur-md transition"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Info */}
              <div className="w-full mt-4 p-5 rounded-xl bg-gradient-to-r from-blue-900/40 to-black border border-blue-500/20">
                <h3 className="text-xl md:text-2xl text-blue-400 font-semibold">
                  {preview.title}
                </h3>

                <p className="text-gray-400 mt-2 text-sm md:text-base">
                  {preview.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}