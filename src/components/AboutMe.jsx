import { profileUrl } from "../constants/url";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
function AboutMe() {
  return (
    <div className="h-[80vh]" id="aboutMe">
      <div>
        <h1 className="font-bold text-3xl text-center">About Me?</h1>
      </div>
      <div className="flex gap-20 justify-center mt-20">
        <div>
          <img src={profileUrl} alt="" className="w-[300px]" />
        </div>

        <div>
          <div className="w-[550px] ">
            <h1 className="font-bold text-3xl text-[#FFBD39] mt-5">
              Hello!! Welcome
            </h1>
            <p className="text-lg mt-5">
              Hi!! I'm Umair Shaikh, a passionate Frontend Developer from India.
              I love creating beautiful and responsive web interfaces using
              HTML, CSS, JavaScript, and React. Let's build something amazing
              together!
            </p>
          </div>
          <a href="#footer">
            <button className="relative px-6 py-2 rounded-md bg-black isolation-auto z-10 border-2 border-slate-200 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-white hover:text-black before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700 mt-5">
              Contact Me!
            </button>
          </a>

          {/* <div className="flex gap-5 mt-10 text-3xl ">
            <FaGithub className="cursor-pointer" />
            <CiLinkedin className="cursor-pointer" />
            <FaXTwitter className="cursor-pointer" />
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
