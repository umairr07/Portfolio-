import "./Navbar.css";
import newLogo from "../../photos/latestlogo.png";
function Navbar() {
  return (
    <div className="flex justify-around p-5 items-center border-2">
      <div>
        {/* <img src={myLogo} alt="" className="w-[300px]" /> */}
        <img src={newLogo} alt="" className="w-[300px] cursor-pointer" />
      </div>

      <div className="flex gap-10">
        <a href="#aboutMe">
          <button className="cursor-pointer text-xl" id="nav-button">
            About Me
          </button>
        </a>
        <a href="#skills">
          <button className="cursor-pointer text-xl" id="nav-button">
            Skills
          </button>
        </a>
        <a href="#projects">
          <button className="cursor-pointer text-xl" id="nav-button">
            Projects
          </button>
        </a>
        <a href="#footer">
          <button className="cursor-pointer text-xl" id="nav-button">
            Contact
          </button>
        </a>
      </div>
    </div>
  );
}

export default Navbar;
