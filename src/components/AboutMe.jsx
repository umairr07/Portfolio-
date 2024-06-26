import { profileUrl } from "../constants/url";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
function AboutMe() {
  return (
    <div>
      <div>
        <h1 className="font-bold text-3xl text-center">About Me?</h1>
      </div>
      <div className="flex gap-20 justify-center mt-20">
        <div>
          <img src={profileUrl} alt="" className="w-[300px]" />
        </div>

        <div>
          <div className="w-[550px] ">
            <p className="text-xl mt-14">
              Hi!! I'm Umair Shaikh, a passionate Frontend Developer from India.
              I love creating beautiful and responsive web interfaces using
              HTML, CSS, JavaScript, and React. Let's build something amazing
              together!
            </p>
          </div>

          <div className="flex gap-5 mt-10 text-3xl ">
            <FaGithub className="cursor-pointer" />
            <CiLinkedin className="cursor-pointer" />
            <FaXTwitter className="cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
