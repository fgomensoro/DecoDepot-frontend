import React from "react";
import Featured from "../../components/Featured/Featured";
import Hero from "../../components/hero/Hero";
import Reviews from "../../components/reviews/Reviews";
import Store from "../../components/store/Store";

function Home() {
  return (
    <>
      <Hero />
      <Featured />
      <Store />
      <Reviews />
    </>
  );
}

export default Home;
