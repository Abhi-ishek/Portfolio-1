import React, { useState, useMemo, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowLeft,
  Search,
  Sparkles,
  Layers,
  Globe,
  Code2,
  CheckCircle2,
} from "lucide-react";
import { PROJECTS } from "../constants";
import ProjectCard from "../components/ProjectCard";
import Footer from "../components/Footer";

export default function ProjectsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Scroll to top on page mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // Extract unique categories
  const categories = useMemo(() => {
    const list = ["All"];
    PROJECTS.forEach((p) => {
      if (p.category && !list.includes(p.category)) {
        list.push(p.category);
      }
    });
    return list;
  }, []);

  // Filter projects based on search query and category
  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((project) => {
      const matchesCategory =
        selectedCategory === "All" || project.category === selectedCategory;

      const query = searchQuery.toLowerCase().trim();
      if (!query) return matchesCategory;

      const matchesSearch =
        project.title.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        (project.tagline && project.tagline.toLowerCase().includes(query)) ||
        project.technologies.some((tech) =>
          tech.toLowerCase().includes(query)
        );

      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-violet-500/30 selection:text-violet-200">
      {/* Background ambient gradient glow */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-violet-600/15 via-indigo-600/10 to-transparent blur-3xl" />
        <div className="absolute top-96 -left-48 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
        <div className="absolute top-96 -right-48 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
      </div>

      {/* Header Bar */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-black/80 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
          <Link
            to="/"
            className="group inline-flex items-center gap-2 rounded-xl border border-neutral-800 bg-neutral-900/80 px-4 py-2 text-sm font-medium text-neutral-300 transition-all duration-200 hover:border-violet-500/50 hover:bg-neutral-800 hover:text-white"
          >
            <ArrowLeft className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-1" />
            <span>Back to Home</span>
          </Link>

          <Link to="/" className="text-xl font-bold tracking-tight text-white">
            Abhishek<span className="text-violet-500">.</span>
          </Link>

          <a
            href="mailto:worktoabhishek@gmail.com"
            className="inline-flex items-center gap-2 rounded-xl bg-violet-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-violet-600/25 transition-all duration-200 hover:bg-violet-500"
          >
            Hire Me
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        {/* Hero Section */}
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-violet-300"
          >
            <Sparkles className="h-3.5 w-3.5 text-violet-400" />
            Comprehensive Portfolio Showcase
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-5 text-4xl font-extrabold tracking-tight sm:text-6xl"
          >
            All Work &{" "}
            <span className="bg-gradient-to-r from-violet-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
              Projects
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-4 max-w-2xl text-base text-neutral-400 sm:text-lg"
          >
            An in-depth showcase of full-stack web applications, commercial client
            systems, real-time distributed platforms, and responsive user experiences.
          </motion.p>
        </div>

        {/* Stats Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 grid grid-cols-2 gap-4 rounded-2xl border border-neutral-800 bg-neutral-900/50 p-6 backdrop-blur-md sm:grid-cols-4"
        >
          <div className="text-center border-r border-neutral-800 last:border-r-0">
            <p className="text-3xl font-extrabold text-violet-400">{PROJECTS.length}</p>
            <p className="mt-1 text-xs text-neutral-400">Total Projects</p>
          </div>
          <div className="text-center sm:border-r border-neutral-800 last:border-r-0">
            <p className="text-3xl font-extrabold text-emerald-400">4</p>
            <p className="mt-1 text-xs text-neutral-400">Live Client & Production Apps</p>
          </div>
          <div className="text-center border-r border-neutral-800 last:border-r-0">
            <p className="text-3xl font-extrabold text-pink-400">100%</p>
            <p className="mt-1 text-xs text-neutral-400">Responsive & Mobile Ready</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-extrabold text-indigo-400">Real-Time</p>
            <p className="mt-1 text-xs text-neutral-400">WebSockets & REST APIs</p>
          </div>
        </motion.div>

        {/* Search and Category Filter Controls */}
        <div className="mt-12 space-y-6">
          {/* Search bar */}
          <div className="relative mx-auto max-w-xl">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-neutral-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by project name, tech stack, or description..."
              className="w-full rounded-2xl border border-neutral-800 bg-neutral-900/80 py-3.5 pl-12 pr-4 text-sm text-white placeholder-neutral-500 shadow-inner outline-none transition-all duration-200 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-semibold text-neutral-400 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-full px-4 py-2 text-xs font-medium transition-all duration-200 ${
                  selectedCategory === cat
                    ? "bg-violet-600 text-white shadow-lg shadow-violet-600/30"
                    : "border border-neutral-800 bg-neutral-900/60 text-neutral-400 hover:border-neutral-700 hover:text-white"
                }`}
              >
                {cat}
                {cat === "All" && ` (${PROJECTS.length})`}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid using .map() */}
        <div className="mt-12">
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
              {filteredProjects.map((project, index) => (
                <ProjectCard
                  key={project.id || index}
                  project={project}
                  index={index}
                  variant="grid"
                />
              ))}
            </div>
          ) : (
            <div className="rounded-3xl border border-neutral-800 bg-neutral-900/40 p-12 text-center">
              <Layers className="mx-auto h-12 w-12 text-neutral-600" />
              <h3 className="mt-4 text-lg font-bold text-white">No projects found</h3>
              <p className="mt-2 text-sm text-neutral-400">
                No projects matched your search criteria: "{searchQuery}".
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All");
                }}
                className="mt-6 inline-flex items-center gap-2 rounded-xl bg-violet-600 px-4 py-2 text-xs font-semibold text-white transition hover:bg-violet-500"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>

        {/* Bottom Collaboration CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-24 rounded-3xl border border-violet-500/30 bg-gradient-to-r from-violet-950/40 via-neutral-900/90 to-indigo-950/40 p-8 text-center backdrop-blur-xl sm:p-12"
        >
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-4xl">
            Need a high-impact website or scalable web application?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-neutral-300 sm:text-base">
            I specialize in full-stack JavaScript architectures, modern React interfaces, real-time communications, and production-ready deployments.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="mailto:worktoabhishek@gmail.com"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-violet-600/30 transition-all duration-300 hover:from-violet-500 hover:to-indigo-500 hover:scale-105"
            >
              Get in Touch
            </a>
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-xl border border-neutral-700 bg-neutral-900/90 px-6 py-3.5 text-sm font-semibold text-neutral-300 transition-colors hover:border-neutral-500 hover:text-white"
            >
              Back to Portfolio
            </Link>
          </div>
        </motion.div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
