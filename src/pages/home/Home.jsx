import React from "react";
import Featured from "../../components/Featured/Featured";
import Footer from "../../components/footer/Footer";
import Hero from "../../components/hero/Hero";
import Navbar from "../../components/navbar/Navbar";
import Reviews from "../../components/reviews/Reviews";
import Store from "../../components/store/Store";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Featured />
      <Store />
      <Reviews />
      <Footer />
    </>
  );
}

export default Home;
