import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects"
import BirdsInParadise from "./pages/BirdsInParadise";
import NatureNest from "./pages/NatureNest"
function App() {

  return (
   <BrowserRouter>
   <Routes>
    <Route>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About/>}/>
      <Route path="/projects" element={<Projects/>}></Route>
      <Route path="/projects/birds-in-the-paradise" element={<BirdsInParadise/>}></Route>
      <Route path="/projects/nature-nest" element={<NatureNest/>}></Route>
    </Route>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
