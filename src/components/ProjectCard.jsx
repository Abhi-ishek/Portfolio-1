import React from "react";
import { motion } from "motion/react";
import { ExternalLink, Globe, Sparkles } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export default function ProjectCard({ project, index, variant = "detailed" }) {
  const isEven = index % 2 === 0;

  if (variant === "grid") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900/60 p-6 backdrop-blur-md transition-all duration-300 hover:border-violet-500/50 hover:bg-neutral-900/90 hover:shadow-2xl hover:shadow-violet-500/10"
      >
        {/* Glow accent */}
        <div className="pointer-events-none absolute -right-20 -top-20 h-44 w-44 rounded-full bg-violet-600/10 blur-3xl transition-opacity duration-300 group-hover:bg-violet-600/20" />

        <div>
          {/* Image & overlay */}
          <div className="relative mb-5 aspect-video w-full overflow-hidden rounded-xl border border-neutral-800 bg-neutral-950">
            <img
              src={project.image}
              alt={project.title}
              className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            {project.badge && (
              <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-950/80 px-2.5 py-1 text-xs font-medium text-emerald-400 backdrop-blur-md">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                {project.badge}
              </span>
            )}
            {project.category && (
              <span className="absolute right-3 top-3 rounded-full border border-neutral-700/60 bg-neutral-900/80 px-2.5 py-1 text-xs font-medium text-neutral-300 backdrop-blur-md">
                {project.category}
              </span>
            )}
          </div>

          {/* Title & Tagline */}
          <div className="mb-3">
            <h3 className="text-xl font-bold text-white transition-colors group-hover:text-violet-400">
              {project.title}
            </h3>
            {project.tagline && (
              <p className="mt-1 text-xs font-medium text-violet-400/90">
                {project.tagline}
              </p>
            )}
          </div>

          {/* Description */}
          <p className="mb-5 text-sm leading-relaxed text-neutral-400 line-clamp-4">
            {project.description}
          </p>
        </div>

        <div>
          {/* Tech stack badges */}
          <div className="mb-6 flex flex-wrap gap-1.5">
            {project.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="rounded-md border border-neutral-800 bg-neutral-950/80 px-2.5 py-1 text-xs font-medium text-violet-300 transition-colors group-hover:border-violet-500/30"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Links */}
          <div className="flex items-center gap-3 border-t border-neutral-800/80 pt-4">
            {project.liveLink && project.liveLink !== "#" ? (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-4 py-2.5 text-xs font-semibold text-white shadow-lg shadow-violet-600/20 transition-all duration-300 hover:from-violet-500 hover:to-indigo-500 hover:shadow-violet-600/30"
              >
                <Globe className="h-4 w-4" />
                <span>Live Preview</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            ) : (
              <span className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-neutral-800 bg-neutral-950/50 px-4 py-2.5 text-xs font-medium text-neutral-500">
                Code Demo
              </span>
            )}

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl border border-neutral-800 bg-neutral-950 px-3 py-2.5 text-neutral-400 transition-colors hover:border-neutral-700 hover:text-white"
                title="View GitHub Profile / Repository"
              >
                <FaGithub className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>
      </motion.div>
    );
  }

  // Detailed Horizontal Card (for Featured / Home section)
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      className="group relative mb-14 overflow-hidden rounded-3xl border border-neutral-800/80 bg-gradient-to-b from-neutral-900/60 to-neutral-950/80 p-6 backdrop-blur-xl transition-all duration-300 hover:border-violet-500/40 hover:shadow-2xl hover:shadow-violet-500/10 lg:p-8"
    >
      {/* Decorative ambient radial background */}
      <div className="pointer-events-none absolute -top-24 right-0 h-96 w-96 rounded-full bg-violet-600/5 blur-3xl transition-opacity group-hover:bg-violet-600/10" />

      <div
        className={`flex flex-col gap-8 lg:items-center ${
          isEven ? "lg:flex-row" : "lg:flex-row-reverse"
        }`}
      >
        {/* Project Visual / Image */}
        <div className="relative w-full lg:w-5/12">
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950 shadow-xl">
            <img
              src={project.image}
              alt={project.title}
              className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
              loading="lazy"
            />
            {/* Live badge overlay */}
            <div className="absolute left-3 top-3 flex items-center gap-2">
              {project.badge && (
                <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-950/80 px-3 py-1 text-xs font-semibold text-emerald-400 backdrop-blur-md">
                  <span className="h-2 w-2 animate-ping rounded-full bg-emerald-400" />
                  {project.badge}
                </span>
              )}
            </div>

            {/* Quick Visit overlay on hover */}
            {project.liveLink && project.liveLink !== "#" && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 backdrop-blur-xs transition-opacity duration-300 group-hover:opacity-100"
                aria-label={`Open ${project.title} website in new tab`}
              >
                <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-md transition-transform duration-200 hover:scale-105">
                  <Globe className="h-4 w-4" />
                  Visit Live Site
                  <ExternalLink className="h-3.5 w-3.5" />
                </span>
              </a>
            )}
          </div>
        </div>

        {/* Project Content / Description */}
        <div className="flex w-full flex-col justify-center lg:w-7/12">
          <div className="flex flex-wrap items-center gap-2.5">
            {project.category && (
              <span className="inline-flex items-center gap-1 rounded-full border border-violet-500/30 bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-300">
                <Sparkles className="h-3 w-3" />
                {project.category}
              </span>
            )}
          </div>

          <h3 className="mt-3 text-2xl font-bold tracking-tight text-white lg:text-3xl">
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-violet-400"
            >
              {project.title}
            </a>
          </h3>

          {project.tagline && (
            <p className="mt-1 text-sm font-medium text-neutral-400">
              {project.tagline}
            </p>
          )}

          <p className="mt-4 leading-relaxed text-neutral-300 text-sm lg:text-base">
            {project.description}
          </p>

          {/* Tech tags */}
          <div className="mt-5 flex flex-wrap gap-2">
            {project.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="rounded-lg border border-neutral-800 bg-neutral-900/90 px-3 py-1 text-xs font-medium text-violet-300/90 shadow-xs"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="mt-6 flex flex-wrap items-center gap-4">
            {project.liveLink && project.liveLink !== "#" && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-violet-600/25 transition-all duration-300 hover:from-violet-500 hover:to-indigo-500 hover:shadow-violet-600/40"
              >
                <Globe className="h-4 w-4" />
                <span>Visit Live Website</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            )}

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-neutral-800 bg-neutral-900 px-4 py-2.5 text-sm font-medium text-neutral-300 transition-colors hover:border-neutral-700 hover:bg-neutral-800 hover:text-white"
              >
                <FaGithub className="h-4 w-4" />
                <span>GitHub</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
