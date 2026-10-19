import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaLinkedin, FaGithub, FaFilePdf } from "react-icons/fa";
import { ExternalLink } from "lucide-react";
import resume from "../assets/Ab.pdf";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const getHref = (hash) => {
    return isHomePage ? hash : `/${hash}`;
  };

  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/70 backdrop-blur-xl transition-all duration-300">
      <div className="mx-auto flex min-h-[76px] max-w-7xl items-center justify-between px-5 md:px-10">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-extrabold tracking-wide text-white transition-opacity hover:opacity-90"
        >
          Abhishek<span className="text-violet-500">.</span>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-7 md:flex">
          <a
            href={getHref("#home")}
            className="text-sm font-medium text-gray-300 transition-colors duration-200 hover:text-violet-400"
          >
            Home
          </a>
          <a
            href={getHref("#about")}
            className="text-sm font-medium text-gray-300 transition-colors duration-200 hover:text-violet-400"
          >
            About
          </a>
          <a
            href={getHref("#technologies")}
            className="text-sm font-medium text-gray-300 transition-colors duration-200 hover:text-violet-400"
          >
            Technologies
          </a>
          <a
            href={getHref("#experience")}
            className="text-sm font-medium text-gray-300 transition-colors duration-200 hover:text-violet-400"
          >
            Experience
          </a>
          <a
            href={getHref("#projects")}
            className="text-sm font-medium text-gray-300 transition-colors duration-200 hover:text-violet-400"
          >
            Projects
          </a>
          <Link
            to="/projects"
            className="inline-flex items-center gap-1.5 rounded-full border border-violet-500/40 bg-violet-600/20 px-3.5 py-1 text-xs font-semibold text-violet-300 transition-all duration-200 hover:border-violet-400 hover:bg-violet-600 hover:text-white"
          >
            <span>All Projects</span>
            <span className="rounded-full bg-violet-500/30 px-1.5 py-0.2 text-[10px] text-white">6</span>
          </Link>
        </div>

        {/* Social / Resume links (Desktop) */}
        <div className="hidden items-center gap-4 md:flex">
          <a
            href="https://www.linkedin.com/in/abhishek-prajapati-710a73218/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="text-neutral-400 transition-colors duration-200 hover:text-blue-400"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="https://github.com/Abhi-ishek"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="text-neutral-400 transition-colors duration-200 hover:text-white"
          >
            <FaGithub size={20} />
          </a>
          <a
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-xl border border-neutral-700 bg-neutral-900 px-3 py-1.5 text-xs font-medium text-neutral-200 transition hover:border-violet-500 hover:text-white"
          >
            <FaFilePdf className="text-red-400" />
            <span>Resume</span>
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-2xl text-white md:hidden"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile navigation */}
      {menuOpen && (
        <div className="flex flex-col gap-4 border-t border-white/10 bg-black/95 px-6 py-6 md:hidden">
          <a
            href={getHref("#home")}
            onClick={() => setMenuOpen(false)}
            className="text-gray-200 transition hover:text-violet-400"
          >
            Home
          </a>
          <a
            href={getHref("#about")}
            onClick={() => setMenuOpen(false)}
            className="text-gray-200 transition hover:text-violet-400"
          >
            About
          </a>
          <a
            href={getHref("#technologies")}
            onClick={() => setMenuOpen(false)}
            className="text-gray-200 transition hover:text-violet-400"
          >
            Technologies
          </a>
          <a
            href={getHref("#experience")}
            onClick={() => setMenuOpen(false)}
            className="text-gray-200 transition hover:text-violet-400"
          >
            Experience
          </a>
          <a
            href={getHref("#projects")}
            onClick={() => setMenuOpen(false)}
            className="text-gray-200 transition hover:text-violet-400"
          >
            Projects
          </a>
          <Link
            to="/projects"
            onClick={() => setMenuOpen(false)}
            className="inline-flex w-fit items-center gap-2 rounded-xl bg-violet-600 px-4 py-2 text-sm font-semibold text-white"
          >
            All Projects (6)
          </Link>
          <div className="flex items-center gap-4 pt-4 border-t border-neutral-800">
            <a
              href="https://www.linkedin.com/in/abhishek-prajapati-710a73218/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-white"
            >
              <FaLinkedin size={22} />
            </a>
            <a
              href="https://github.com/Abhi-ishek"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-white"
            >
              <FaGithub size={22} />
            </a>
            <a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-neutral-300 border border-neutral-700 px-3 py-1 rounded"
            >
              Resume PDF
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}