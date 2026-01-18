import React from 'react'
import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-linear-to-br from-[#0B0F19] via-black to-[#0B0F19] text-white border-t border-blue-500/20">
      <div className="max-w-4xl mx-auto px-4 py-6">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-5">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-xl md:text-2xl font-semibold 
    bg-linear-to-r from-blue-400 to-cyan-400 
    bg-clip-text text-transparent">
              Ravi Shankar Singh
            </h3>

            <p className="text-gray-400 text-xs md:text-lg mt-1">
              Backend Developer • System Design • Scalable Architecture
            </p>

            <p className="text-gray-400 text-sm  md:text-lg mt-1">
              Focused on performance, reliability, and clean backend systems
            </p>
          </div>


          {/* Social Icons */}
          <div className="flex items-center gap-3">
            {[
              { Icon: Github, link: "https://github.com/yourusername", label: "GitHub" },
              { Icon: Linkedin, link: "https://linkedin.com/in/yourusername", label: "LinkedIn" },
              { Icon: Mail, link: "mailto:your.email@example.com", label: "Email" },
            ].map(({ Icon, link, label }) => (
              <a
                key={label}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="bg-[#111827] p-2 rounded-full
                  text-gray-400 hover:text-white
                  hover:bg-blue-600
                  transition-all duration-300
                  hover:scale-105"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-blue-500/20 mb-4"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-xs text-center md:text-left">
            © {new Date().getFullYear()} Ravi Shankar Singh
          </p>

          <div className="flex gap-4 text-xs">
            {["Privacy", "Terms", "Contact"].map((item) => (
              <a
                key={item}
                href={`/${item.toLowerCase()}`}
                className="text-gray-500 hover:text-blue-400 transition"
              >
                {item}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  )
}
