import React from "react";
import CardImage from "./cardImage";
import CardText from "./cardText";

interface Props {
  textTxt: string[];
  image: string;
  alt: string;
  imgTitle: string;
  imgText: string;
  textTitle: string;
  imgRight?: boolean;
}

const Card = (props: Props) => {

  if (props.imgRight) {
    return (
      <section className="card">
        <CardText textTitle={props.textTitle} textTxt={props.textTxt} />
        <CardImage
          image={props.image}
          alt={props.alt}
          imgTitle={props.imgTitle}
          imgText={props.imgText}
        />
        
  
      </section> )
  }

  return (
    <section className="card">
      
      <CardImage
        image={props.image}
        alt={props.alt}
        imgTitle={props.imgTitle}
        imgText={props.imgText}
      />
      <CardText textTitle={props.textTitle} textTxt={props.textTxt} />

    </section>
  );
};

export default Card;
