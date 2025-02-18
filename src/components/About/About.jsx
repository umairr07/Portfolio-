import uLogo from "../../photos/new-u-logo.png";
import "./About.css";
import myResume from "../../assets/umerResume.pdf";
import { motion } from "framer-motion";

function About() {
  const openResume = () => {
    window.open(myResume, "_blank");
  };

  const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, delay: delay },
    },
  });

  return (
    <div
      className="lg:flex lg:flex-row lg:justify-center lg:items-center md:flex md:flex-row md:justify-center md:items-center md:gap-10 h-[90vh] sm:flex sm:flex-col-reverse sm:gap-0 sm:justify-center sm:items-center"
      id="about"
    >
      <div className="flex flex-col lg:gap-5 sm:gap-2">
        <motion.div
          variants={container(0)}
          initial="hidden"
          animate="visible"
          className="flex items-center gap-3"
        >
          <p className="text-[#fff] font-extrabold lg:text-5xl sm:text-2xl sm:ml-7">
            Hello! I'm{" "}
          </p>
          <p className="text-[#FFBD39] font-extrabold lg:text-5xl sm:text-2xl ">
            Umer Shaikh
          </p>
        </motion.div>

        <div>
          <motion.p
            variants={container(0.5)}
            initial="hidden"
            animate="visible"
            className="lg:text-3xl font-bold italic text-center sm:text-lg"
          >
            A Full Stack Developer
          </motion.p>
        </div>

        <div className="flex justify-center mt-5">
          <motion.button
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            onClick={openResume}
            className="cursor-pointer flex lg:text-xl  justify-between bg-gray-800 px-5 sm:py-2 lg:py-2 rounded-full text-white tracking-wider shadow-xl hover:bg-gray-900 hover:scale-105 duration-500 hover:ring-1 font-mono w-[150px]"
          >
            Resume
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-5 h-5 animate-bounce"
            >
              <path d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"></path>
            </svg>
          </motion.button>
        </div>
      </div>

      <div className="">
        <motion.img
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.3 }}
          src={uLogo}
          alt=""
          className="lg:w-[500px] sm:w-[300px]"
        />
      </div>
    </div>
  );
}

export default About;
