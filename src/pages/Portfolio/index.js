import React from "react";
import { Header } from "../../components/Header";
import { PortfolioItem } from "../../components/Portfolio";
export const Portfolio = () => {
  return (
    <>
      <Header />
      <main className="content-projects">
        <PortfolioItem />
      </main>
    </>
  );
};
