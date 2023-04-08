import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import MidSection from "../components/MidSection/MidSection";

const Home = () => {
  const links = ["Home", "tournament", "team", "gear", "about", "contact"];
  return (
    <div>
      <Navbar links={links} />
      <Hero />
      <MidSection />
    </div>
  );
};

export default Home;
