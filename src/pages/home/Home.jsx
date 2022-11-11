import React from "react";
import Featured from "../../components/Featured/Featured";
import Hero from "../../components/hero/Hero";
import Reviews from "../../components/reviews/Reviews";
import Combo from "../../components/pack/Pack";

function Home() {
  return (
    <>
      <Hero />
      <Featured />
      <Reviews />
      <Combo />
    </>
  );
}

export default Home;
