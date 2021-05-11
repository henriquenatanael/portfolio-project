import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

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
        </nav>
        <Link className="nav-link-right" to="/project">
          Project
        </Link>
      </div>
    </header>
  );
};