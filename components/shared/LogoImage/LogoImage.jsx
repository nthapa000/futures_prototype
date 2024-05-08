import Image from "next/image";
import React from "react";

const LogoImage = () => {
  return (
    <div className="flex items-center">
      <div className="flex-shrink-0">
        <a href="/">
          <Image src={"/AvantiLogo.jpg"} width={128} height={40} alt="Avanti" />
        </a>
      </div>
    </div>
  );
};

export default LogoImage;
