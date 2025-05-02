import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

type CardProps = {
  name: string;
  description: string;
  link: string;
  image: StaticImageData;
};

const Card = ({ name, description, link, image }: CardProps) => {
  return (
    <Link
      href={`/projects/${link}`}
      className="relative w-80 h-52 shadow-md m-4"
    >
      <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/80 to-black/30 z-0" />
      <Image
        src={image}
        alt={name}
        className="w-full h-full object-cover rounded-xl absolute inset-0 -z-10"
      />
      <div className="flex flex-col absolute bottom-0 left-0 m-1 ml-6">
        <p className="font-bold text-whit text-2xl">{name}</p>
        <p className="font-light text-white text-lg ">{description}</p>
      </div>
    </Link>
  );
};

export default Card;
