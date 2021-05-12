import React from "react";
import Avatar from "../../assets/img/avatar.svg";
import { Link } from "react-router-dom";
import { Header } from "../../components/Header";
export const Home = () => {
  return (
    <>
      <Header />
      <div className="content">
        <main className="home-content">
          <div class="custom-shape-divider-bottom-1620750232">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                class="shape-fill"
              ></path>
            </svg>
          </div>
          <section className="home-hero">
            <span>👏 Hey, welcome</span>
            <h1>
              This is my <span>portfolio</span> web site.
            </h1>
            <p className="contact">
              Feel free to contact me and get a quote
              <br />
            </p>
            <Link to="about">Contact</Link>
          </section>
          <img src={Avatar} alt="img" />
        </main>
      </div>
    </>
  );
};
