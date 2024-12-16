import React from "react";

interface Props  {
    textTitle: string;
    textTxt: string[];
}


const CardText = (props:Props) => {
  return (
    <div className="card-text">
      <p className="card-text-title">{props.textTitle}</p>

       <ul>
        {
            props.textTxt.map((listItem, index)  =>(
                <li className="text-list-item" key={index}>{listItem}</li>
            ))
        }
       </ul>
               
    </div>
  );
};

export default CardText;
