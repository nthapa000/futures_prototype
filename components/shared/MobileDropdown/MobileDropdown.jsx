import Link from "next/link";
import React from "react";

const MobileDropdown = () => {
  return (
    <div className="md:hidden">
      <div className="px-6 pt-2 pb-3 space-y-1 sm:px-8">
        <Link
          href="https://www.avantifellows.org/"
          className="p-3  hover:bg-slate-100 text-gray-600 block text-lg"
        >
          Home
        </Link>
        <Link
          href="/scholarship"
          className="p-3 hover:bg-slate-100 text-gray-600 block text-lg"
        >
          Scholarship
        </Link>
        <Link
          href="/collegePredictor"
          className="p-3 hover:bg-slate-100 text-gray-600 block text-lg"
        >
          College Predictor
        </Link>
      </div>
    </div>
  );
};

export default MobileDropdown;
