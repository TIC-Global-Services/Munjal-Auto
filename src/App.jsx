import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import About from "./components/About";
import Products from "./components/Products";
import Philo from "./components/Philo";
import Quality from "./components/Quality";
import Finance from "./components/Finance";
import Training from "./components/Training";
import Facilities from "./components/Facilities";
import Contact from "./components/Contact";
// import NotFound from "./components/NotFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/philosophy" element={<Philo />} />
        <Route path ="/quality"   element={<Quality/>} /> 
        <Route path ="/finance" element={<Finance/>} />
        <Route path ="/training" element={<Training/>} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/contact" element={<Contact />} />
      {/*   <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
