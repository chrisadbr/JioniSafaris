import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import AboutUs from "./Components/AboutUs/AboutUs";
import ClimbingAndTrek from "./Components/Climbing&Trek/ClimbingAndTrek";
import Contact from "./Components/Contact/Contact";
import Excursion from "./Components/Execursions/Excursion";
import Home from "./Components/Home/Home";
import Safari from "./Components/Safari/Safari";
import ScrollTopButton from "./Components/ScrollButton/ScrollTopButton";
import WhatsApp from "./Components/WhatsAppLink/WhatsApp";
import Zanzibar from "./Components/Zanzibar/Zanzibar";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/zanzibar" element={<Zanzibar />} />
          <Route path="/climbing-trek" element={<ClimbingAndTrek />} />
          <Route path="/safari" element={<Safari />} />
          <Route path="/excursions" element={<Excursion />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
      <ScrollTopButton />
      <WhatsApp />
    </div>
  );
}

export default App;
