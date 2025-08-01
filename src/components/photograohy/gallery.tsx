"use client";
import { useState, useEffect } from "react";
import { GALLERY } from "@/data/gallery";
import Image, { StaticImageData } from "next/image";
import { ChevronRight, X } from "lucide-react";

type ImageProps = {
  src: StaticImageData;
  name: string;
};

const Gallery = () => {
  const [category, setCategory] = useState("all");
  const [selectedName, setSelectedName] = useState("All");
  const [selectedImage, setSelectedImage] = useState<ImageProps | null>(null);

  const isAllCategory = category === "landscape" || category === "portrait";

  useEffect(() => {
    setSelectedName("All");
  }, [category]);

  const types = ["landscape", "portrait"];

  return (
    <div id="gallery" className="min-h-screen">
      <div className="pt-16 pb-8 px-6 text-center">
        <h1 className="text-3xl md:text-6xl font-bold text-transparent bg-gradient-to-r from-jt-lightblue to-blue-300  bg-clip-text mb-4">
          PHOTOGRAPHY
        </h1>
        <p className="text-xl text-slate-300 max-w-2xl mx-auto">
          Capturing moments through my lens
        </p>
      </div>

      <div className="flex flex-col lg:flex-row w-full px-6 pb-12 gap-8 max-w-7xl mx-auto">
        <div className="lg:w-80 w-full flex flex-col gap-6">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <h3 className="text-white text-lg font-semibold mb-4">
              Categories
            </h3>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setCategory("all")}
                className={`px-3 py-2 rounded-xl font-medium transition-all duration-300 ${
                  category === "all"
                    ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/25"
                    : "bg-white/10 text-slate-300 hover:bg-white/20 border border-white/20"
                }`}
              >
                All
              </button>
              {types.map((type, index) => (
                <button
                  key={index}
                  onClick={() => setCategory(type)}
                  className={`px-3 py-2 rounded-xl font-medium transition-all duration-300 ${
                    category === type
                      ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/25"
                      : "bg-white/10 text-slate-300 hover:bg-white/20 border border-white/20"
                  }`}
                >
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <h3 className="text-white text-lg font-semibold mb-4">
              Collections
            </h3>
            <div className="flex flex-col gap-2">
              <button
                onClick={() => setSelectedName("All")}
                className={`px-4 py-3 rounded-xl text-left font-medium transition-all duration-300 ${
                  selectedName === "All"
                    ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/25"
                    : "text-slate-300 hover:bg-white/10 hover:text-white"
                }`}
              >
                All Collections
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
                    className={`px-4 py-3 rounded-xl text-left font-medium transition-all duration-300 ${
                      selectedName === name
                        ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/25"
                        : "text-slate-300 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    {name}
                  </button>
                ))}
            </div>
          </div>
        </div>

        <div className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {GALLERY.filter(
              ({ type, name }) =>
                (category === "all" || type === category) &&
                (selectedName === "All" || name === selectedName),
            ).map(({ name, image }, index) =>
              image.map((img, imgIdx) => (
                <div
                  key={`${index}-${imgIdx}`}
                  className="group cursor-pointer"
                  onClick={() => setSelectedImage({ src: img, name: name })}
                >
                  <div className="relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-cyan-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/20">
                    <div className="aspect-[4/3] overflow-hidden">
                      <Image
                        src={img}
                        alt={name}
                        className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700 ease-out"
                      />
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <div className="text-white text-xl font-semibold mb-2">
                          {name}
                        </div>
                        <div className="flex items-center text-cyan-400 text-sm font-medium">
                          <span>View</span>
                          <ChevronRight className="ml-2 w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )),
            )}
          </div>
          {GALLERY.filter(
            ({ type, name }) =>
              (category === "all" || type === category) &&
              (selectedName === "All" || name === selectedName),
          ).length === 0 && (
            <div className="text-center py-16">
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-white/5 flex items-center justify-center">
                <svg
                  className="w-12 h-12 text-slate-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                No photos found
              </h3>
              <p className="text-slate-400">
                Try adjusting your filters to see more results.
              </p>
            </div>
          )}
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 bg-white/10 backdrop-blur-sm rounded-full p-3 text-white hover:bg-white/20 transition-colors duration-300"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="relative max-w-full max-h-full">
              <Image
                src={selectedImage.src}
                alt={selectedImage.name}
                className="object-contain max-w-full max-h-[90vh] rounded-xl"
                width={1920}
                height={1080}
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
