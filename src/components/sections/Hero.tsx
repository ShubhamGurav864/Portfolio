"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Download, ArrowRight, Mail } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import ParticleBackground from "../ui/ParticleBackground";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20">
      <ParticleBackground />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h2 className="text-xl md:text-2xl font-medium text-gray-400 mb-4 tracking-wide">Hello, I'm</h2>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              Shubham Gurav
            </h1>

            <div className="text-2xl md:text-4xl font-semibold mb-8 h-12 flex justify-center items-center">
              <span className="mr-3">I am a</span>
              <TypeAnimation
                sequence={[
                  'Flutter Developer',
                  2000,
                  'Cross-Platform Specialist',
                  2000,
                  'Mobile App Expert',
                  2000
                ]}
                wrapper="span"
                speed={50}
                className="text-gradient font-bold"
                repeat={Infinity}
              />
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Flutter Developer with 2 years of experience building scalable, cross-platform mobile applications for iOS and Android. Specialized in Riverpod, GetX, Provider, Firebase, REST APIs and high-performance architectures.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <a href="/resume.pdf" download className="flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.3)]">
              <Download size={20} />
              Download Resume
            </a>
            <a href="#projects" className="flex items-center gap-2 px-6 py-3 glass text-white font-semibold rounded-full hover:bg-white/10 transition-colors">
              View Projects
              <ArrowRight size={20} />
            </a>
            <a href="#contact" className="flex items-center gap-2 px-6 py-3 border border-purple-500 text-purple-400 font-semibold rounded-full hover:bg-purple-500/10 transition-colors">
              <Mail size={20} />
              Contact Me
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="flex justify-center gap-6"
          >
            <SocialLink href="https://www.linkedin.com/in/shubham-gurav-a74871379?utm_source=share_via&utm_content=profile&utm_medium=member_ios" icon={<FaLinkedin size={24} />} />
            <SocialLink href="https://github.com/ShubhamGurav864" icon={<FaGithub size={24} />} />
            <SocialLink href="mailto:shubhamgurav09876@gmail.com" icon={<Mail size={24} />} />
          </motion.div>
        </div>
      </div>

      {/* Floating Tech Icons */}
      <FloatingIcon icon="📱" delay={0} x="-30vw" y="-15vh" />
      <FloatingIcon icon="⚡" delay={1} x="35vw" y="20vh" />
      <FloatingIcon icon="🔥" delay={2} x="25vw" y="-25vh" />
      <FloatingIcon icon="🚀" delay={1.5} x="-25vw" y="25vh" />
    </section>
  );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      className="p-3 glass rounded-full text-gray-300 hover:text-white hover:border-purple-500 transition-all hover:scale-110 flex items-center justify-center"
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
    </a>
  );
}

function FloatingIcon({ icon, delay, x, y }: { icon: string; delay: number; x: string; y: string }) {
  return (
    <motion.div
      className="absolute text-4xl opacity-30 hidden md:block select-none"
      initial={{ x, y }}
      animate={{
        y: `calc(${y} + 30px)`,
        x: `calc(${x} + 15px)`
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
        delay
      }}
    >
      {icon}
    </motion.div>
  );
}
