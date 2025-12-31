import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects"
function App() {

  return (
   <BrowserRouter>
   <Routes>
    <Route>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About/>}/>
      <Route path="/projects" element={<Projects/>}></Route>
    </Route>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
