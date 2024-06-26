import React from 'react';
import Camp from "../../components/Camp";
import Guide from "../../components/Guide";
import Hero from "../../components/Hero";
import Features from "../../components/Features";
import GetApp from "../../components/GetApp";


function Home() {
  return (
    <div>
      <Hero />
      <Camp />
      <Guide />
      <Features />
      <GetApp />
    </div>
  );
}

export default Home;
