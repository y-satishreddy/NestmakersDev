import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import BirdsInParadise from "./pages/BirdsInParadise";
import NatureNest from "./pages/NatureNest";
import Contact from "./pages/Contact";
import Career from "./pages/Careers";
import ScrollTopButton from "./components/ScrollToTopButton";
import CallIcon from "./components/CallButton";
import ScrollToTopOnRouteChange from "./components/ScrollToTopPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
function App() {
  return (
    <>
 
    <ScrollTopButton/>
    <CallIcon/>
    
    <BrowserRouter>
    <Navbar/>
       <ScrollToTopOnRouteChange/>
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />}></Route>
          <Route
            path="/projects/birds-in-paradise"
            element={<BirdsInParadise />}
          ></Route>
          <Route path="/projects/nature-nest" element={<NatureNest />}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/careers" element={<Career/>}></Route>
        </Route>
      </Routes> <Footer/>
    </BrowserRouter>
   </>

  );
}

export default App;
