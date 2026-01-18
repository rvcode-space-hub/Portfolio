/* eslint-disable react/no-unescaped-entities */
import React from "react";
import {
  Code2,
  Globe,
  Cpu,
  Server,
  Layers,
  Database,
  GitBranch,
  Terminal,
  Cloud,
  Lock,
} from "lucide-react";

/* ---------------- ICON MAP ---------------- */
const skillIcons = {
  "JavaScript": <Code2 size={20} />,
  "TypeScript": <Code2 size={20} />,
  "HTML": <Globe size={20} />,
  "CSS": <Globe size={20} />,
  "Java (Spring Boot)": <Cpu size={20} />,
  "Node.js": <Server size={20} />,
  "Express.js": <Server size={20} />,
  "NestJS": <Layers size={20} />,
  "React.js": <Code2 size={20} />,
  "Next.js": <Code2 size={20} />,
  "Tailwind CSS": <Globe size={20} />,
  "PostgreSQL": <Database size={20} />,
  "MongoDB": <Database size={20} />,
  "MySQL": <Database size={20} />,
  "Redis": <Database size={20} />,
  "Git": <GitBranch size={20} />,
  "GitHub": <GitBranch size={20} />,
  "Docker": <Terminal size={20} />,
  "AWS Cloud": <Cloud size={20} />,
  "Postman": <Terminal size={20} />,
  "Render": <Cloud size={20} />,
  "Vercel": <Cloud size={20} />,
  "RabbitMQ": <Server size={20} />,
  "Microservices": <Layers size={20} />,
  "REST APIs": <Server size={20} />,
  "MVC": <Layers size={20} />,
  "OAuth2": <Lock size={20} />,
  "JWT": <Lock size={20} />,
  "API Security": <Lock size={20} />,
  "CI/CD Pipelines": <GitBranch size={20} />,
  "Database Normalization": <Database size={20} />,
  "Server Optimization": <Server size={20} />,
  "Cloud Deployment": <Cloud size={20} />,
};

/* ---------------- SKILL CATEGORIES ---------------- */
const skillCategories = {
  "Core Backend": [
    "Node.js",
    "Express.js",
    "NestJS",
    "REST APIs",
    "Microservices",
    "JWT",
    "OAuth2",
    "API Security",
  ],
  "Databases": [
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

export default function AboutPage() {
  return (
    <section className="bg-black text-white min-h-screen">

      {/* ================= HERO ================= */}
      <div className="relative overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-175 h-175 bg-blue-600/20 blur-[160px]" />

        <div className="relative max-w-6xl mx-auto px-6 py-28 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            About <span className="text-blue-500">Me</span>
          </h1>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I'm <span className="text-blue-400 font-semibold">Ravi Shankar Singh</span>,
            a backend developer focused on building scalable, secure, and
            high-performance server-side applications using Node.js,
            NestJS, and cloud technologies.
          </p>
        </div>
      </div>

      {/* ================= ABOUT ================= */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-blue-500 mb-6">My Journey</h2>

        <p className="text-gray-300 text-lg leading-relaxed max-w-4xl">
          I started my development journey with web technologies and gradually
          discovered my passion for backend development, where system design,
          performance optimization, and scalability play a critical role.
          <br /><br />
          I enjoy designing RESTful APIs, working with databases, implementing
          authentication mechanisms, and deploying production-ready backend
          systems.
          <br /><br />
          Currently, I am pursuing a B.Tech in Computer Science Engineering and
          actively preparing for backend and software engineering roles.
        </p>
      </div>

      {/* ================= SKILLS ================= */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-blue-500 mb-12 text-center">
          Technical Skills
        </h2>

        <div className="space-y-14">
          {Object.entries(skillCategories).map(([category, skills]) => (
            <div key={category}>
              <h3 className="text-xl font-semibold mb-6">{category}</h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
                {skills.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl
                               bg-white/5 border border-blue-500/20
                               hover:border-blue-500 hover:bg-blue-500/10
                               transition"
                  >
                    <span className="text-blue-400">
                      {skillIcons[skill]}
                    </span>
                    <span className="text-gray-200 text-sm font-medium">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ================= EXPERIENCE ================= */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-blue-500 mb-10">Experience</h2>

        <div className="space-y-8">

          {/* BACKEND INTERN */}
          <div className="border border-blue-500/20 rounded-xl p-6 bg-white/5">
            <h3 className="text-xl font-semibold">
              Backend Developer Intern
            </h3>

            <ul className="text-gray-300 mt-4 space-y-3 list-disc list-inside">

              <li>
                <span className="text-blue-400 font-medium">What I built:</span>{" "}
                Designed and developed scalable RESTful APIs for an LMS platform,
                handling users, courses, and role-based access.
              </li>

              <li>
                <span className="text-blue-400 font-medium">Tech used:</span>{" "}
                Node.js, Express.js, MongoDB, JWT authentication.
              </li>

              <li>
                <span className="text-blue-400 font-medium">Impact:</span>{" "}
                Improved API response time and optimized database queries,
                resulting in smoother performance and better scalability.
              </li>

            </ul>
          </div>

          {/* WEB INTERN */}
          <div className="border border-blue-500/20 rounded-xl p-6 bg-white/5">
            <h3 className="text-xl font-semibold">
              Web Developer Intern
            </h3>

            <ul className="text-gray-300 mt-4 space-y-3 list-disc list-inside">

              <li>
                <span className="text-blue-400 font-medium">What I built:</span>{" "}
                Developed responsive and user-friendly web interfaces for
                internal and client-facing applications.
              </li>

              <li>
                <span className="text-blue-400 font-medium">Tech used:</span>{" "}
                HTML, CSS, JavaScript, React.js, Tailwind CSS.
              </li>

              <li>
                <span className="text-blue-400 font-medium">Impact:</span>{" "}
                Enhanced user experience and improved page load performance,
                leading to better usability and engagement.
              </li>

            </ul>
          </div>

        </div>
      </div>







      {/* ================= CTA ================= */}
      <div className="relative py-24">

        {/* subtle separator line */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-px bg-linear-to-r from-transparent via-blue-500/40 to-transparent" />

        {/* glow */}
        <div className="absolute inset-0 flex justify-center pointer-events-none">
          <div className="w-150 h-75 bg-blue-600/20 blur-[120px] rounded-full" />
        </div>

        {/* glass card */}
        <div className="relative max-w-4xl mx-auto text-center px-10 py-16
                  bg-white/5 backdrop-blur-xl
                  border border-blue-500/20 rounded-3xl">

          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Let’s Build Something <span className="text-blue-500">Great</span>
          </h2>

          <p className="text-gray-300 max-w-2xl mx-auto mb-10">
            I’m actively looking for backend development opportunities where I
            can contribute to real-world systems and grow as an engineer.
          </p>

          <div className="flex justify-center gap-6">
            <a
              href="/projects"
              className="px-8 py-3 rounded-xl bg-blue-600 hover:bg-blue-700
                   transition font-semibold shadow-lg shadow-blue-600/40"
            >
              View Projects
            </a>

            <a
              href="/resume"
              className="px-8 py-3 rounded-xl border border-blue-500/40
                   text-blue-400 hover:bg-blue-500/10
                   backdrop-blur transition font-semibold"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
