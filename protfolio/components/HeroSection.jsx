/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import profileImg from "../assets/RaviShankarSingh.jpeg";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black text-white overflow-hidden">

      {/* TOP BLUE GLOW */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-175 h-175 bg-blue-600/20 blur-[160px]" />

      <div className="relative max-w-7xl mx-auto px-6 py-11 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
            Hi, I'm <br />
            <span className="text-blue-500">Ravi Shankar Singh</span>
          </h1>

          <h2 className="text-2xl font-semibold text-gray-300 mb-6">
            Backend Developer • Node.js • Cloud & APIs
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed max-w-xl mb-4">
            I build{" "}
            <span className="text-blue-400">
              scalable, secure, and high-performance
            </span>{" "}
            backend systems using Node.js, NestJS, and modern cloud technologies.
          </p>

          <p className="text-gray-300 text-lg max-w-xl mb-10">
            B.Tech in{" "}
            <span className="text-blue-400">
              Computer Science Engineering (Pursuing)
            </span>{" "}
            with hands-on experience building LMS and enterprise backend systems.
          </p>

          <div className="flex gap-5">
            <a
              href="/resume"
              className="px-7 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 transition font-semibold shadow-lg shadow-blue-600/30"
            >
              View Resume
            </a>

            <a
              href="#projects"
              className="px-7 py-3 rounded-lg border border-blue-500 text-blue-400 hover:bg-blue-500/10 transition font-semibold"
            >
              View Projects
            </a>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col gap-8 items-center">

          {/* PROFILE IMAGE */}
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-blue-600 blur-3xl opacity-40"></div>
            <Image
              src={profileImg}
              alt="Ravi Shankar Singh"
              width={360}
              height={360}
              priority
              className="relative rounded-full object-cover border-4 border-blue-500 shadow-2xl"
            />
          </div>

          {/* STATS CARD */}
          <div className="bg-white/5 backdrop-blur-xl border border-blue-500/20 rounded-2xl p-8 w-full max-w-md">
            <div className="grid grid-cols-3 gap-6 text-center">
              <div>
                <p className="text-3xl font-extrabold text-blue-500">10+</p>
                <p className="text-gray-400 text-sm">REST APIs</p>
              </div>
              <div>
                <p className="text-3xl font-extrabold text-blue-500">3+</p>
                <p className="text-gray-400 text-sm">Projects</p>
              </div>
              <div>
                <p className="text-3xl font-extrabold text-blue-500">AWS</p>
                <p className="text-gray-400 text-sm">Cloud</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
