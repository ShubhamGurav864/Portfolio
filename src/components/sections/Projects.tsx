"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, Code2, Globe, Layers, Smartphone } from "lucide-react";
import { FaGooglePlay, FaApple } from "react-icons/fa";

const projectsData = [
  {
    id: 1,
    name: "Parking App",
    description: "Enterprise parking management solution enabling real-time parking allocation and ticket management across multi-floor buildings.",
    features: ["Real-time parking slot selection", "Multi-floor building support", "Ticket raising and tracking", "Approval workflow system", "Push notifications", "Role-based access"],
    tech: ["Flutter", "REST APIs", "Push Notifications"],
    architecture: "Clean Architecture + REST APIs",
    playStore: null,
    appStore: null,
  },
  {
    id: 2,
    name: "Gigloca",
    description: "Social networking platform connecting users with local events, communities, and venues.",
    features: ["Event discovery", "Social networking", "Community interactions", "Live activity feeds", "Optimized API handling", "Low latency experience"],
    tech: ["Flutter", "GetX", "REST APIs"],
    architecture: "GetX + REST APIs",
    playStore: null,
    appStore: null,
  },
  {
    id: 3,
    name: "ARchitect",
    description: "Augmented reality application allowing users to scan rooms and visualize floor plans in interactive 2D and 3D environments.",
    features: ["Room scanning", "AR visualization", "Floor plan rendering", "Flutter-Unity communication", "2D and 3D architecture models", "Memory optimized rendering"],
    tech: ["Flutter", "Unity AR", "Firebase"],
    architecture: "Flutter + Unity Integration",
    playStore: null,
    appStore: null,
  },
  {
    id: 4,
    name: "Co-brandly",
    description: "Enterprise digital asset management platform for distributing branded content and marketing resources.",
    features: ["Content management", "PDF distribution", "PPT distribution", "Secure authentication", "Media sharing", "Role-based permissions"],
    tech: ["Flutter", "GetX", "MVC", "REST APIs"],
    architecture: "MVC + GetX",
    playStore: null,
    appStore: null,
  },
  {
    id: 5,
    name: "SFE Pharma",
    description: "Field-force productivity application for pharmaceutical representatives with offline-first capabilities.",
    features: ["Offline-first architecture", "Voice-based product search", "Product detailing", "PDF presentation support", "Video presentation support", "Automatic synchronization engine"],
    tech: ["Flutter", "Local Database", "REST APIs", "Offline First"],
    architecture: "Offline First + Sync Engine",
    playStore: "https://play.google.com/store/apps/details?id=com.tecsindia.pharma&hl=en_index",
    appStore: null,
  },
  {
    id: 6,
    name: "Gamistaan",
    description: "Gaming platform application where critical bug fixes, performance improvements, and API integrations were delivered under strict deadlines.",
    features: ["Gaming ecosystem", "Performance optimization", "API integration", "Production issue resolution", "UX enhancements", "Stability improvements"],
    tech: ["Flutter", "REST APIs"],
    architecture: "Flutter + REST APIs",
    playStore: "https://play.google.com/store/apps/details?id=com.gamistaan",
    appStore: "https://apps.apple.com/in/app/gamistaan/id1637438518",
  }
];

const filterCategories = ["All", "Flutter", "Firebase", "REST APIs", "GetX", "Riverpod", "Unity AR", "Offline First"];

const stats = [
  { icon: <Code2 />, value: "6+", label: "Production Projects" },
  { icon: <Globe />, value: "2+", label: "Years Experience" },
  { icon: <Smartphone />, value: "2", label: "Platforms (iOS & Android)" },
  { icon: <Layers />, value: "6+", label: "Industry Domains" },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProject, setSelectedProject] = useState<typeof projectsData[0] | null>(null);

  const filteredProjects = projectsData.filter((project) => {
    const matchesFilter = activeFilter === "All" || project.tech.includes(activeFilter);
    const matchesSearch = project.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          project.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <section id="projects" className="py-24 relative bg-black">
      <div className="container mx-auto px-6 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured <span className="text-gradient">Projects</span></h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full mb-12"></div>
          
          {/* Animated Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16">
            {stats.map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass p-6 rounded-2xl flex flex-col items-center justify-center border border-white/5 hover:border-purple-500/30 transition-all duration-300"
              >
                <div className="text-purple-400 mb-3">{stat.icon}</div>
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-gray-400 text-center">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Filters and Search */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
          <div className="flex flex-wrap gap-2 justify-center md:justify-start">
            {filterCategories.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === filter 
                    ? "bg-purple-600 text-white shadow-[0_0_15px_rgba(168,85,247,0.4)]" 
                    : "glass text-gray-400 hover:text-white hover:bg-white/10"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-64 shrink-0">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <input 
              type="text" 
              placeholder="Search projects..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-full focus:outline-none focus:border-purple-500 text-white transition-colors"
            />
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
                className="glass rounded-2xl overflow-hidden border border-white/5 hover:border-purple-500/50 group cursor-pointer flex flex-col h-full"
                onClick={() => setSelectedProject(project)}
              >
                {/* Hero Image Placeholder - using CSS gradient to simulate lazy loading/skeleton */}
                <div className="h-48 w-full relative overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 group-hover:scale-105 transition-transform duration-500">
                  <div className="absolute inset-0 flex items-center justify-center text-gray-600 font-bold text-2xl tracking-widest opacity-20 group-hover:opacity-40 transition-opacity">
                    {project.name.toUpperCase()}
                  </div>
                  {/* Subtle overlay */}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-white mb-2">{project.name}</h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2 flex-grow">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.slice(0, 3).map((tech, i) => (
                      <span key={i} className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded border border-purple-500/20">
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-2 py-1 bg-white/5 text-gray-400 text-xs rounded border border-white/10">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="mt-auto">
                    <button className="w-full py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white text-sm font-semibold transition-colors border border-white/10 flex justify-center items-center gap-2">
                      Learn More
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20 text-gray-500">
            No projects found matching your criteria.
          </div>
        )}
      </div>

      {/* Modal Popup */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-gray-900 border border-white/10 p-1 rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-hidden flex flex-col shadow-2xl shadow-purple-500/20"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="overflow-y-auto p-6 md:p-8 custom-scrollbar">
                <div className="flex justify-between items-start mb-6">
                  <h2 className="text-3xl font-bold text-white">{selectedProject.name}</h2>
                  <button 
                    onClick={() => setSelectedProject(null)}
                    className="p-2 bg-white/5 hover:bg-white/10 rounded-full transition-colors text-gray-400 hover:text-white"
                  >
                    <X size={20} />
                  </button>
                </div>

                <div className="h-64 w-full rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 mb-8 flex items-center justify-center border border-white/5">
                    <span className="text-gray-600 font-bold text-3xl tracking-widest opacity-20">
                      {selectedProject.name.toUpperCase()}
                    </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="md:col-span-2 space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Overview</h3>
                      <p className="text-gray-300 leading-relaxed">{selectedProject.description}</p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-3">Key Features</h3>
                      <ul className="space-y-2">
                        {selectedProject.features.map((feature, i) => (
                          <li key={i} className="flex items-start text-gray-300">
                            <span className="text-purple-500 mr-2 mt-1 shrink-0">✦</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-3">Technologies</h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.tech.map((tech, i) => (
                          <span key={i} className="px-3 py-1 bg-purple-500/10 text-purple-300 text-sm rounded-full border border-purple-500/20">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Architecture</h3>
                      <div className="px-4 py-3 bg-white/5 rounded-xl border border-white/5 text-gray-300 text-sm">
                        {selectedProject.architecture}
                      </div>
                    </div>

                    {(selectedProject.playStore || selectedProject.appStore) && (
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-3">Available On</h3>
                        <div className="space-y-3">
                          {selectedProject.playStore && (
                            <a 
                              href={selectedProject.playStore} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="flex items-center justify-center gap-2 w-full py-3 bg-gray-800 hover:bg-gray-700 rounded-xl text-white font-medium transition-colors border border-white/5 hover:border-white/20"
                            >
                              <FaGooglePlay className="text-[#3bccff]" />
                              Google Play
                            </a>
                          )}
                          {selectedProject.appStore && (
                            <a 
                              href={selectedProject.appStore} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="flex items-center justify-center gap-2 w-full py-3 bg-gray-800 hover:bg-gray-700 rounded-xl text-white font-medium transition-colors border border-white/5 hover:border-white/20"
                            >
                              <FaApple className="text-white" />
                              App Store
                            </a>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
