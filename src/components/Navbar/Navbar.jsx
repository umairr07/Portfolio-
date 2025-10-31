("use client");
import "./Navbar.css";
// import { useState } from "react";
// import { Menu, X } from "lucide-react";
// import { motion } from "framer-motion";

const links = [
  {
    name: "About Me",
    id: "aboutMe",
  },
  {
    name: "Skills",
    id: "skills",
  },
  {
    name: "Projects",
    id: "projects",
  },
  {
    name: "Contact",
    id: "contact",
  },
];

function NavbarComponent() {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);

  // const toggleMenu = () => {
  //   setIsMenuOpen(!isMenuOpen);
  // };

  return (
    <div className="relative w-full">
      <div className="mx-auto bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl flex max-w-7xl items-center justify-between px-20 py-5 mt-10">
        <div className="inline-flex items-center space-x-2 mt-5 ">
          <div>
            <p
              className="lg:text-xl font-bold cursor-pointer md:text-[16px]"
              id="about"
            >
              4U
            </p>
          </div>
        </div>
        <div className="hidden lg:flex md:flex gap-10 sm:hidden md:mt-5">
          {links.map((item, id) => {
            return (
              <a href={`#${item.id}`} key={id}>
                <button
                  className="cursor-pointer lg:text-lg md:text-[16px]"
                  id={item.name}
                >
                  {item.name}
                </button>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default NavbarComponent;
