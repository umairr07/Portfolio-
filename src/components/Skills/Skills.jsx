import { useState } from "react";
import skills from "./data";
import { motion } from "framer-motion";

const Skills = () => {
  const [data, setData] = useState(skills);
  return (
    <div className="py-16" id="skills">
      {/* heading */}
      <div>
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-10"
        >
          Skills
        </motion.h1>
      </div>

      {/* skills */}
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.8 }}
        className="  text-white flex flex-wrap justify-center items-center gap-6 lg:px-60"
      >
        {skills.map((skill) => (
          <div
            key={skill.id}
            className="flex flex-col justify-center items-center bg-zinc-900 hover:bg-zinc-800 transition-all duration-300 lg:w-60 lg:h-24 sm:w-40 sm:h-20 rounded-xl shadow-md"
          >
            <img src={skill.img} alt={skill.name} className="h-10 mb-2" />
            <h2 className="text-sm font-medium">{skill.name}</h2>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Skills;
