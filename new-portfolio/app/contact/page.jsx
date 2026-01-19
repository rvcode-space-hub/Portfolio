'use client';
import { useState } from 'react';
import { motion } from 'motion/react';
import {
  Send,
  Mail,
  User,
  MessageSquare,
  MapPin,
  Clock
} from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    setLoading(true);
    setStatus('');
    setTimeout(() => {
      setStatus('success');
      setLoading(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus(''), 3000);
    }, 1500);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-linear-to-br from-gray-900 via-blue-950 to-black py-20 px-4"
    >
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-white"
        >
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            Let’s Work Together
          </h2>

          <p className="text-gray-300 mb-6 leading-relaxed text-sm md:text-xl">
            Looking for a backend developer who can build scalable APIs,
            secure authentication systems, and production-ready backend
            solutions?
          </p>

          <p className="text-gray-300 mb-8 text-sm md:text-xl leading-relaxed">
            I specialize in Node.js, NestJS, databases, and cloud-based
            backend systems.
          </p>

          <div className="space-y-3 text-sm md:text-lg text-gray-300">
            <p className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-blue-400" />
              India (Remote-friendly)
            </p>
            <p className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-blue-400" />
              infroweb.services@gmail.com
            </p>
            <p className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-blue-400" />
              Usually responds within 24 hours
            </p>
          </div>
        </motion.div>

        {/* FORM */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-xl shadow-xl p-6 border border-gray-200 space-y-4"
        >
          <div className="text-center mb-4">
            <h3 className="text-2xl font-bold text-gray-900">
              Get In Touch
            </h3>
            <p className="text-sm text-gray-500">
              Have a project in mind? Let’s talk.
            </p>
          </div>

          {/* Name */}
          <div>
            <label className="text-sm font-medium text-gray-700">Name</label>
            <div className="relative mt-1">
              <User className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full pl-9 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                placeholder="John Doe"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="text-sm font-medium text-gray-700">Email</label>
            <div className="relative mt-1">
              <Mail className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full pl-9 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                placeholder="john@example.com"
              />
            </div>
          </div>

          {/* Subject */}
          <div>
            <label className="text-sm font-medium text-gray-700">Subject</label>
            <select
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full mt-1 py-2 px-3 border rounded-md focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select a subject</option>
              <option value="Project Inquiry">Project Inquiry</option>
              <option value="Freelance Work">Freelance Work</option>
              <option value="Job Opportunity">Job Opportunity</option>
              <option value="General Question">General Question</option>
            </select>
          </div>

          {/* Message */}
          <div>
            <label className="text-sm font-medium text-gray-700">Message</label>
            <textarea
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="w-full mt-1 py-2 px-3 border rounded-md focus:ring-2 focus:ring-blue-500 resize-none"
            />
          </div>

          {/* Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleSubmit}
            disabled={loading}
            className="w-full bg-blue-700 text-white py-2 rounded-md hover:bg-blue-800 transition flex items-center justify-center gap-2 font-semibold"
          >
            {loading ? 'Sending...' : (
              <>
                <Send className="h-4 w-4" />
                Send Message
              </>
            )}
          </motion.button>

          {status === 'success' && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-sm text-green-600 text-center"
            >
              Thanks for reaching out! I’ll get back to you soon 🚀
            </motion.p>
          )}
        </motion.div>
      </div>
    </motion.section>
  );
}
