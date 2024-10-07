import React from "react";
import IntroPage from "./IntroPage";
import Brands from "../components/Brands";
import Featured from "./Featured";
import Loader from "../components/General/Loader";
import SelectLense from "../components/SelectLense";

const mainPage = () => {
  return (
    <div>
      <IntroPage />
      <Brands />
      <Featured category="Men" />
      <Featured category="Women" />
      <Featured category="Children" />
      <Featured category="Sunglasses" />
      <SelectLense />
    </div>
  );
};

export default mainPage;
