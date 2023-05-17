import NavBar from "../../components/NavBar/NavBar";
import SideArt from "../../components/SideArt/SideArt";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Home from "../Home/Home";
import Projects from "../Projects/Projects";
import Footer from "../../components/Footer/Footer";

function PageRoutes() {
  return (
    <>
      <NavBar />
      <SideArt />
      <div className="view-container">
        <Home />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default PageRoutes;
