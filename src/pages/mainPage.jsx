import React from "react";
import IntroPage from "./IntroPage";
import Brands from "../components/Brands";
import Featured from "./Featured";
import SearchBar from "./SearchBar";

const MainPage = () => {
  return (
    <div>
      <IntroPage />
      <Brands />
      <Featured category="Men" />
      <Featured category="Women" />
      <Featured category="Children" />
      <Featured category="Sunglasses" />
      <SearchBar />
    </div>
  );
};

export default MainPage;
