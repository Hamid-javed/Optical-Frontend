import React from "react";

function Loader() {
  return (
    <div className="fixed top-0 left-0 z-20 load w-full h-full flex justify-center items-center">
      {/* <div className="loader border-4 border-transparent  border-l-black rounded-full w-12 h-12 spinner"></div> */}
      <span className="loading loading-bars loading-lg"></span>
    </div>
  );
}

export default Loader;
