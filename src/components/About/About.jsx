import uLogo from "../../photos/new-u-logo.png";
import "./About.css";

function About() {
  return (
    <div
      className="flex justify-center gap-8  items-center h-[90vh]"
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

        <div className="flex justify-center mt-5">
          {/* <button className="cursor-pointer relative group overflow-hidden border-2 px-8 py-2 border-white">
            <span className="font-bold text-white text-xl relative z-10 group-hover:text-white duration-500">
              Download CV
            </span>
            <span className="absolute top-0 left-0 w-full bg-green-500 duration-500 group-hover:-translate-x-full h-full"></span>
            <span className="absolute top-0 left-0 w-full bg-green-500 duration-500 group-hover:translate-x-full h-full"></span>

            <span className="absolute top-0 left-0 w-full bg-green-500 duration-500 delay-300 group-hover:-translate-y-full h-full"></span>
            <span className="absolute delay-300 top-0 left-0 w-full bg-green-500 duration-500 group-hover:translate-y-full h-full"></span>
          </button> */}
          <button className="button" type="button">
            <span className="button__text">Download CV</span>
            <span className="button__icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 35 35"
                id="bdd05811-e15d-428c-bb53-8661459f9307"
                data-name="Layer 2"
                className="svg"
              >
                <path d="M17.5,22.131a1.249,1.249,0,0,1-1.25-1.25V2.187a1.25,1.25,0,0,1,2.5,0V20.881A1.25,1.25,0,0,1,17.5,22.131Z"></path>
                <path d="M17.5,22.693a3.189,3.189,0,0,1-2.262-.936L8.487,15.006a1.249,1.249,0,0,1,1.767-1.767l6.751,6.751a.7.7,0,0,0,.99,0l6.751-6.751a1.25,1.25,0,0,1,1.768,1.767l-6.752,6.751A3.191,3.191,0,0,1,17.5,22.693Z"></path>
                <path d="M31.436,34.063H3.564A3.318,3.318,0,0,1,.25,30.749V22.011a1.25,1.25,0,0,1,2.5,0v8.738a.815.815,0,0,0,.814.814H31.436a.815.815,0,0,0,.814-.814V22.011a1.25,1.25,0,1,1,2.5,0v8.738A3.318,3.318,0,0,1,31.436,34.063Z"></path>
              </svg>
            </span>
          </button>
        </div>
      </div>
      <div className="">
        <img src={uLogo} alt="" />
      </div>
    </div>
  );
}

export default About;
