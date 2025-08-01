"use client";
import Image from "next/image";
import background from "@/public/landing.jpg";
import { Link as Scroll } from "react-scroll";

const Landing = () => {
  return (
    <div className="flex relative h-screen w-full justify-center text-white overflow-hidden">
      <div className="absolute inset-0 scale-110">
        <Image
          src={background}
          alt="Mountain Lake Landscape"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-slate-900/40 to-blue-900/50" />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center px-6">
        <div className="mb-8 space-y-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight">
            <span className="block text-transparent bg-gradient-to-r from-white  to-jt-lightblue bg-clip-text pb-2">
              Jonathan Trujillo
            </span>
          </h1>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-cyan-400"></div>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold tracking-widest text-slate-200">
              PHOTOGRAPHER
            </p>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-cyan-400"></div>
          </div>
        </div>
        <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mb-12 leading-relaxed">
          Capturing the beauty of landscapes and moments through my lens
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Scroll
            to="#photography"
            smooth={true}
            duration={800}
            offset={0}
            spy={true}
            className="group relative px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm sm:text-base font-medium transition-all duration-300 hover:bg-white/20 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-400/25"
          >
            <span className="relative z-10">About Me</span>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Scroll>
          <Scroll
            to="#gallery"
            smooth={true}
            duration={800}
            offset={0}
            spy={true}
            className="group relative px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-sm sm:text-base font-medium transition-all duration-300 hover:from-cyan-400 hover:to-blue-400 hover:shadow-lg hover:shadow-cyan-500/40 transform hover:scale-105"
          >
            <span className="relative z-10">View Gallery</span>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Scroll>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex flex-col items-center text-slate-300">
          <p className="text-xs uppercase tracking-widest mb-2">Explore</p>
          <div className="w-px h-8 bg-gradient-to-b from-slate-300 to-transparent animate-pulse"></div>
        </div>
      </div>
      <div className="absolute top-1/4 left-8 w-2 h-2 bg-cyan-400 rounded-full opacity-60 animate-pulse"></div>
      <div
        className="absolute top-1/3 right-12 w-1 h-1 bg-blue-400 rounded-full opacity-40 animate-pulse"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute bottom-1/4 left-16 w-1.5 h-1.5 bg-purple-400 rounded-full opacity-50 animate-pulse"
        style={{ animationDelay: "2s" }}
      />
    </div>
  );
};

export default Landing;
