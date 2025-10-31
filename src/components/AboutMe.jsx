import { motion } from "framer-motion";
import { Code, Monitor, Rocket } from "lucide-react";

const AboutMe = () => {
  return (
    <section className="flex flex-col items-center py-16 gap-10" id="aboutMe">
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl text-center"
      >
        <h2 className="text-4xl font-bold mb-6 ">
          About <span className="">Me</span>
        </h2>
        <p className="text-lg leading-relaxed mb-10">
          A passionate{" "}
          <span className="text-blue-500">Full Stack Developer </span>
          specializing in building responsive and user-friendly web
          applications. I enjoy turning complex problems into clean, intuitive
          interfaces using modern tools like React, Tailwind CSS, Node.js, and
          MongoDB.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 max-w-4xl">
        {/* Card 1 */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 1 }}
          className="bg-white/10 backdrop-blur-md shadow-md rounded-2xl p-6 text-center"
        >
          <Monitor size={40} className="mx-auto text-blue-500 mb-3" />
          <h3 className="font-semibold text-lg mb-2 ">Frontend Focused</h3>
          <p className=" text-sm">
            Crafting responsive, accessible, and modern UIs with React and
            Tailwind.
          </p>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 1.5 }}
          className="bg-white/10 backdrop-blur-md shadow-md rounded-2xl p-6 text-center"
        >
          <Code size={40} className="mx-auto text-blue-500 mb-3" />
          <h3 className="font-semibold text-lg mb-2 ">Full Stack Skills</h3>
          <p className=" text-sm">
            Comfortable with MERN stack — from API creation to deployment.
          </p>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 2 }}
          className="bg-white/10 backdrop-blur-md shadow-md rounded-2xl p-6 text-center"
        >
          <Rocket size={40} className="mx-auto text-blue-500 mb-3" />
          <h3 className="font-semibold text-lg mb-2 ">Always Growing</h3>
          <p className=" text-sm">
            Constantly learning new technologies and improving development
            practices.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
