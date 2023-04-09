import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../Page Components/Hero/Hero";
import MidSection from "../Page Components/MidSection/MidSection";
import SliderSection from "../Page Components/SliderSection/SliderSection";
import Product from "../Page Components/Product/Product";
import Footer from "../Page Components/Footer/Footer";

const Home = () => {
  const links = ["Home", "tournament", "team", "gear", "about", "contact"];
  return (
    <div>
      <Navbar links={links} />
      <Hero />
      <MidSection />
      <SliderSection />
      <Product />
      <Footer />
    </div>
  );
};

export default Home;
