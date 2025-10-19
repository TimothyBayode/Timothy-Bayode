import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  MenuIcon,
  XIcon,
  Github,
  Twitter,
  Instagram,
  Linkedin,
  ListTree,
} from "lucide-react";
const Layout = ({ children }: { children: React.ReactNode }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navLinks = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Services",
      path: "/services",
    },
    {
      name: "Projects",
      path: "/projects",
    },
    {
      name: "Contact",
      path: "/contact",
    },
    {
      name: "Reviews",
      path: "/reviews",
    },
    {
      name: "Playground",
      path: "/playground",
    },
  ];
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#1a1500] via-[#302600] to-[#1a1500]">
      {/* Header */}
      <header className="sticky top-0 z-50">
        <div className="backdrop-blur-md bg-black/30 border-b border-[#5E4900]/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <Link to="/" className="flex items-center space-x-2">
                <div className="h-10 w-10 rounded-full bg-[#5E4900] flex items-center justify-center">
                  <img
                    src="./icon.png"
                    alt="icon image"
                    className="w-full h-full rounded-full"
                  />
                </div>
                <span className="text-white font-bold text-xl">TIMOTHY</span>
              </Link>
              {/* Desktop Navigation */}
              <nav className="hidden md:flex space-x-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`px-3 py-2 text-sm font-medium rounded-md transition-all duration-1000 ease-in-out ${
                      isActive(link.path)
                        ? "text-white bg-[#5E4900]/80 shadow-lg shadow-[#5E4900]/20"
                        : "text-gray-300 hover:text-white hover:bg-[#5E4900]/30"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
              {/* Mobile menu button */}
              <div className="md:hidden">
                <button
                  type="button"
                  className="text-gray-300 hover:text-white"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                  {mobileMenuOpen ? (
                    <XIcon className="h-6 w-6" />
                  ) : (
                    <MenuIcon className="h-6 w-6" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden backdrop-blur-xl bg-black/50 border-b border-[#5E4900]/30">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    isActive(link.path)
                      ? "text-white bg-[#5E4900]/80"
                      : "text-gray-300 hover:text-white hover:bg-[#5E4900]/30"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>
      {/* Main content */}
      <main className="flex-grow">{children}</main>
      {/* Footer */}
      <footer className="backdrop-blur-md bg-black/30 border-t border-[#5E4900]/30 py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white font-bold text-lg mb-4">TIMOTHY</h3>
              <p className="text-gray-300 text-sm">
                Creating designs and seamless front-end experiences.
              </p>
              <div className="flex space-x-4 mt-4">
                <a
                  href="https://github.com/TimothyBayode"
                  target="_blank"
                  className="text-gray-400 hover:text-white"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="https://x.com/TimothyBayode"
                  target="_blank"
                  className="text-gray-400 hover:text-white"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a
                  href="https://instagram.com/timothybayode_"
                  target="_blank"
                  className="text-gray-400 hover:text-white"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="https://linkedin.com/in/timothy-bayode"
                  target="_blank"
                  className="text-gray-400 hover:text-white"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="https://timothy-bayode-links.vercel.app/"
                  target="_blank"
                  className="text-gray-400 hover:text-white"
                >
                  <ListTree className="h-5 w-5" />
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Pages</h3>
              <ul className="space-y-2">
                {navLinks
                  .filter((link) => link.name !== "Playground")
                  .map((link) => (
                    <li key={link.path}>
                      <Link
                        to={link.path}
                        className="text-gray-300 hover:text-white text-sm"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                <li>
                  <Link
                    to="/playground"
                    className="text-gray-300 hover:text-white text-sm flex items-center gap-1"
                  >
                    Code Playground
                    <span className="inline-block px-1.5 py-0.5 bg-[#5E4900]/20 text-[#9E7900] text-xs rounded-full">
                      New
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Contact</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>timothybayode76@gmail.com</li>
                <li>+234-902-952-2648</li>
                <li>Lagos, Nigeria</li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Newsletter</h3>
              <p className="text-gray-300 text-sm mb-2">
                Subscribe to get updates on promos, offers and tech updates.
              </p>
              <form
                action="https://formspree.io/f/xldwywqq"
                method="POST"
                className="flex"
              >
                <input
                  type="email"
                  placeholder="Your email"
                  name="Email-Address"
                  required
                  className="bg-black/30 backdrop-blur-sm text-white px-3 py-2 rounded-l-md border border-[#5E4900]/50 focus:outline-none focus:border-[#5E4900] flex-grow"
                />
                <button
                  type="submit"
                  className="bg-[#5E4900] hover:bg-[#6E5910] text-white px-3 py-2 rounded-r-md"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
          <div className="border-t border-[#5E4900]/30 mt-8 pt-4 text-center text-gray-400 text-sm">
            <p>© 2025 Timothy Bayode. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Layout;
