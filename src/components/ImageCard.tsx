import Image from "next/image";

interface ImageCardProps {
  imageName: string;
  imageAlt: string;
  imageRight?: boolean;
  title: string;
  text: string;
}

const ImageCard = ({
  imageName,
  imageAlt,
  imageRight,
  title,
  text,
}: ImageCardProps) => {
  return (
    <div className="flex w-full h-[400px]">
      {!imageRight ? (
        <>
          <div className="w-1/2">
            <Image
              src={`/${imageName}`}
              alt={imageAlt}
              width={1920}
              height={1080}
              className="object-fill h-full w-full"
            />
          </div>
          <div className="flex flex-col justify-center items-center w-1/2 bg-yellow-50 text-gray-900">
            <h2 className="font-extrabold text-3xl">{title}</h2>
            <p className="font-bold text-xl text-justify p-10">{text}</p>
          </div>
        </>
      ) : (
        <>
          <div className="flex flex-col justify-center items-center w-1/2 bg-yellow-50 text-gray-900">
            <h2 className="font-extrabold text-3xl">{title}</h2>
            <p className="font-bold text-xl text-justify p-10">{text}</p>
          </div>
          <div className="w-1/2">
            <Image
              src={`/${imageName}`}
              alt={imageAlt}
              width={1920}
              height={1080}
              className="object-fill h-full w-full"
            />
          </div>
        </>
      )}
    </div>
  );
};

export default ImageCard;
