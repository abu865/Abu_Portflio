import React from "react";
import Profile from "../../assets/home.jpg"
import "../home/home.css"
const Home = () => {
  return (
    <section className="home section grid">
      <img src={Profile} alt="" className="home__img" />

      <div className="home__content">
        <div className="home__data"></div>
        {/* <h1 className="home__title"> I'm AbuBacker Siddiq <span style={{color:"red"}}>Software Developer</span></h1> */}
        <div className="typography-container">
          <h1 className="home__title wave-text">
            I'm AbuBacker Siddiq
            <span style={{ color: "red" }}>Software Developer</span>
          </h1>
        </div>
        <p className="home__description">
          👋 Hello there ! AbuBacker Siddiq, a passionate frontend developer
          with a keen eye for crafting engaging and user-friendly web
          experiences. My journey into the world of web development began{" "}
          <span style={{ color: "red" }}>1.3 years</span> when I discovered the
          power of turning code into captivating visuals.
        </p>
      </div>

      <div className="color__block"></div>
    </section>
  );
};
export default Home;
