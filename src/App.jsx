import "@fontsource/poppins/"; // Defaults to weight 400
import Navbar from "./components/Navbar";
// import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projectss/Projects";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";

function App() {
  return (
    <div>
      <div>
        <Navbar />
        <About />
        {/* <AboutMe /> */}
        <Skills />
      </div>
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
