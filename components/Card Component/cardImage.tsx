import React from "react";
import Image from "next/image";

type Props = {
  image: string;
  alt: string;
  imgTitle: string;
  imgText: string;
};

const CardImage:React.FC<Props> = ({imgTitle, imgText, image, alt}) => {
  return (
    <div className="card-img">
      <p className="card-title">{imgTitle}</p>
      <p className="card-title-summary">{imgText}</p>
      <Image
        className="w-full"
        src={image}
        width={500}
        height={500}
        alt={alt}
      />
    </div>
  );
};

export default CardImage;
