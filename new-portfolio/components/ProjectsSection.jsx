"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { Github, ExternalLink, Calendar, FileInput } from "lucide-react";
import projects from "../utils/projects.json";

/* ===============================
   CARD SECTION
================================ */

export default function CardSection() {
  const { scrollYProgress } = useScroll();

  return (
    <section id="projects" className="w-full py-20 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Featured <span className="text-blue-500">Projects</span>
          </h2>

          <p className="text-gray-400 mt-3 text-base md:text-lg">
            A curated selection of my backend and full-stack development work
          </p>
        </motion.div>

        {/* TIMELINE */}

        <div className="relative">
          {/* Vertical line */}

          <div
            className="hidden md:block absolute left-1/2 top-0 w-0.5 h-full 
          bg-linear-to-b from-blue-500/40 via-blue-500/10 to-transparent"
          />

          <div className="flex flex-col gap-32">
            {projects.map((project, index) => {
              const reverse = index % 2 !== 0;

              return (
                <div
                  key={project.id}
                  className="relative grid md:grid-cols-2 gap-14 items-center"
                >
                  {/* TIMELINE DOT */}

                  <div
                    className="hidden md:block absolute left-1/2 -translate-x-1/2 w-4 h-4 
                  bg-blue-500 rounded-full shadow-lg shadow-blue-500/50"
                  />

                  {/* TEXT SIDE */}

                  <motion.div
                    className={reverse ? "md:order-2" : ""}
                    initial={{ opacity: 0, x: reverse ? 80 : -80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                  >
                    <span className="text-blue-400 text-sm flex items-center gap-2 mb-2">
                      <Calendar size={16} />
                      {project.date}
                    </span>

                    <h3 className="text-3xl font-bold text-white mb-4">
                      {project.title}
                    </h3>

                    <p className="text-gray-400 leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* TECH STACK */}

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-xs rounded-full border border-blue-500/30 text-blue-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>

                  {/* CARD SIDE */}

                  <div className={reverse ? "md:order-1" : ""}>
                    <ProjectCard project={project} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ===============================
   PROJECT CARD
================================ */

function ProjectCard({ project }) {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <motion.div
      style={{ y }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -10 }}
      className="group relative rounded-2xl p-6 bg-[#0B0F19] border border-white/10 
      hover:border-blue-400 hover:shadow-[0_0_40px_rgba(59,130,246,0.45)]
      transition-all duration-300 overflow-hidden"
    >
      {/* 🔥 FIXED: Overlay (no click block) */}

      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500
        bg-linear-to-r from-blue-500/10 via-purple-500/10 to-transparent blur-2xl
        pointer-events-none"
      />

      {/* IMAGE */}

      {project.imgUrl && (
        <div className="relative rounded-xl overflow-hidden mb-5 z-10">
          <div className="relative w-full aspect-[2/1]">
            <Image
              src={project.imgUrl}
              alt={project.title}
              fill
              priority={project.id === 1}
              sizes="(max-width:768px) 100vw, 600px"
              className="object-contain transition duration-500 group-hover:scale-105"
            />
          </div>

          <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
        </div>
      )}

      {/* BUTTONS (z-index fix) */}

      <div className="flex gap-3 text-sm relative z-10">
        {project.githubUrl && (
          <ActionBtn href={project.githubUrl} icon={Github} label="Code" />
        )}

        {project.liveUrl && (
          <ActionBtn href={project.liveUrl} icon={ExternalLink} label="Live" />
        )}

        {project.docUrl && (
          <ActionBtn
            href={project.docUrl}
            icon={FileInput}
            label="Case Study"
          />
        )}
      </div>
    </motion.div>
  );
}

/* ===============================
   REUSABLE BUTTON
================================ */

function ActionBtn({ href, icon: Icon, label }) {
  const colors = {
    Code: "bg-gray-700 hover:bg-gray-800 font-semibold",
    Live: "bg-blue-600 hover:bg-blue-700 font-semibold",
    "Case Study": "bg-emerald-600 hover:bg-emerald-700 font-semibold",
  };

  return (
    <motion.a
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.95 }}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => e.stopPropagation()}
      className={`flex-1 text-center py-2.5 rounded-lg transition text-white ${colors[label]}`}
    >
      <Icon size={15} className="inline mr-1" />
      {label}
    </motion.a>
  );
}