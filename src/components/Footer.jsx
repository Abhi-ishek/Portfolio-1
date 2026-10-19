import React from "react";
// import Facebook from "lucide-react";
// import Github from "lucide-react";
// import Instagram from "lucide-react";
// import Twitter from "lucide-react";
// import Mail from "lucide-react";
// import MapPin from "lucide-react";
// import Phone from "lucide-react";
// import {ArrowUpRight} from "lucide-react";
import { FaFacebook, FaGithub, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import {
  Mail,
  MapPin,
  Phone,
  ArrowUpRight,
} from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-slate-950 text-white">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div className="lg:col-span-1">
            <a
              href="#"
              className="text-2xl font-bold tracking-tight"
            >
              Abhi<span className="text-blue-500">shek</span>
            </a>

            <p className="mt-5 max-w-sm text-sm leading-6 text-slate-400">
              Discover ideas, stories, and insights from a community
              of passionate writers and curious minds.
            </p>

            {/* Social Links */}
            <div className="mt-6 flex gap-3">
              <a
                href="#"
                className="rounded-full border border-slate-800 p-2.5
                text-slate-400 transition-all duration-300
                hover:-translate-y-1 hover:border-blue-500
                hover:bg-blue-500 hover:text-white"
              >
                <FaFacebook size={18} />
              </a>

              <a
                href="#"
                className="rounded-full border border-slate-800 p-2.5
                text-slate-400 transition-all duration-300
                hover:-translate-y-1 hover:border-pink-500
                hover:bg-pink-500 hover:text-white"
              >
                <FaInstagram size={18} />
              </a>

              <a
                href="#"
                className="rounded-full border border-slate-800 p-2.5
                text-slate-400 transition-all duration-300
                hover:-translate-y-1 hover:border-sky-500
                hover:bg-sky-500 hover:text-white"
              >
                <FaTwitter size={18} />
              </a>

              <a
                href="#"
                className="rounded-full border border-slate-800 p-2.5
                text-slate-400 transition-all duration-300
                hover:-translate-y-1 hover:border-white
                hover:bg-white hover:text-slate-950"
              >
                <FaGithub size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Explore
            </h3>

            <ul className="mt-5 space-y-3">
              {["Home", "About Us", "Blog", "Categories", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="group flex items-center gap-1 text-sm
                      text-slate-400 transition-colors hover:text-white"
                    >
                      {item}
                      <ArrowUpRight
                        size={13}
                        className="opacity-0 transition-all
                        group-hover:translate-x-0.5
                        group-hover:-translate-y-0.5
                        group-hover:opacity-100"
                      />
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Categories
            </h3>

            <ul className="mt-5 space-y-3">
              {[
                "Technology",
                "Programming",
                "Artificial Intelligence",
                "Web Development",
                "Career",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm text-slate-400 transition-colors
                    hover:text-blue-400"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Get In Touch
            </h3>

            <div className="mt-5 space-y-4">

              <div className="flex items-start gap-3">
                <Mail
                  size={18}
                  className="mt-0.5 shrink-0 text-blue-500"
                />
                <a
                  href="mailto:hello@blogify.com"
                  className="text-sm text-slate-400 hover:text-white"
                >
                  hello@blogify.com
                </a>
              </div>

              <div className="flex items-start gap-3">
                <Phone
                  size={18}
                  className="mt-0.5 shrink-0 text-blue-500"
                />
                <span className="text-sm text-slate-400">
                  +91 98765 43210
                </span>
              </div>

              <div className="flex items-start gap-3">
                <MapPin
                  size={18}
                  className="mt-0.5 shrink-0 text-blue-500"
                />
                <span className="text-sm leading-6 text-slate-400">
                  New Delhi, India
                </span>
              </div>

            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-14 rounded-2xl border border-slate-800
          bg-slate-900/70 p-6 md:flex md:items-center
          md:justify-between md:p-8">

          <div>
            <h3 className="text-lg font-semibold">
              Stay in the loop
            </h3>

            <p className="mt-1 text-sm text-slate-400">
              Get the latest articles and updates delivered to your inbox.
            </p>
          </div>

          <form className="mt-5 flex w-full max-w-md gap-2 md:mt-0">
            <input
              type="email"
              placeholder="Enter your email"
              className="min-w-0 flex-1 rounded-lg border border-slate-700
              bg-slate-950 px-4 py-3 text-sm text-white
              outline-none placeholder:text-slate-500
              focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />

            <button
              type="submit"
              className="rounded-lg bg-blue-600 px-5 py-3 text-sm
              font-semibold transition-all duration-300
              hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/20"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="mx-auto flex max-w-7xl flex-col
          gap-4 px-6 py-6 text-sm text-slate-500
          sm:flex-row sm:items-center sm:justify-between lg:px-8">

          <p>
            © {new Date().getFullYear()} Blogify. All rights reserved.
          </p>

          <div className="flex gap-6">
            <a
              href="#"
              className="transition-colors hover:text-white"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="transition-colors hover:text-white"
            >
              Terms of Service
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;