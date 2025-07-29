"use client";

import Link from "next/link";
import { NAVIGATION } from "@/data/navigation";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import LOGO from "@/public/J-letter.png";

const Navigation = () => {
  const path = usePathname();
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="relative  bg-white/10 backdrop-blur-sm border-t border-cyan-500/20">
      <div className="flex justify-between items-center w-full py-3 px-4 md:px-8">
        <div className="flex items-center gap-4">
          {/* <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-red-400 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
            </div> */}
          <Link href="/">
            <Image
              src={LOGO}
              alt="J letter"
              priority
              draggable={false}
              className="w-7 h-7"
            />
          </Link>
          <p className="text-cyan-400 font-mono text-sm">
            jonathan@portfolio:~/
          </p>
        </div>
        {/* className="text-2xl font-bold text-jt-lightblue hover:opacity-90 transition-opacity"
        >
          Jonathan Trujillo */}

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-x-8">
          {NAVIGATION.main.map(({ name, link, pathname }, index) => (
            <Link
              key={index}
              href={link}
              className={`text-jt-lightblue font-mono text-sm transition-colors duration-200 hover:text-jt-lightblue ${
                path.includes(pathname)
                  ? "text-jt-lightblue border-b-2 border-jt-lightblue pb-1"
                  : "text-white"
              }`}
            >
              {name}
            </Link>
          ))}
          {/* <div className="flex items-center gap-4">
            <span className="text-slate-300 font-mono text-xs">Theme</span>
            <span 
              className="text-slate-300 font-mono text-xs cursor-pointer hover:text-cyan-400 transition-colors"
              onClick={() => navigator.clipboard.writeText(window.location.href)}
            >
              Share
            </span>
            <span className="text-slate-300 font-mono text-xs">Ready</span>
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
          </div> */}
        </div>

        <div className="md:hidden">
          <Menu
            className={`cursor-pointer text-3xl ${
              navOpen ? "text-ucr-yellow" : "text-white"
            }`}
            onClick={() => setNavOpen(!navOpen)}
          />
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      <div
        className={`absolute left-0 top-20 z-40 flex w-full flex-col items-center space-y-4 overflow-hidden bg-black py-6 text-white transition-all duration-300 md:hidden ${
          navOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {NAVIGATION.main.map(({ name, link }, index) => (
          <Link
            key={index}
            href={link}
            onClick={() => setNavOpen(false)}
            className={`text-lg font-semibold ${
              path === link ? "text-jt-lightblue" : ""
            }`}
          >
            {name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navigation;
