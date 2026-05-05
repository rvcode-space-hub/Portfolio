"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import certification from "../utils/certification.json";
import { X, Calendar,} from "lucide-react";
import { useModal } from "./ModalContext";
import Link from "next/link";

export default function CertificationsSection() {
  const { preview, setPreview } = useModal();

  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const next = () => {
    setActiveIndex((prev) =>
      prev === certification.length - 1 ? 0 : prev + 1
    );
  };

  const activeCard = certification[activeIndex];

  // ESC close modal
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setPreview(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [setPreview]);

  // 🔥 Auto Slide
  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      next();
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlay]);

  // 🔥 Resume autoplay after manual interaction
  useEffect(() => {
    if (isAutoPlay) return;

    const timeout = setTimeout(() => {
      setIsAutoPlay(true);
    }, 5000);

    return () => clearTimeout(timeout);
  }, [isAutoPlay]);

  return (
    <div className="w-full py-24 px-6 md:px-10 bg-gradient-to-br from-black via-gray-900 to-black relative">

      {/* Glow */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full"></div>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-3xl md:text-6xl font-bold text-white text-center"
      >
        Professional{" "}
        <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
          Certifications
        </span>
      </motion.h2>

      <p className="mt-4 mb-16 text-gray-400 text-center max-w-xl mx-auto">
        Showcasing verified skills, real-world experience, and continuous learning.
      </p>

      {/* GRID */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center">

        {/* LEFT */}
        <motion.div
          key={activeCard.id}
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          className="w-full max-w-[520px]"
        >
          <span className="text-blue-400 text-sm flex items-center gap-2 mb-3">
            <Calendar size={16} />
            {activeCard.date}
          </span>

          <h3 className="text-2xl md:text-4xl font-bold text-white mb-4">
            {activeCard.title}
          </h3>

          <p className="text-gray-400 mb-5">
            {activeCard.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-5">
            {activeCard.tags?.slice(0, 3).map((tag, i) => (
              <span
                key={i}
                className="px-3 py-1 text-xs rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300"
              >
                {tag}
              </span>
            ))}
          </div>

   <div className="flex flex-wrap gap-3 mt-4">
  
  {/* View Certificate */}
  <button
    onClick={() => setPreview(activeCard)}
    className="px-5 py-2.5 bg-blue-500 hover:bg-blue-600 text-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
  >
    View Certificate
  </button>

  {/* View Work */}
 {activeCard?.docLink ? (
  <Link
    href={activeCard.docLink}
    target="_blank"
    rel="noopener noreferrer"
    className="px-5 py-2.5 border border-blue-400 text-blue-300 rounded-xl hover:bg-blue-500/10 hover:border-blue-300 transition-all duration-300"
  >
    View Work
  </Link>
) : (
  <span className="text-gray-500 text-base border  px-5 py-2.5  border-red-600 text-white rounded-xl ">No Work Link</span>
)}

</div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          key={activeCard.imgUrl}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex justify-center md:justify-end items-center relative"
        >
          <div className="group relative w-full max-w-[520px] aspect-[12/9] rounded-l-3xl rounded-r-[999px] overflow-hidden shadow-xl border border-white/10 hover:shadow-[0_0_40px_rgba(59,130,246,0.6)] transition duration-300">
            
            <Image
              src={activeCard?.imgUrl || "/fallback.png"}
              alt={activeCard?.title || "certificate"}
              fill
              className="object-contain p-4 transition duration-500 group-hover:scale-105"
            />
          </div>
        </motion.div>
      </div>

      {/* DOTS */}
      <div className="flex justify-center mt-10 gap-3">
  {certification.map((_, i) => (
    <div
      key={i}
      onClick={() => {
        setActiveIndex(i);
        setIsAutoPlay(false);
      }}
      className={`cursor-pointer transition-all duration-300 ${
        i === activeIndex
          ? "w-6 h-3 bg-blue-500 rounded-full scale-110"
          : "w-3 h-3 bg-gray-600 rounded-full hover:bg-gray-400"
      }`}
    />
  ))}
</div>

      {/* MODAL */}
      <AnimatePresence>
        {preview && (
          <motion.div
            className="fixed inset-0 z-[9999] bg-black/70 backdrop-blur-xl flex items-center justify-center"
            onClick={() => setPreview(null)}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              className="relative w-[90%] md:w-[70%] lg:w-[60%]"
            >
              <div className="relative w-full h-[60vh] bg-black rounded-xl overflow-hidden">
                <Image
                  src={preview.imgUrl}
                  alt={preview.title}
                  fill
                  className="object-contain p-4"
                />

                <button
                  onClick={() => setPreview(null)}
                  className="absolute top-4 right-4 text-white bg-black/40 p-3 rounded-full"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="mt-4 p-5 rounded-xl bg-blue-900/40 border border-blue-500/20">
                <h3 className="text-xl text-blue-400 font-semibold">
                  {preview.title}
                </h3>

                <p className="text-gray-400 mt-2">
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