import React from "react";
import Image from "next/image";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="flex justify-between items-center w-full h-44 bg-slate-700 text-white">
      <div className="flex w-5/12 justify-center items-center">
        <Image
          src="/marica.jpg"
          alt="Logo"
          width={150}
          height={150}
          className="object-cover rounded-full shadow-slate-400 shadow-2xl"
        />

        <div className="flex flex-col justify-center items-center pl-5">
          <h1 className="text-4xl font-bold">Marica Nicholas</h1>
          <p className="text-lg">Counseling Services</p>
        </div>
      </div>

      <div className="justify-center items-center w-7/12">
        <Navbar />
      </div>
    </div>
  );
};

export default Header;
