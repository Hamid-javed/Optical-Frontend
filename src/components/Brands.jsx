import React from "react";

const BrandLogos = () => {
  return (
    <div className="bg-black py-6 px-6 md:px-12">
      <div className="flex flex-wrap justify-between items-center space-x-12">
        {/* Versace */}
        <span className="text-white text-2xl md:text-3xl font-serif font-bold tracking-widest md:mb-0">
          VERSACE
        </span>
        {/* Zara */}
        <span className="text-white text-2xl md:text-3xl font-sans italic tracking-wider  md:mb-0">
          ZARA
        </span>
        {/* Gucci */}
        <span className="text-white text-2xl md:text-3xl font-serif tracking-wide  md:mb-0">
          GUCCI
        </span>
        {/* Prada */}
        <span className="text-white text-2xl md:text-3xl font-bold uppercase tracking-tight  md:mb-0">
          PRADA
        </span>
        {/* Calvin Klein */}
        <span className="text-white text-2xl md:text-3xl font-light tracking-normal md:mb-0">
          Calvin Klein
        </span>
      </div>
    </div>
  );
};

export default BrandLogos;
