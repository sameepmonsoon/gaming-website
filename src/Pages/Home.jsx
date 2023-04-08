import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";

const Home = () => {
  const links = ["Home", "tournament", "team", "gear", "about", "contact"];
  return (
    <div>
      <Navbar links={links} />
      <Hero />
    </div>
  );
};

export default Home;
