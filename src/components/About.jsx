import { TypeAnimation } from "react-type-animation";
import uLogo from "../photos/new-u-logo.png";
// const About = () => {
//   return (
//     <TypeAnimation
//       sequence={[
//         // Same substring at the start will only be typed out once, initially
//         "We produce food for Mice",
//         1000, // wait 1s before replacing "Mice" with "Hamsters"
//         "We produce food for Hamsters",
//         1000,
//         "We produce food for Guinea Pigs",
//         1000,
//         "We produce food for Chinchillas",
//         1000,
//       ]}
//       wrapper="span"
//       speed={50}
//       style={{ fontSize: "2em", display: "inline-block" }}
//       repeat={Infinity}
//     />
//   );
// };

function About() {
  return (
    <div
      className="flex  justify-center gap-8  items-center h-[90vh]"
      id="about"
    >
      <div className="flex flex-col gap-5 ">
        <div className="flex items-center gap-3">
          <p className="text-[#fff] font-extrabold text-5xl">Hello! I'm </p>
          <p className="text-[#FFBD39] font-extrabold text-5xl">Umair Shaikh</p>
        </div>

        <div>
          <p className="text-3xl font-bold italic text-center">
            A Frontend Developer
          </p>
        </div>

        <div>
          <button className="cursor-pointer relative group overflow-hidden border-2 px-8 py-2 border-green-500">
            <span className="font-bold text-white text-xl relative z-10 group-hover:text-green-500 duration-500">
              Resume
            </span>
            <span className="absolute top-0 left-0 w-full bg-green-500 duration-500 group-hover:-translate-x-full h-full"></span>
            <span className="absolute top-0 left-0 w-full bg-green-500 duration-500 group-hover:translate-x-full h-full"></span>

            <span className="absolute top-0 left-0 w-full bg-green-500 duration-500 delay-300 group-hover:-translate-y-full h-full"></span>
            <span className="absolute delay-300 top-0 left-0 w-full bg-green-500 duration-500 group-hover:translate-y-full h-full"></span>
          </button>
          {/* <button className="cursor-pointer relative group overflow-hidden border-2 px-8 py-2 border-green-500">
            <span className="font-bold text-white text-xl relative z-10 group-hover:text-green-500 duration-500">
              Resume
            </span>
            <span className="absolute top-0 left-0 w-full bg-green-500 duration-500 group-hover:-translate-x-full h-full"></span>
            <span className="absolute top-0 left-0 w-full bg-green-500 duration-500 group-hover:translate-x-full h-full"></span>

            <span className="absolute top-0 left-0 w-full bg-green-500 duration-500 delay-300 group-hover:-translate-y-full h-full"></span>
            <span className="absolute delay-300 top-0 left-0 w-full bg-green-500 duration-500 group-hover:translate-y-full h-full"></span>
          </button> */}
        </div>
      </div>
      <div className="">
        <img src={uLogo} alt="" />
      </div>
    </div>
  );
}

export default About;
