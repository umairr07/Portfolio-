// import { motion } from "framer-motion";

// const SquishyCard = () => {
//   return (
//     <section className=" px-4 py-12">
//       <div className="mx-auto w-fit">
//         <Card />
//       </div>
//     </section>
//   );
// };

// const Card = () => {
//   return (
//     <motion.div
//       whileHover="hover"
//       transition={{
//         duration: 1,
//         ease: "backInOut",
//       }}
//       variants={{
//         hover: {
//           scale: 1.05,
//         },
//       }}
//       className="relative h-96 w-80 shrink-0 overflow-hidden rounded-xl bg-indigo-500 p-8"
//     >
//       <div className="relative z-10 text-white">
//         <span className="mb-3 block w-fit rounded-full bg-white/30 px-3 py-0.5 text-sm font-light text-white">
//           Pro
//         </span>
//         <button className="absolute bottom-4 left-4 right-4 z-20 rounded border-2 border-white bg-white py-2 text-center font-mono font-black uppercase text-neutral-800 backdrop-blur transition-colors hover:bg-white/30 hover:text-white">
//           Get it now
//         </button>
//         <motion.span
//           initial={{ scale: 0.85 }}
//           variants={{
//             hover: {
//               scale: 1,
//             },
//           }}
//           transition={{
//             duration: 1,
//             ease: "backInOut",
//           }}
//           className="my-2 block origin-top-left font-mono text-6xl font-black leading-[1.2]"
//         >
//           $299/
//           <br />
//           Month
//         </motion.span>
//         <p>
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, rem.
//         </p>
//       </div>
//       <button className="absolute bottom-4 left-4 right-4 z-20 rounded border-2 border-white bg-white py-2 text-center font-mono font-black uppercase text-neutral-800 backdrop-blur transition-colors hover:bg-white/30 hover:text-white">
//         Get it now
//       </button>

//       <Background />
//     </motion.div>
//   );
// };

// const Background = () => {
//   return (
//     <motion.svg
//       width="320"
//       height="384"
//       viewBox="0 0 320 384"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//       className="absolute inset-0 z-0"
//       variants={{
//         hover: {
//           scale: 1.5,
//         },
//       }}
//       transition={{
//         duration: 1,
//         ease: "backInOut",
//       }}
//     >
//       <motion.circle
//         variants={{
//           hover: {
//             scaleY: 0.5,
//             y: -25,
//           },
//         }}
//         transition={{
//           duration: 1,
//           ease: "backInOut",
//           delay: 0.2,
//         }}
//         cx="160.5"
//         cy="114.5"
//         r="101.5"
//         fill="#262626"
//       />
//       <motion.ellipse
//         variants={{
//           hover: {
//             scaleY: 2.25,
//             y: -25,
//           },
//         }}
//         transition={{
//           duration: 1,
//           ease: "backInOut",
//           delay: 0.2,
//         }}
//         cx="160.5"
//         cy="265.5"
//         rx="101.5"
//         ry="43.5"
//         fill="#262626"
//       />
//     </motion.svg>
//   );
// };
import { FaLink } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import googledrive from "../photos/googleDrive.png";
import { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";

const SquishyCard = () => {
  return (
    <div className="grid w-full place-content-center  px-4 py-12 text-slate-900">
      <TiltCard />
    </div>
  );
};

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

const TiltCard = () => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e) => {
    if (!ref.current) return [0, 0];

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transform,
      }}
      className="relative   rounded-xl bg-gradient-to-br from-indigo-300 to-violet-300 w-[400px] h-[500px] shadow-lg"
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-4 ml-5 flex justify-center items-center rounded-xl bg-white shadow-lg w-[330px] h-[430px]"
      >
        <div></div>
        <div
          style={{
            transform: "translateZ(50px)",
          }}
          className="text-center text-2xl font-medium"
        >
          <p className="text-center text-2xl font-bold mb-6">Google Drive</p>
          <img src={googledrive} alt="" />
          <div className="flex justify-around">
            <div>
              <a href="">
                <span>Go Live</span>
              </a>
              {/* <FaLink /> */}
            </div>
            <div>
              <a href="">
                <span>Github</span>
              </a>
              {/* <FaGithub /> */}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// export default Example;

export default SquishyCard;
