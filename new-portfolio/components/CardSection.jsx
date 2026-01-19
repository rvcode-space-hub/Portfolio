"use client";
import React, { useState } from "react";
import { motion } from "motion/react";
import { Github, ExternalLink, Calendar, FileInput } from "lucide-react";
import projects from "../utils/projects.json";

export default function CardSection() {
  const [activeCard, setActiveCard] = useState(null);

  return (
    <section id="projects" className="w-full bg-black py-14 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl font-bold text-white">
            My <span className="text-blue-500">Projects</span>
          </h2>
          <p className="text-gray-400 mt-2 text-sm">
            Some of my recent backend & full-stack work
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.12 }
            }
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((card) => {
            const isActive = activeCard === card.id;

            return (
              <motion.div
                key={card.id}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.45 }}
                whileHover={{ y: -8 }}
                onClick={() =>
                  setActiveCard(isActive ? null : card.id)
                }
                className={`
                  cursor-pointer rounded-2xl p-6
                  bg-[#0B0F19]
                  border border-gray-700/70
                  transition-all duration-300
                  ${isActive
                    ? "border-blue-500 shadow-[0_0_40px_rgba(59,130,246,0.7)] scale-[1.02]"
                    : "hover:border-gray-500 hover:shadow-[0_0_28px_rgba(59,130,246,0.45)]"}
                `}
              >

                {/* Date */}
                <div className="flex items-center gap-2 text-gray-400 text-xs mb-3">
                  <Calendar size={14} />
                  {card.date}
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-white mb-2">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {card.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {card.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs rounded-full
                      border border-blue-500/30 text-blue-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3 text-sm">
                  <ActionBtn href={card.githubUrl} icon={Github} label="Code" />
                  <ActionBtn href={card.liveUrl} icon={ExternalLink} label="Live" />
                  <ActionBtn href={card.docUrl} icon={FileInput} label="Doc" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* ================= CTA ================= */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="relative mt-24 px-4"
      >

        {/* divider */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[55%] h-px
          bg-linear-to-r from-transparent via-blue-500/40 to-transparent" />

        {/* glow */}
        <div className="absolute inset-0 flex justify-center pointer-events-none">
          <div className="w-130 h-65 bg-blue-600/20 blur-[120px] rounded-full" />
        </div>

        {/* glass card */}
        <div className="relative max-w-4xl mx-auto text-center
          px-8 py-14 md:px-12
          bg-white/5 backdrop-blur-xl
          border border-blue-500/20 rounded-3xl">

          <h2 className="text-3xl md:text-4xl font-bold mb-5 text-white">
            Let’s Build Something <span className="text-blue-500">Great</span>
          </h2>

          <p className="text-gray-300 max-w-2xl mx-auto mb-8 text-sm md:text-base">
            I’m actively looking for backend development opportunities where I
            can contribute to real-world systems and grow as an engineer.
          </p>

          <div className="flex justify-center gap-5 flex-wrap">
            <motion.a
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className="px-7 py-3 rounded-xl bg-blue-600 hover:bg-blue-700
              transition font-semibold shadow-lg shadow-blue-600/40"
            >
              View Projects
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              href="/resume"
              className="px-7 py-3 rounded-xl border border-blue-500/40
              text-blue-400 hover:bg-blue-500/10 transition font-semibold"
            >
              Download Resume
            </motion.a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

/* Reusable button */
function ActionBtn({ href, icon: Icon, label }) {
  return (
    <motion.a
      whileHover={{ scale: 1.05 }}
      href={href}
      target="_blank"
      onClick={(e) => e.stopPropagation()}
      className="flex-1 text-center py-2 rounded-lg
      bg-gray-800 hover:bg-gray-700 transition text-white"
    >
      <Icon size={15} className="inline mr-1" />
      {label}
    </motion.a>
  );
}
