import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";

export const Header = () => {
  return (
    <header className="header-container">
      <div className="header-content">
        <nav id="nav" className="nav-header">
          <Link className="nav-link" to="/">
            Home
          </Link>
          <Link className="nav-link-blog" to="/blog">
            Blog
          </Link>
          <Link className="nav-link-about" to="/about">
            About
          </Link>
        </nav>
        <Link className="nav-link-right" to="/portfolio">
          Portfolio
        </Link>
      </div>
    </header>
  );
};
