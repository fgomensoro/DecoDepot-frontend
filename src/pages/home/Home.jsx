import React from "react";
import Featured from "../../components/Featured/Featured";
import Footer from "../../components/footer/Footer";
import Hero from "../../components/hero/Hero";
import Navbar from "../../components/navbar/Navbar";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Featured />
      <Footer />
    </>
  );
}

export default Home;
