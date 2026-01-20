/* eslint-disable react/no-unescaped-entities */
"use client";

import React from "react";
import { motion } from "motion/react";

/* ---------------- SKILL CATEGORIES ---------------- */
const skillCategories = {
  "Core Backend": [
    "Node.js",
    "Express.js",
    "NestJS",
    "REST APIs",
    "Java",
    "Microservices",
    "JWT",
    "OAuth2",
    "API Security",
  ],
  Databases: [
    "MongoDB",
    "PostgreSQL",
    "MySQL",
    "Redis",
    "Database Normalization",
  ],
  "Cloud & DevOps": [
    "AWS Cloud",
    "Docker",
    "CI/CD Pipelines",
    "Cloud Deployment",
    "Server Optimization",
  ],
  "Frontend (Supporting)": [
    "JavaScript",
    "TypeScript",
    "React.js",
    "Next.js",
    "HTML",
    "CSS",
    "Tailwind CSS",
  ],
  "Tools & Platforms": [
    "Git",
    "GitHub",
    "Postman",
    "Render",
    "Vercel",
    "RabbitMQ",
  ],
};

/* ---------------- ICON MAP (SimpleIcons CDN) ---------------- */
const skillIconMap = {
  "Node.js": "node.js",
  "Express.js": "express",
  "NestJS": "nestjs",
  "REST APIs": "fastapi",
  "Java": "java",
  "Microservices": "kubernetes",
  "JWT": "jsonwebtokens",
  "OAuth2": "auth0",
  "API Security": "cloudflare",

  "MongoDB": "mongodb",
  "PostgreSQL": "postgresql",
  "MySQL": "mysql",
  "Redis": "redis",
  "Database Normalization": "mysql",

  "AWS Cloud": "amazonaws",
  "Docker": "docker",
  "CI/CD Pipelines": "githubactions",
  "Cloud Deployment": "vercel",
  "Server Optimization": "nginx",

  "JavaScript": "javascript",
  "TypeScript": "typescript",
  "React.js": "react",
  "Next.js": "nextdotjs",
  "HTML": "html5",
  "CSS": "css",
  "Tailwind CSS": "tailwindcss",

  "Git": "git",
  "GitHub": "github",
  "Postman": "postman",
  "Render": "render",
  "Vercel": "vercel",
  "RabbitMQ": "rabbitmq",
};

export default function AboutPage() {
  return (
    <section className="bg-black text-white min-h-screen py-14 px-4">
      {/* ================= HERO ================= */}
      <div className="relative overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-175 h-175 bg-blue-600/20 blur-[160px]" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative max-w-6xl mx-auto px-6 py-28 text-center"
        >
          <h1 className="text-3xl md:text-6xl font-extrabold mb-6">
            About <span className="text-blue-500">Me</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I'm{" "}
            <span className="text-blue-400 font-semibold">
              Ravi Shankar Singh
            </span>
            , a backend developer focused on building scalable, secure, and
            high-performance server-side applications using Node.js, NestJS, and
            cloud technologies.
          </p>
        </motion.div>
      </div>

      {/* ================= ABOUT ================= */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto px-6 py-20"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-blue-500 mb-6">
          My Journey
        </h2>

        <p className="text-gray-300 text-base md:text-xl leading-relaxed max-w-4xl">
          I started my development journey with web technologies and gradually
          discovered my passion for backend development, where system design,
          performance optimization, and scalability play a critical role.
          <br />
          <br />
          I enjoy designing RESTful APIs, working with databases, implementing
          authentication mechanisms, and deploying production-ready backend
          systems.
          <br />
          <br />
          Currently, I am pursuing a B.Tech in Computer Science Engineering and
          actively preparing for backend and software engineering roles.
        </p>
      </motion.div>

      {/* ================= SKILLS ================= */}
  <div className="max-w-7xl mx-auto px-6 py-8 bg-neutral-950 rounded-4xl">
  <h2 className="text-2xl md:text-3xl font-bold text-blue-500 mb-16 text-center">
    Technical Skills
  </h2>

  <div className="space-y-20">
    {Object.entries(skillCategories).map(([category, skills]) => (
      <motion.div
        key={category}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
      >
        {/* CATEGORY TITLE */}
        <h3 className="text-lg md:text-xl font-semibold mb-10 text-gray-200 text-center md:text-left">
          {category}
        </h3>

        {/* SKILLS GRID */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-x-10 gap-y-12">
          {skills.map((skill) => (
            <motion.div
              key={skill}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 260 }}
              className="group flex flex-col items-center"
            >
              {/* ICON CONTAINER */}
              <div
                className="
                  w-16 h-16 md:w-18 md:h-18 rounded-xl
                  bg-white/5
                  border border-white/10
                  flex items-center justify-center
                
                "
              >
                {skillIconMap[skill] && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={`https://cdn.simpleicons.org/${skillIconMap[skill]}`}
                    alt={skill}
                    loading="lazy"
                    className="
                      w-8 h-8 md:w-9 md:h-9
                      
                    "
                  />
                )}
              </div>

              {/* SKILL NAME */}
              <span
                className="
                  mt-3 text-xs md:text-sm
                  text-gray-400
                  text-center
                  group-hover:text-blue-400
                  transition-colors duration-300
                "
              >
                {skill}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    ))}
  </div>
</div>


      {/* ================= CTA ================= */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="relative mt-24 px-4"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[55%] h-px bg-linear-to-r from-transparent via-blue-500/40 to-transparent" />

        <div className="absolute inset-0 flex justify-center pointer-events-none">
          <div className="w-130 h-65 bg-blue-600/20 blur-[120px] rounded-full" />
        </div>

        <div
          className="relative max-w-4xl mx-auto text-center
          px-8 py-14 md:px-12
          bg-white/5 backdrop-blur-xl
          border border-blue-500/20 rounded-3xl"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-5 text-white">
            Let’s Build Something{" "}
            <span className="text-blue-500">Great</span>
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
