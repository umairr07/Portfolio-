import "./Navbar.css";
import newLogo from "../../photos/latestlogo.png";
function Navbar() {
  return (
    <div className="flex justify-around p-5 items-center ">
      <div>
        {/* <img src={myLogo} alt="" className="w-[300px]" /> */}
        <img
          src={newLogo}
          alt=""
          className="lg:w-[300px] cursor-pointer sm:w-[200px] sm:mr-20"
        />
      </div>

      <div className="flex gap-10 sm:hidden">
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

      <label className="hamburger lg:hidden sm:block">
        <input type="checkbox" />
        <svg viewBox="0 0 32 32">
          <path
            className="line line-top-bottom"
            d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
          ></path>
          <path className="line" d="M7 16 27 16"></path>
        </svg>
      </label>
    </div>
  );
}

export default Navbar;
