import React from "react";

interface PageTitleProps {
  text: string;
}

const PageTitle = ({ text }: PageTitleProps) => {
  return (
    <h2 className="text-6xl text-center px-20 py-5 my-8 rounded w-full text-slate-200  font-extralight text-italic bg-slate-800 shadow-lg shadow-slate-700">
      {text}
    </h2>
  );
};

export default PageTitle;
