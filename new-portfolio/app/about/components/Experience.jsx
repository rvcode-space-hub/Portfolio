import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const experienceData = [
  {
    dot: "bg-blue-500 shadow-lg shadow-blue-500/50",
    title: "Backend Developer – Remote (Live Project)",
    company: "ZeTheta’s",
    date: "Jan 2026 – Present",
    content: (
      <div className="space-y-3">

        {/* Summary */}
        <p><span className="text-blue-400 font-medium">Tech Stack:</span> Node.js, Express, MongoDB, Redis</p>
        <p><span className="text-blue-400 font-medium">Problem:</span> API latency under high traffic due to repeated DB queries.</p>
        <p><span className="text-blue-400 font-medium">Solution:</span> Introduced Redis caching and service-layer architecture.</p>
        <p><span className="text-blue-400 font-medium">Impact:</span> Faster responses and reduced database load.</p>

        {/* Divider */}
        <div className="border-t border-white/10 pt-3 space-y-2">

          <p className="text-blue-400 font-medium">System Design:</p>
          <ul className="list-disc list-inside space-y-1 text-gray-300">
            <li>Client → API Layer → Service Layer → Cache/DB → Response</li>
            <li>Redis used for caching frequent queries</li>
            <li>MongoDB optimized with indexing</li>
          </ul>

          <p className="text-blue-400 font-medium">Trade-offs:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Cache invalidation complexity</li>
            <li>Extra infrastructure cost (Redis)</li>
          </ul>

        </div>
      </div>
    ),
  },

  {
    dot: "bg-blue-500/60",
    title: "Backend Developer Intern",
    company: "Pearl-Thoughts",
    date: "Jul – Aug 2025",
    content: (
      <div className="space-y-3">

        <p><span className="text-blue-400 font-medium">Tech Stack:</span> Node.js, Express, MongoDB, JWT</p>
        <p><span className="text-blue-400 font-medium">Problem:</span> LMS lacked secure authentication.</p>
        <p><span className="text-blue-400 font-medium">Solution:</span> Implemented JWT authentication and modular APIs.</p>
        <p><span className="text-blue-400 font-medium">Impact:</span> Improved system security and scalability.</p>

        <div className="border-t border-white/10 pt-3 space-y-2">

          <p className="text-blue-400 font-medium">System Flow:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>User Login → JWT Token → Middleware → Protected Routes</li>
            <li>Stateless authentication architecture</li>
          </ul>

          <p className="text-blue-400 font-medium">Trade-offs:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Token expiration handling complexity</li>
          </ul>

        </div>
      </div>
    ),
  },

  {
    dot: "bg-green-500/60",
    title: "Software Engineering Virtual Experience",
    company: "JPMorgan Chase & Co.",
    date: "April 2026",
    content: (
      <div className="space-y-3">

        <p><span className="text-blue-400 font-medium">Tech Stack:</span> Java, Spring Boot, Kafka</p>
        <p><span className="text-blue-400 font-medium">Problem:</span> Needed reliable high-volume transaction processing.</p>
        <p><span className="text-blue-400 font-medium">Solution:</span> Built event-driven microservice using Kafka.</p>
        <p><span className="text-blue-400 font-medium">Impact:</span> Scalable and fault-tolerant system.</p>

        <div className="border-t border-white/10 pt-3 space-y-2">

          <p className="text-blue-400 font-medium">System Design:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Kafka → Consumer → Validation → DB → External API</li>
            <li>Decoupled architecture using message queues</li>
          </ul>

          <p className="text-blue-400 font-medium">Trade-offs:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Harder debugging due to async processing</li>
            <li>Increased system complexity</li>
          </ul>

        </div>
      </div>
    ),
  },

  {
    dot: "bg-purple-500/60",
    title: "Software Engineering Virtual Experience",
    company: "Electronic Arts",
    date: "April 2026",
    content: (
      <div className="space-y-3">

        <p><span className="text-blue-400 font-medium">Tech Stack:</span> C++, Data Structures</p>
        <p><span className="text-blue-400 font-medium">Problem:</span> Inefficient data handling in game system.</p>
        <p><span className="text-blue-400 font-medium">Solution:</span> Optimized data structures and fixed bugs.</p>
        <p><span className="text-blue-400 font-medium">Impact:</span> Improved performance and efficiency.</p>

        <div className="border-t border-white/10 pt-3 space-y-2">

          <p className="text-blue-400 font-medium">System Flow:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Optimized classes → Efficient data flow → Execution</li>
          </ul>

          <p className="text-blue-400 font-medium">Trade-offs:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Refactoring required deeper codebase understanding</li>
          </ul>

        </div>
      </div>
    ),
  },

{
  dot: "bg-blue-500/30",
  title: "Data & Operations Analyst",
  company: "JKM Security Services",
  date: "Mar 2022 – Dec 2025",
  content: (
    <div className="space-y-3">

      <p>
        <span className="text-blue-400 font-medium">Tools:</span> Excel, Power Query
      </p>

      <p>
        <span className="text-blue-400 font-medium">Problem:</span> Manual reporting workflows were time-consuming and prone to errors.
      </p>

      <p>
        <span className="text-blue-400 font-medium">Solution:</span> Designed and automated data processing workflows using Power Query and structured reporting systems.
      </p>

      <p>
        <span className="text-blue-400 font-medium">Impact:</span> Reduced manual effort by 30% and improved reporting accuracy and consistency.
      </p>

      <div className="border-t border-white/10 pt-3 space-y-2">
        <p className="text-blue-400 font-medium">Key Contributions:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Built reusable data cleaning and transformation pipelines</li>
          <li>Automated daily, weekly, and monthly reporting workflows</li>
          <li>Improved data accuracy and operational efficiency</li>
        </ul>
      </div>

    </div>
  ),
}
];

export default function Experience() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleCard = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
      
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-500 mb-10 sm:mb-14 text-center"
      >
        Experience
      </motion.h2>

      <div className="relative max-w-5xl mx-auto pl-4 sm:pl-6 space-y-6 sm:space-y-8">
        
        {/* Timeline Line */}
        <div className="absolute left-2 sm:left-3 top-0 h-full w-px bg-blue-500/30" />

        {experienceData.map((item, i) => {
          const isOpen = openIndex === i;

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="relative"
            >
              
              {/* Dot */}
              <span
                className={`absolute -left-[6px] sm:-left-[7px] top-4 w-3 h-3 sm:w-4 sm:h-4 rounded-full ${item.dot}`}
              />

              {/* Card */}
              <div
                onClick={() => toggleCard(i)}
                className="cursor-pointer border border-blue-500/20 rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-6 
                bg-gradient-to-br from-white/5 to-transparent backdrop-blur-md
                hover:border-blue-400 hover:scale-[1.015]
                transition-all duration-300"
              >

                {/* Header */}
                <div className="flex justify-between items-start gap-3">

                  <div>
                    <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-white">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-gray-400 mt-1">
                      {item.company} • {item.date}
                    </p>
                  </div>

                  {/* Arrow */}
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    className="text-blue-400 text-sm sm:text-base mt-1"
                  >
                    ▼
                  </motion.span>

                </div>

                {/* Content */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="mt-4 text-xs sm:text-sm lg:text-base text-gray-300 leading-relaxed space-y-2">
                        {item.content}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}