import React from "react";
import Featured from "../../components/Featured/Featured";
import Hero from "../../components/hero/Hero";
import Reviews from "../../components/reviews/Reviews";
import Store from "../../components/store/Store";
import Combo from "../../components/combo/Combo";

function Home() {
  return (
    <>
      <Hero />
      <Featured />
      <Store />
      <Combo />
      <Reviews />
    </>
  );
}

export default Home;
