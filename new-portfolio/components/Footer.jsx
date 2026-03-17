"use client"
import React from "react"
import { motion } from "motion/react"
import { Github, Linkedin, Mail, Brain } from "lucide-react"

export default function Footer() {
  const socials = [
    {
      Icon: Github,
      link: "https://github.com/yourusername",
      label: "GitHub",
    },
    {
      Icon: Linkedin,
      link: "https://linkedin.com/in/yourusername",
      label: "LinkedIn",
    },
    {
      Icon: Mail,
      link: "mailto:your.email@example.com",
      label: "Email",
    },
    {
      Icon: Brain,
      link: "https://leetcode.com/u/Bholacs-2024/",
      label: "LeetCode",
    },
  ]

  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-br from-[#0B0F19] via-black to-[#0B0F19] text-white border-t border-blue-500/20"
    >
      <div className="max-w-6xl mx-auto px-6 py-10">

        {/* TOP SECTION */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">

          {/* BRAND */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h3 className="text-2xl font-semibold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Ravi Shankar Singh
            </h3>

            <p className="text-gray-400 mt-2 text-sm md:text-base">
              Backend Developer • System Design • Scalable Architecture
            </p>

            <p className="text-gray-500 mt-1 text-sm">
              Node.js • NestJS • Redis • MongoDB • AWS
            </p>
          </motion.div>

          {/* SOCIALS */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.1 }
              }
            }}
            className="flex gap-4"
          >
            {socials.map(({ Icon, link, label }) => (
              <motion.a
                key={label}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 }
                }}
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
                className={`bg-[#111827] p-3 rounded-full text-gray-400 
                hover:text-white hover:bg-blue-600
                shadow-lg hover:shadow-blue-500/30
                transition-all duration-300`}
              >
                <Icon size={18} />
              </motion.a>
            ))}
          </motion.div>

        </div>

        {/* DIVIDER */}
        <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>

        {/* BOTTOM SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm"
        >

          <p className="text-gray-500 text-center md:text-left">
            © {new Date().getFullYear()} Ravi Shankar Singh • Built with Next.js & Tailwind
          </p>

          <div className="flex gap-6 text-gray-500">
            {["Privacy", "Terms", "Contact"].map((item) => (
              <motion.a
                key={item}
                href={`/${item.toLowerCase()}`}
                whileHover={{ y: -2 }}
                className="hover:text-blue-400 transition"
              >
                {item}
              </motion.a>
            ))}
          </div>

        </motion.div>

      </div>
    </motion.footer>
  )
}