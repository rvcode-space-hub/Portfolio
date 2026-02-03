"use client";

import React, {useState} from "react";
import {motion} from "motion/react";
import Image from "next/image";
import {Github, ExternalLink, Calendar, FileInput} from "lucide-react";
import projects from "../utils/projects.json";

const cardVariants = {
  hidden: (index) => {
    const pos = index % 3;
    if (pos === 0) return {opacity: 0, x: -80, y: 20}; // LEFT
    if (pos === 1) return {opacity: 0, y: 90}; // CENTER
    return {opacity: 0, x: 80, y: 20}; // RIGHT
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function CardSection() {
  const [activeCard, setActiveCard] = useState(null);

  return (
    <section id="projects" className="w-full py-4 md:py-6 px-4 md:px-8">
      <div className="max-w-8xl mx-auto">
        {/* Heading */}

        <motion.div
          initial={{opacity: 0, y: 30}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          transition={{duration: 0.5}}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Featured <span className="text-blue-500">Projects</span>
          </h2>

          <p className="text-gray-400 mt-2 text-base md:text-lg">
            A curated selection of my backend and full-stack development work
          </p>
        </motion.div>

        {/* CARDS GRID  */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{once: true}}
          variants={{
            hidden: {},
            visible: {
              transition: {staggerChildren: 0.15},
            },
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full"
        >
          {projects.map((card, index) => {
            const isActive = activeCard === card.id;

            return (
              <motion.div
                key={card.id}
                custom={index}
                variants={cardVariants}
                whileHover={{y: -10}}
                onClick={() => setActiveCard(isActive ? null : card.id)}
                className={`group cursor-pointer rounded-2xl p-7 bg-[#0B0F19] border transition-all duration-300
                  ${
                    isActive
                      ? "scale-[1.04] shadow-[0_0_50px_rgba(59,130,246,0.85)]"
                      : "hover:border-blue-400 hover:shadow-[0_0_30px_rgba(59,130,246,0.45)]"
                  }
                `}
              >
                {/*  Image  */}
                {card.imgUrl && (
                  <div className="relative rounded-xl overflow-hidden mb-4">
                    <div className="relative w-full aspect-2/1">
                      <Image
                        src={card.imgUrl}
                        alt={card.title}
                        fill
                        priority={card.id === 1}
                        sizes="(max-width: 768px) 100vw, 600px"
                        className="object-cover object-left transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />
                  </div>
                )}

                {/*  Date */}
                <div
                  className="inline-flex items-center gap-2 text-xs mb-4 px-3 py-1.5 rounded-full 
                     bg-blue-500/10 text-blue-400 border border-blue-500/30"
                >
                  <Calendar size={14} />
                  {card.date}
                </div>

                {/*  Title */}
                <h3
                  className={`text-lg font-semibold mb-2 ${
                    card.title ? "text-blue-400 tracking-wide" : "text-white"
                  }`}
                >
                  {card.title}
                </h3>

                {/*  Description */}
                <p className="text-gray-400 text-sm mb-5 leading-relaxed">
                  {card.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {card.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs rounded-full border border-blue-500/30 text-blue-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Buttons */}

                <div className="flex gap-3 text-sm">
                  {card.githubUrl && (
                    <ActionBtn
                      href={card.githubUrl}
                      icon={Github}
                      label="Code"
                    />
                  )}
                  {card.liveUrl && (
                    <ActionBtn
                      href={card.liveUrl}
                      icon={ExternalLink}
                      label="Live"
                    />
                  )}
                  {card.docUrl && (
                    <ActionBtn
                      href={card.docUrl}
                      icon={FileInput}
                      label="Case-Study"
                    />
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

/* ===============================
   REUSABLE BUTTON
================================ */
function ActionBtn({href, icon: Icon, label}) {
  const colors = {
    Code: "bg-gray-700 hover:bg-gray-800 font-semibold font-medium",
    Live: "bg-blue-600 hover:bg-blue-700 font-semibold font-medium ",
    "Case-Study": "bg-emerald-600 hover:bg-emerald-700 font-semibold font-medium",
  };

  return (
    <motion.a
      whileHover={{scale: 1.06}}
      whileTap={{scale: 0.95}}
      href={href}
      target="_blank"
      onClick={(e) => e.stopPropagation()}
      className={`flex-1 text-center py-2.5 rounded-lg transition text-white ${colors[label]}`}
    >
      <Icon size={15} className="inline mr-1" />
      {label}
    </motion.a>
  );
}
