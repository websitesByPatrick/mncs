import React from "react";

interface ListCardProps {
  title: string;
  items: Array<string>;
}

const ListCard = ({ title, items }: ListCardProps) => {
  return (
    <div className="w-1/2 h-96 px-20 py-5 border bg-yellow-50 rounded">
      <h2 className="text-3xl font-bold text-center px-20 py-5 border-b-2 mb-5">{title}</h2>
      <ul className="list-none mx-auto space-y-2">
        {items.map((item, index) => (
          <li key={index} className="mx-auto text-lg text-center">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListCard;
