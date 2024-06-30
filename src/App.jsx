import "@fontsource/poppins/"; // Defaults to weight 400
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projectss/Projects";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-[100%] bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>

      {/* Main content wrapper */}
      <div className="">
        <Navbar />
        <About />
        <AboutMe />
        <Skills />
        <Projects />
        <Footer />
      </div>
    </div>
  );
}

export default App;
