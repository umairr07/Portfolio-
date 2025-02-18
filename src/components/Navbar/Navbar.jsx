("use client");
import "./Navbar.css";
import newLogo from "../../photos/latestlogo.png";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

function NavbarComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="relative w-full">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        <div className="inline-flex items-center space-x-2 mt-5 ">
          <div>
            <img
              src={newLogo}
              alt=""
              className="lg:w-[300px] md:w-[250px] cursor-pointer sm:w-[200px] sm:mr-20"
            />
          </div>
        </div>
        <div className="hidden lg:flex md:flex gap-10 sm:hidden md:mt-5">
          <a href="#aboutMe">
            <button
              className="cursor-pointer lg:text-xl md:text-[16px]"
              id="nav-button"
            >
              About Me
            </button>
          </a>
          <a href="#skills">
            <button
              className="cursor-pointer lg:text-xl md:text-[16px]"
              id="nav-button"
            >
              Skills
            </button>
          </a>
          <a href="#projects">
            <button
              className="cursor-pointer lg:text-xl md:text-[16px]"
              id="nav-button"
            >
              Projects
            </button>
          </a>
          <a href="#footer">
            <button
              className="cursor-pointer lg:text-xl md:text-[16px]"
              id="nav-button"
            >
              Contact
            </button>
          </a>
        </div>

        <div className="lg:hidden md:hidden mt-5">
          <Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
        </div>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100vw" }} // Fully off-screen
            animate={{ opacity: 1, x: 0 }} // Slide in smoothly
            exit={{ opacity: 0, x: "100vw" }} // Slide out smoothly
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }} // Smooth cubic bezier
            className="fixed inset-0 bg-[#191923] z-50 transform transition lg:hidden w-full h-full"
          >
            <div className="flex flex-col justify-center items-center h-full">
              <div className="absolute top-5 flex justify-center items-center gap-12">
                <div>
                  <img
                    src={newLogo}
                    alt=""
                    className="lg:w-[300px] md:w-[250px] cursor-pointer sm:w-[200px] sm:mr-20"
                  />
                </div>
                <button
                  type="button"
                  onClick={toggleMenu}
                  className="text-gray-400 hover:bg-gray-100 hover:text-gray-500 p-2 rounded-md"
                >
                  <X className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <nav className="flex flex-col gap-5 text-center">
                {[
                  { href: "#aboutMe", label: "About Me" },
                  { href: "#skills", label: "Skills" },
                  { href: "#projects", label: "Projects" },
                  { href: "#footer", label: "Contact" },
                ].map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={toggleMenu} // Close menu on click
                    className="text-white text-xl font-medium cursor-pointer"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default NavbarComponent;
