"use client";

import { useState } from "react";
import { motion } from "motion/react";
import {
  Send,
  Mail,
  User,
  MessageSquare,
  MapPin,
  Clock
} from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Failed to send message");
      }

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });

      setTimeout(() => setStatus(""), 3000);
    } catch (error) {
      console.error(error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative py-24 px-6 bg-black text-white overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-600/20 blur-[160px]"></div>

      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-6">
            Let's Build Something
            <span className="text-blue-500"> Great</span>
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            I'm always open to discussing backend development projects,
            scalable API systems, or exciting job opportunities.
          </p>

          <div className="space-y-5 text-gray-300">

            <div className="flex items-center gap-3">
              <MapPin className="text-blue-500" size={18} />
              India (Remote Friendly)
            </div>

            <div className="flex items-center gap-3">
              <Mail className="text-blue-500" size={18} />
              infroweb.services@gmail.com
            </div>

            <div className="flex items-center gap-3">
              <Clock className="text-blue-500" size={18} />
              Usually replies within 24 hours
            </div>

          </div>
        </motion.div>

        {/* FORM */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 space-y-6 shadow-xl"
        >

          <h3 className="text-2xl font-semibold text-center mb-4">
            Send a Message
          </h3>

          {/* NAME */}
          <div className="relative">
            <User className="absolute left-3 top-3 text-gray-400" size={18} />
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your Name"
              className="w-full pl-10 py-3 bg-black/40 border border-white/10 rounded-lg focus:border-blue-500 outline-none transition"
            />
          </div>

          {/* EMAIL */}
          <div className="relative">
            <Mail className="absolute left-3 top-3 text-gray-400" size={18} />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Your Email"
              className="w-full pl-10 py-3 bg-black/40 border border-white/10 rounded-lg focus:border-blue-500 outline-none transition"
            />
          </div>

          {/* SUBJECT */}
          <select
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full py-3 px-4 bg-black/40 border border-white/10 rounded-lg focus:border-blue-500 outline-none"
          >
            <option value="">Select Subject</option>
            <option value="Project Inquiry">Project Inquiry</option>
            <option value="Freelance Work">Freelance Work</option>
            <option value="Job Opportunity">Job Opportunity</option>
            <option value="General Question">General Question</option>
          </select>

          {/* MESSAGE */}
          <div className="relative">
            <MessageSquare
              className="absolute left-3 top-3 text-gray-400"
              size={18}
            />
            <textarea
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Write your message..."
              className="w-full pl-10 py-3 bg-black/40 border border-white/10 rounded-lg focus:border-blue-500 outline-none resize-none"
            />
          </div>

          {/* BUTTON */}
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            disabled={loading}
            className="w-full py-3 rounded-lg font-semibold bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 transition flex items-center justify-center gap-2"
          >
            {loading ? "Sending..." : (
              <>
                <Send size={16} />
                Send Message
              </>
            )}
          </motion.button>

          {/* STATUS */}
          {status === "success" && (
            <p className="text-green-400 text-center text-sm">
              Message sent successfully 🚀
            </p>
          )}

          {status === "error" && (
            <p className="text-red-400 text-center text-sm">
              Failed to send message ❌
            </p>
          )}

        </motion.form>
      </div>
    </section>
  );
}