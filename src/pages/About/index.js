import React from "react";
import { Header } from "../../components/Header";
import { PortfolioItem } from "../../components/Portfolio";

import Profile from "../../assets/henrique-natanael.jpg";

export const About = () => {
  return (
    <>
     <Header />
      <div className="content">
        <div className="profile">
          <img src={Profile} alt="profile" />
          <div className="about">
            <h1>Henrique Natanael</h1>
            <p>
              {" "}
              <span className="highlight">
                Hi everone, my name is Henrique{" "}
              </span>
              and I love coding and learn new stuffs, I made this web-site to
              start my journey as Developer. Below you can see my skills, which
              I am working on it, Fell free to contact me at
              <a className="highlight" href="mailto=henriquenatanael@gmail.com">
                {" "}
                by email
              </a>{" "}
              and I'll love to send you a quote.
            </p>

            <ul>
              <li>React</li>
              <li>Html</li>
              <li>Css</li>
              <li>Operations Manager at Rif Moving Company Vancouver</li>
              <li>
                Studies I.T. in mobile app and web development at CICCC -
                Cornerstone International Community College of Canada
              </li>
              <li>Lives in Vancouver, British Columbia</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="content project">
        <main className="content-projects-about">
          <PortfolioItem />
        </main>
      </div>
    </>
  );
};
