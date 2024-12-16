import Image from "next/image";
import headerPic from "../public/marica.jpg";

const Header = () => {
  return (
    <div className="header">
      <header className="h-[300px] flex justify-end items-center gap-6">
        <div className="text-center p-8 text-slate-300 bg-gradient-to-b from-slate-500 to-slate-700 rounded-md shadow shadow-slate-500">
          <p className="text-6xl">Marica Nicholas</p>
          <p className="text-3xl">Counseling Services</p>
        </div>
        <hr></hr>
      </header>
    </div>
  );
};

export default Header;
