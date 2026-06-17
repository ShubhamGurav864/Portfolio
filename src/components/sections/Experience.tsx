"use client";

import { motion } from "framer-motion";
import { Briefcase, Building2 } from "lucide-react";

const experiences = [
  {
    company: "Vervali Systems Pvt. Ltd.",
    role: "Flutter Developer",
    duration: "June 2024 - Present",
    achievements: [
      "Developed 5+ production Flutter applications",
      "Implemented Riverpod, GetX and Provider architectures",
      "Collaborated with UI/UX teams and backend engineers",
      "Participated in sprint planning and client communication"
    ]
  },
  {
    company: "Branding Catalyst Pvt Ltd",
    role: "Mobile Developer Intern",
    duration: "March 2024 - June 2024",
    achievements: [
      "Built production-ready Flutter UI screens",
      "Integrated push notifications",
      "Improved user experience based on feedback"
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative bg-black/40">
      <div className="container mx-auto px-6 relative z-10 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Professional <span className="text-gradient">Experience</span></h2>
          <div className="w-24 h-1 bg-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-[20px] md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500/50 via-blue-500/50 to-transparent"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row items-start md:items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Center dot */}
                <div className="absolute left-[20px] md:left-1/2 transform -translate-x-1/2 mt-6 md:mt-0 w-10 h-10 rounded-full border-4 border-black bg-purple-500 flex items-center justify-center z-10 shadow-[0_0_15px_rgba(168,85,247,0.5)]">
                  <Briefcase size={16} className="text-white" />
                </div>

                {/* Content Card */}
                <div className={`ml-16 md:ml-0 md:w-1/2 w-[calc(100%-4rem)] ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}>
                  <div className="glass p-6 md:p-8 rounded-2xl border border-white/5 hover:border-purple-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] group relative overflow-hidden">
                    
                    {/* Hover gradient effect background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 to-blue-500/0 group-hover:from-purple-500/5 group-hover:to-blue-500/5 transition-all duration-500"></div>

                    <div className="flex items-center gap-4 mb-4 relative z-10">
                      <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform duration-300 shrink-0">
                        <Building2 className="text-gray-400 group-hover:text-purple-400 transition-colors" />
                      </div>
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 transition-all">{exp.role}</h3>
                        <p className="text-md md:text-lg text-purple-400 font-medium">{exp.company}</p>
                      </div>
                    </div>
                    
                    <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 text-sm text-gray-300 mb-6 font-medium relative z-10">
                      {exp.duration}
                    </div>

                    <ul className="space-y-3 relative z-10">
                      {exp.achievements.map((achievement, aIndex) => (
                        <li key={aIndex} className="flex items-start text-gray-400 group-hover:text-gray-300 transition-colors">
                          <span className="text-blue-400 mr-3 mt-1 text-xs shrink-0">✦</span>
                          <span className="leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
