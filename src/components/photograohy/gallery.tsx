import React from "react";
import { GALLERY } from "@/data/gallery";
import Image from "next/image";
import Link from "next/link";

const Gallery = () => {
  return (
    <div className="w-full px-6 py-12">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-white mb-4 tracking-tight">
          My Photography Portfolio
        </h1>
        <p className="text-gray-500 text-lg mb-10 max-w-2xl mx-auto">
          A curated collection of moments I{"'"}ve captured. Whether it{"'"}s
          portraits, events, or candid shots—each frame tells a story. Reach out
          if you{"'"}d like your story told through my lens.
        </p>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {GALLERY.map(({ name, image, link }, index) => (
            <Link
              key={index}
              href={`photography/gallery/${link}`}
              className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <Image
                src={image}
                alt={name}
                className="object-cover w-full h-72 group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <h2 className="text-white text-xl font-semibold">{name}</h2>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
