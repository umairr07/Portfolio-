import profileUrl from "../photos/developer-image.webp";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";
function AboutMe() {
  return (
    <div className="h-[90vh] mt-20" id="aboutMe">
      <div>
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 1 }}
          className="font-bold lg:text-5xl sm:text-3xl text-center"
        >
          About Me?
        </motion.h1>
      </div>
      <div className="lg:flex lg:flex-row lg:gap-20 justify-center lg:mt-20 sm:flex sm:flex-col sm:justify-center sm:items-center sm:gap-1 sm:mt-8">
        <div>
          <motion.img
            whileInView={{ x: 0, opacity: 1 }}
            initial={{ x: -100, opacity: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            src={profileUrl}
            alt=""
            className="lg:w-[400px] lg:h-[300px] object-cover rounded-xl sm:w-[300px] sm:h-[200px]"
          />
        </div>

        <motion.div
          whileInView={{ x: 0, opacity: 1 }}
          initial={{ x: 100, opacity: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="lg:w-[550px] sm:w-[300px]">
            <h1 className="font-bold lg:text-3xl sm:text-xl text-[#FFBD39] mt-5">
              Hello!! Welcome
            </h1>
            <p className="lg:text-lg mt-5 ">
              Hi!! I'm Umair Shaikh, a passionate Frontend Developer from India.
              I love creating beautiful and responsive web interfaces using
              HTML, CSS, JavaScript, and React. Let's build something amazing
              together!
            </p>
          </div>
          <a href="#footer">
            <button className="relative px-6 py-2 rounded-md bg-black isolation-auto z-10 border-2 border-slate-200 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-white hover:text-black before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700 mt-5 ">
              Contact Me!
            </button>
          </a>

          {/* <div className="flex gap-5 mt-10 text-3xl ">
            <FaGithub className="cursor-pointer" />
            <CiLinkedin className="cursor-pointer" />
            <FaXTwitter className="cursor-pointer" />
          </div> */}
        </motion.div>
      </div>
    </div>
  );
}

export default AboutMe;
