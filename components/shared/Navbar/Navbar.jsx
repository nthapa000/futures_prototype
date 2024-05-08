"use client";

import Link from "next/link";
import LogoImage from "../LogoImage/LogoImage";
import Image from "next/image";
import { useState } from "react";
import MobileDropdown from "../MobileDropdown/MobileDropdown"

const Navbar = () => {
  const [isClick, setIsClick] = useState(false);
  const toggleNavbar = () => {
    setIsClick(!isClick);
  };

  return (
    <nav className="border-b border-slate-100">
      <div className="lg:max-w-7xl m-4 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <LogoImage />
          <div className="hidden md:block ">
            <div className="ml-4 flex items-center space-x-10">
              <Link
                href="https://www.avantifellows.org/"
                className="pr-4 hover:text-[#067a91] text-gray-600 lg:text-lg md:text-md"
              >
                Home
              </Link>
              <Link
                href="/scholarship"
                className="pr-4 hover:text-[#067a91] text-gray-600 lg:text-lg md:text-md"
              >
                Scholarship
              </Link>
              <Link
                href="/collegePredictor"
                className="pr-4 hover:text-[#067a91] text-gray-600 lg:text-lg md:text-md"
              >
                College Predictor
              </Link>
            </div>
          </div>
          <div className="flex flex-column items-center">
            {/* Will give here Link to HINDI Website */}
            <Link href="/" className="p-4">
              <Image src={"/global.svg"} width={30} height={20} alt="IWF" />
            </Link>
            <div className="md:hidden">
              <button
                className="inline-flex items-center justify-center p-2 rounded-md"
                onClick={toggleNavbar}
              >
                {isClick ? (
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
      {isClick && <MobileDropdown />}
    </nav>
  );
};

export default Navbar;
