import React, { useEffect,useState } from "react";
import Layout from "./components/Layout";
import Landing from "./components/Anchors/Landing";
import About from "./components/Anchors/About";
import Experience from "./components/Anchors/Experience";
import Contact from "./components/Anchors/Contact";

const Home = () => {
  
  return (
    <Layout>
      <Landing />
      <About />
      <Experience />
      <Contact />
    </Layout>
  );
};

export default Home;
