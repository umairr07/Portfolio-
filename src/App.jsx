import "@fontsource/poppins/"; // Defaults to weight 400
import Navbar from "./components/Navbar";
import About from "./components/About";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import GDriveClone from "./components/Projects/GDriveClone";
import Demo from "./components/Projects/Demo";
import PixTransformer from "./components/Projects/PixTransformer";
import Geekfoods from "./components/Projects/Geekfoods";
import ResumeAi from "./components/Projects/ResumeAi";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <div>
        <Navbar />
        <About />
        {/* <AboutMe /> */}
        <Skills />
      </div>
      <div>
        <h1 className="font-bold text-3xl text-center">PROJECTS</h1>
        <div className="flex">
          <GDriveClone />
          <PixTransformer />
          <Geekfoods />
        </div>
        <div className="flex">
          <ResumeAi />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
