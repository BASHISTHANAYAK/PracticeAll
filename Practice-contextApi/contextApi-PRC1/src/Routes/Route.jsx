import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import About from "../components/about";
import Contact from "../components/contact";
const RouteComp = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<h1>Page not found Go to / page</h1>} />
      </Routes>
    </>
  );
};

export default RouteComp;
