import React from "react";
import Filters from "../components/Filters";
import Header from "../components/Header";
import Search from "../components/Search";
import SneakersDate from "../components/sneakers/SneakersDate";
import { Between } from "../components/utils/SpaceBetween";

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Between>
        <Search />
        <Filters />
      </Between>
      <SneakersDate />
    </>
  );
};

export default Home;
