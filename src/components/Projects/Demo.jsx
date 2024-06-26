import googledrive from "../../photos/googleDrive.png";
import { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";

const Demo = () => {
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

export default Demo;
