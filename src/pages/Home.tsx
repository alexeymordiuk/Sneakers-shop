import React from "react";
import Header from "../components/Header";
import Search from "../components/Search";
import SneakersDate from "../components/sneakers/SneakersDate";

const Home: React.FC = () => {
  return (
    <>
        <Header />
        <Search />
        <SneakersDate />
    </>
  );
};

export default Home;
