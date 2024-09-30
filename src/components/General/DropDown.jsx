import React from "react";
import { Link } from "react-router-dom";

function DropDown() {
  return (
    <div className="w-32 shadow-sm fixed top-10 flex flex-col bg-white pr-3 text-right">
      <Link>Men</Link>
      <Link>Women</Link>
      <Link>Childern</Link>
    </div>
  );
}

export default DropDown;
