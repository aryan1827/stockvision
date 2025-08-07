import Hero from "./Hero.js";
import Awards from "./Awards.js";
import Stats from "./Stats.js";
import Pricing from "./Pricing.js";
import Education from "./Education.js";
import OpenAccount from "../OpenAccount.js";

function Homepage() {
  return (
    <>
      <Hero />
      <Awards />
      <Stats />
      <Pricing />
      <Education />
      <OpenAccount />
    </>
  );
}

export default Homepage;
