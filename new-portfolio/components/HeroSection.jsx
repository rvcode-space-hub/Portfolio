"use client";
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import {motion} from "motion/react";
import profileImg from "../assets/RaviShankarSingh.jpeg";
import user from "../utils/user.json";
import {TypeAnimation} from "react-type-animation";
import CountUp from "react-countup";
export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black text-white overflow-hidden">
      {/* BACKGROUND GLOW */}
      <div className="absolute -top-50 left-1/2 -translate-x-1/2 w-150 h-150 bg-blue-600/20 blur-[140px]" />

      <div className="relative max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-20 items-center">
        {/* LEFT */}
        <motion.div
          initial={{opacity: 0, x: -60}}
          animate={{opacity: 1, x: 0}}
          transition={{duration: 0.7}}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            Hi, I'm <br />
            <span className="text-blue-500">Ravi Shankar Singh</span>
          </h1>

          <div className="text-xl md:text-2xl font-semibold text-blue-400 mb-6">
            <TypeAnimation
              sequence={[
                "Backend Developer",
                2000,
                "Node.js Developer",
                2000,
                "API & Microservices Developer",
                2000,
                "Cloud & Scalable Systems",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>

          <p className="text-gray-300 text-lg leading-relaxed max-w-xl mb-4">
            I build{" "}
            <span className="text-blue-400 font-semibold">
              scalable, secure, and high-performance
            </span>{" "}
            backend systems using Node.js, NestJS, and modern cloud
            technologies.
          </p>

          <p className="text-gray-400 text-base max-w-xl mb-10">
            B.Tech in Computer Science Engineering (Pursuing) with hands-on
            experience building LMS and enterprise backend systems.
          </p>

          <div className="flex gap-4">
            <motion.a
              whileHover={{scale: 1.05}}
              whileTap={{scale: 0.95}}
              href="https://res.cloudinary.com/dgmzre11v/raw/upload/v1770189431/documents/document_1770189445292"
              className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 transition font-semibold shadow-lg shadow-blue-600/30"
            >
              View Resume
            </motion.a>

            <motion.a
              whileHover={{scale: 1.05}}
              whileTap={{scale: 0.95}}
              href="#projects"
              className="px-6 py-3 rounded-xl border border-blue-500 text-blue-400 hover:bg-blue-500/10 transition font-semibold"
            >
              View Projects
            </motion.a>
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{opacity: 0, x: 60}}
          animate={{opacity: 1, x: 0}}
          transition={{duration: 0.7, delay: 0.2}}
          className="relative w-full max-w-sm mx-auto"
        >
          {/* CARD */}
          <div className="bg-linear-to-b from-white/10 to-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-6 flex flex-col items-center gap-6 shadow-xl">
            {/* IMAGE */}
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-2xl"></div>

              <Image
                src={profileImg}
                alt="Ravi Shankar Singh"
                width={200}
                height={200}
                className="relative rounded-4xl object-cover border-4 border-blue-500"
              />
            </div>

            {/* STATS */}
            <div className="grid grid-cols-2 gap-4 w-full">
              {user.map((item, index) => (
                <div
                  key={index}
                  className="group p-4 rounded-xl bg-white/5 border border-white/10 text-center
                  hover:border-blue-500/40 hover:bg-white/10 transition-all duration-300"
                >
                  <CountUp
                   end={parseInt(item.value)}
                    duration={2}
                    suffix={item.value.includes("%") ? "%" : "+"}
                    className="text-xl font-bold text-blue-500"
                  />

                  <p className="text-gray-400 text-[11px] mt-1 leading-snug">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
