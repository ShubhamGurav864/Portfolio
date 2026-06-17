"use client";

import { motion } from "framer-motion";

export default function About() {
  const stats = [
    { label: "Years Experience", value: "2+" },
    { label: "Projects Completed", value: "12+" },
    { label: "Technologies Mastered", value: "15+" },
  ];

  const expertise = [
    "Flutter", "Dart", "Firebase", "Riverpod", "GetX", "Provider", "REST APIs", "MongoDB", "Unity AR Integration"
  ];

  const industries = [
    "Pharma", "Gaming", "Social Networking", "Architecture Visualization", "Parking Management", "Digital Content Distribution"
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About <span className="text-gradient">Me</span></h2>
          <div className="w-24 h-1 bg-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              I am a Flutter Developer with 2 years of professional experience developing production-grade mobile applications for Android and iOS. I specialize in creating scalable architectures, pixel-perfect UI implementations, state management solutions, and backend integrations.
            </p>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-white">My Expertise</h3>
              <div className="flex flex-wrap gap-3">
                {expertise.map((item, index) => (
                  <span key={index} className="px-4 py-2 glass rounded-full text-sm font-medium text-purple-300">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-white">Industries I've Worked In</h3>
              <ul className="grid grid-cols-2 gap-3">
                {industries.map((ind, index) => (
                  <li key={index} className="flex items-center text-gray-400">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    {ind}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <div key={index} className="glass p-8 rounded-2xl text-center transform hover:-translate-y-2 transition-transform duration-300 border border-purple-500/20 hover:border-purple-500/50">
                <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      
      {/* Decorative background element */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
    </section>
  );
}
