import { ImHtmlFive2 } from "react-icons/im";
import { SiCss3, SiTailwindcss } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { IoIosGitMerge } from "react-icons/io";
import { IoLogoJavascript, IoLogoReact, IoLogoFirebase } from "react-icons/io5";

// const icons = [
//   {
//     id: 1,
//     icon: <ImHtmlFive2 />,
//   },
//   {
//     id: 2,
//     icon: <SiCss3 />,
//   },
//   {
//     id: 3,
//     icon: <IoLogoJavascript />,
//   },
//   {
//     id: 4,
//     icon: <IoLogoReact />,
//   },
//   {
//     id: 5,
//     icon: <IoLogoFirebase />,
//   },
//   {
//     id: 6,
//     icon: <SiTailwindcss />,
//   },
//   {
//     id: 7,
//     icon: <FaJava />,
//   },
//   {
//     id: 8,
//     icon: <IoIosGitMerge />,
//   },
// ];
const HoverDevCards = () => {
  return (
    <div>
      <div className="p-10">
        <p className="text-xl font-semibold mb-2">Settings</p>
        <div className="p-2 grid gap-4 grid-cols-2 lg:grid-cols-4">
          <Card title="HTML" href="#" Icon={ImHtmlFive2} />
          <Card title="CSS" href="#" Icon={SiCss3} />
          <Card title="JavaScript" href="#" Icon={IoLogoJavascript} />
          <Card title="React" Icon={IoLogoReact} />
          <Card title="Tailwind" Icon={SiTailwindcss} />
          <Card title="Git" Icon={IoIosGitMerge} />
          <Card title="Java" Icon={FaJava} />
          <Card title="Firebase" Icon={IoLogoFirebase} />
        </div>
      </div>
    </div>
  );
};

const Card = ({ title, Icon }) => {
  return (
    <div className="w-full p-4 rounded border-[1px] border-slate-300 relative overflow-hidden group text-white">
      <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-600 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300" />

      <Icon className="absolute z-10 -top-12 -right-12 text-9xl text-slate-100 group-hover:text-violet-400 group-hover:rotate-12 transition-transform duration-300" />
      <Icon className="mb-2 text-2xl text-violet-600 group-hover:text-white transition-colors relative z-10 duration-300" />
      <h3 className="font-medium text-xl  group-hover:text-white relative z-10 duration-300">
        {title}
      </h3>
    </div>
  );
};

export default HoverDevCards;
