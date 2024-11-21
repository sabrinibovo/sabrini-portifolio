import React from "react";
import "./index.css";
import Home from "./routes/Home";
import WhoAmI from "./routes/WhoAmI";
import Projects from "./routes/Projects";
import Technologies from "./routes/Technologies";
import Contact from "./routes/Contact";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/whoami" element={<WhoAmI />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/technologies" element={<Technologies />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
