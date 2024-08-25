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
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.5 }}
            className="absolute bg-[#191923] inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden rounded-xl"
          >
            <div className="divide-y-2 divide-gray-50 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pb-6 pt-5">
                <div>
                  <img
                    src={newLogo}
                    alt=""
                    className="lg:w-[300px] cursor-pointer sm:w-[180px] sm:mr-20 sm:mtmd"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="-mr-2 mt-5">
                    <button
                      type="button"
                      onClick={toggleMenu}
                      className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      <span className="sr-only">Close menu</span>
                      <X className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-4">
                    <a href="#aboutMe">
                      <button
                        className="cursor-pointer text-md"
                        id="nav-button"
                      >
                        About Me
                      </button>
                    </a>
                    <a href="#skills">
                      <button
                        className="cursor-pointer text-md"
                        id="nav-button"
                      >
                        Skills
                      </button>
                    </a>
                    <a href="#projects">
                      <button
                        className="cursor-pointer text-md"
                        id="nav-button"
                      >
                        Projects
                      </button>
                    </a>
                    <a href="#footer">
                      <button
                        className="cursor-pointer text-md"
                        id="nav-button"
                      >
                        Contact
                      </button>
                    </a>
                  </nav>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default NavbarComponent;
