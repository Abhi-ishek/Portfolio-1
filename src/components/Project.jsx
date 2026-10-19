import React from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, FolderGit2 } from "lucide-react";
import { PROJECTS } from "../constants";
import ProjectCard from "./ProjectCard";

export default function Project() {
  // Focus on the key live projects requested
  const featuredProjects = PROJECTS.filter((p) => p.featured);

  return (
    <section id="projects" className="border-b border-neutral-900 pb-20 pt-10">
      {/* Section Header */}
      <div className="text-center">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -20 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-violet-300"
        >
          <Sparkles className="h-3.5 w-3.5 text-violet-400" />
          Featured Work & Client Deliverables
        </motion.div>

        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -30 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-4 text-center text-4xl font-extrabold tracking-tight text-white lg:text-5xl"
        >
          Featured <span className="bg-gradient-to-r from-violet-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">Projects</span>
        </motion.h2>

        <motion.p
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -20 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-4 max-w-2xl text-center text-sm leading-relaxed text-neutral-400 sm:text-base"
        >
          Production-grade web applications, commercial client platforms, and real-time distributed software solutions built with modern technology stacks.
        </motion.p>
      </div>

      {/* Projects List using proper .map() */}
      <div className="mt-14 max-w-6xl mx-auto px-4">
        {featuredProjects.map((project, index) => (
          <ProjectCard
            key={project.id || index}
            project={project}
            index={index}
            variant="detailed"
          />
        ))}
      </div>

      {/* Button to show all projects at other page */}
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 30 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mt-12 flex justify-center"
      >
        <Link
          to="/projects"
          className="group relative inline-flex items-center gap-3 overflow-hidden rounded-2xl border border-violet-500/40 bg-gradient-to-r from-violet-900/40 via-purple-900/30 to-indigo-900/40 px-8 py-4 text-base font-semibold text-white shadow-xl shadow-violet-950/50 backdrop-blur-md transition-all duration-300 hover:border-violet-400 hover:from-violet-800/60 hover:to-indigo-800/60 hover:shadow-2xl hover:shadow-violet-600/20"
        >
          <FolderGit2 className="h-5 w-5 text-violet-400 transition-transform duration-300 group-hover:scale-110" />
          <span>Explore All Projects Page ({PROJECTS.length})</span>
          <ArrowRight className="h-5 w-5 text-violet-400 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </motion.div>
    </section>
  );
}
