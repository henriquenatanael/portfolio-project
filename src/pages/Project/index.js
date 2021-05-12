import React from "react";
import { Link } from "react-router-dom";
import { Header } from "../../components/Header";
export const Project = () => {
  return (
    <>
      <Header />
      <main className="content-projects">
        <h1>My Projects</h1>
        <div className="projects">
          <div className="project-item">
            <p className="title">Blog</p>
            <p className="description">
              <p>
                My <span className="highlight">Blog</span> is using state and
                localSotorage to save new posts. As result you can add a new
                post and then when you reload the page your post still show to
                you.
              </p>
            </p>
            <p className="link">
              <Link to="/blog">Visit</Link>
            </p>
          </div>
          <div className="project-item">
            <p className="title">Store</p>
            <p className="description">
              lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem
              ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem
              ipsumlorem ipsumlorem ipsumlorem ipsum
            </p>
            <p className="link">Link</p>
          </div>
          <div className="project-item">
            <p className="title">Finance</p>
            <p className="description">
              lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem
              ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem
              ipsumlorem ipsumlorem ipsumlorem ipsum
            </p>
            <p className="link">Link</p>
          </div>
          <div className="project-item">
            <p className="title">Burger Builder</p>
            <p className="description">
              lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem
              ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem
              ipsumlorem ipsumlorem ipsumlorem ipsum
            </p>
            <p className="link">Visit</p>
          </div>
          <div className="project-item">
            <p className="title">Shopping List</p>
            <p className="description">
              lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem
              ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem
              ipsumlorem ipsumlorem ipsumlorem ipsum
            </p>
            <p className="link">Visit</p>
          </div>
        </div>
      </main>
    </>
  );
};
