"use client";
import "./Navbar.css";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { name: "About Me", id: "aboutMe" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Contact", id: "contact" },
];

function NavbarComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="relative w-full sm:px-5">
      {/* Navbar main container */}
      <div className="mx-auto bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl flex max-w-7xl items-center justify-between px-6 lg:px-20 lg:py-6 sm:py-4 mt-6">
        {/* Logo */}
        <p className="text-xl font-bold cursor-pointer text-white">4U</p>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-10 text-white">
          {links.map((item, id) => (
            <a
              key={id}
              href={`#${item.id}`}
              className="hover:text-[#38bdf8] text-xl transition-colors duration-300"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden flex items-center">
          <a onClick={toggleMenu} className="text-white">
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </a>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-[80px] w-96 px-20 bg-white/10 backdrop-blur-md 
             border border-white/20 rounded-b-2xl z-50"
          >
            <div className="flex flex-col items-center space-y-5 py-6 text-white">
              {links.map((item, id) => (
                <a
                  key={id}
                  href={`#${item.id}`}
                  onClick={() => setIsMenuOpen(false)} // closes on click
                  className="hover:text-[#38bdf8] transition-colors duration-300"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default NavbarComponent;
