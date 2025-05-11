"use client";

import { useState, useEffect } from "react";
import { GALLERY } from "@/data/gallery";
import Image from "next/image";
import Link from "next/link";

const Gallery = () => {
  const [category, setCategory] = useState("all");
  const [selectedName, setSelectedName] = useState("All");

  const isAllCategory = category === "landscape" || category === "portrait";

  useEffect(() => {
    setSelectedName("All");
  }, [category]);

  const types = ["landscape", "portrait"];

  return (
    <div className="flex flex-col md:flex-row w-full px-6 py-12 gap-8">
      <div className="md:w-1/4 w-full flex flex-col gap-4 text-white">
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setCategory("all")}
            className={`px-4 py-2 rounded-md border ${
              category === "all"
                ? "bg-white text-black"
                : "bg-black border-white"
            }`}
          >
            All
          </button>
          {types.map((type, index) => (
            <button
              key={index}
              onClick={() => setCategory(type)}
              className={`px-4 py-2 rounded-md border ${
                category === type
                  ? "bg-white text-black"
                  : "bg-black border-white"
              }`}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>

        <div className="flex flex-col gap-2">
          <button
            onClick={() => setSelectedName("All")}
            className={`text-center rounded-md border hover:bg-white/70 duration-300 ${
              selectedName === "All"
                ? "bg-white text-black"
                : "bg-black border-white"
            }`}
          >
            All
          </button>
          {(isAllCategory
            ? GALLERY.filter(({ type }) => type === category)
            : GALLERY
          )
            .map(({ name }) => name)
            .filter((value, index, self) => self.indexOf(value) === index)
            .map((name, index) => (
              <button
                key={index}
                onClick={() => setSelectedName(name)}
                className={`text-center rounded-md border hover:bg-white/70 duration-300 ${
                  selectedName === name
                    ? "bg-white text-black"
                    : "bg-black border-white"
                }`}
              >
                {name}
              </button>
            ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {GALLERY.filter(
          ({ type, name }) =>
            (category === "all" || type === category) &&
            (selectedName === "All" || name === selectedName),
        ).map(({ name, image, link }, index) =>
          image.map((img, imgIdx) => (
            <Link
              key={`${index}-${imgIdx}`}
              href={`/photography/gallery/${link}`}
              className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <Image
                src={img}
                alt={name}
                className="object-cover w-full h-72 group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <h2 className="text-white text-xl font-semibold">{name}</h2>
              </div>
            </Link>
          )),
        )}
      </div>
    </div>
  );
};

export default Gallery;
