import React from "react";
import IntroPage from "./IntroPage";
import Brands from "../components/Brands";
import Featured from "./Featured";
import Loader from "../components/General/Loader";

const MainPage = () => {
  return (
    <div>
      <IntroPage />
      <Brands />
      <Featured category="Men" />
      <Featured category="Women" />
      <Featured category="Children" />
      <Featured category="Sunglasses" />
    </div>
  );
};

export default MainPage;
