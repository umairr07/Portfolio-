import uLogo from "../../photos/new-u-logo.png";
import "./About.css";
import myResume from "../../assets/UmerShaikh.pdf";
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
          {/* <button className="cursor-pointer relative group overflow-hidden border-2 px-8 py-2 border-white">
            <span className="font-bold text-white text-xl relative z-10 group-hover:text-white duration-500">
              Download CV
            </span>
            <span className="absolute top-0 left-0 w-full bg-green-500 duration-500 group-hover:-translate-x-full h-full"></span>
            <span className="absolute top-0 left-0 w-full bg-green-500 duration-500 group-hover:translate-x-full h-full"></span>

            <span className="absolute top-0 left-0 w-full bg-green-500 duration-500 delay-300 group-hover:-translate-y-full h-full"></span>
            <span className="absolute delay-300 top-0 left-0 w-full bg-green-500 duration-500 group-hover:translate-y-full h-full"></span>
          </button> */}
          <motion.button
            variants={container(1)}
            initial="hidden"
            animate="visible"
            className="button"
            type="button"
            onClick={openResume}
          >
            <span className="button__text ">Download CV</span>
            <span className="button__icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 35 35"
                id="bdd05811-e15d-428c-bb53-8661459f9307"
                data-name="Layer 2"
                className="svg"
              >
                <path d="M17.5,22.131a1.249,1.249,0,0,1-1.25-1.25V2.187a1.25,1.25,0,0,1,2.5,0V20.881A1.25,1.25,0,0,1,17.5,22.131Z"></path>
                <path d="M17.5,22.693a3.189,3.189,0,0,1-2.262-.936L8.487,15.006a1.249,1.249,0,0,1,1.767-1.767l6.751,6.751a.7.7,0,0,0,.99,0l6.751-6.751a1.25,1.25,0,0,1,1.768,1.767l-6.752,6.751A3.191,3.191,0,0,1,17.5,22.693Z"></path>
                <path d="M31.436,34.063H3.564A3.318,3.318,0,0,1,.25,30.749V22.011a1.25,1.25,0,0,1,2.5,0v8.738a.815.815,0,0,0,.814.814H31.436a.815.815,0,0,0,.814-.814V22.011a1.25,1.25,0,1,1,2.5,0v8.738A3.318,3.318,0,0,1,31.436,34.063Z"></path>
              </svg>
            </span>
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
