import React from "react";
import Info from "../../components/info";
import { FaDownload } from "react-icons/fa";
import CV from "../../assets/abuSiddiqreact.pdf";
import "../about/about.css";
import Status from "../../components/status";
const About = () => {
  return (
    <main className="section container">
      <section className="about">
        <h2 className="section__title ">
          About <span>Me</span>
        </h2>
        <div className="about__container grid">
          <div className="about__info">
            <h3 className="section__subtitle">Personal Info</h3>
            <ul className="info__list grid">
              <Info />
              <Status />
            </ul>
            <a href={CV} className="button" target="_blank">
              Download Cv
              <span className="button__icon">
                <FaDownload />
              </span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};
export default About;
