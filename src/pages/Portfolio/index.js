import React from "react";
import { Link } from "react-router-dom";
import { Header } from "../../components/Header";
export const Portfolio = () => {
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
            <p className="title">GitHub Explorer</p>
            <p className="description">
              This project just grab the repositories from Gibhub.com
              You just need chose a username and press the button
            </p>
            <p className="link"><Link to="/github-finder">Visit</Link></p>
          </div>
          <div className="project-item">
            <p className="title">Burger Builder</p>
            <p className="description">
              Burger Builder is a project which you can build your own Burger
              and send to someone else. 
              Super easy to use.
              You Must try it! I use some new components to test it and error controls
              to ensure the app will not be broken
            </p>
            <p className="link"><Link to="/burger-king">Visit</Link></p>
          </div>
          <div className="project-item">
            <p className="title">Shopping List</p>
            <p className="description">
              Shopping List is a the simplest way to save your shopping list.
              You only need add your grocery items and you can order by column.
              It was a very nice to print or send to you phone and it stay save if you
              reload the page
            </p>
            <p className="link">
              <Link to="/shopping-list">Visit</Link>
            </p>
          </div>
        </div>
      </main>
    </>
  );
};
