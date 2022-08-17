import React from "react";
import { Routes, Route } from "react-router-dom";
import ClassComponent from "../components/lifeCycle/ClassBased/ClassComponent";
import FunctionalComponent from "../components/lifeCycle/FunctionBased/FunctionalComponent";
import About from "../components/routingPractice/About";
import Contact from "../components/routingPractice/Contact";
import Help from "../components/routingPractice/Help";
import Home from "../components/routingPractice/Home";

function Routing() {
  return (
    <>
      <Routes>
        <Route path="classComponent" element={<ClassComponent />} />
        <Route path="functionalComponent" element={<FunctionalComponent />} />
        <Route path="/" element={<Home />} />
        <Route path="help" element={<Help />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default Routing;
