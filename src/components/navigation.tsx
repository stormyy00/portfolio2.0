"use client";

import Link from "next/link";
import { NAVIGATION } from "@/data/navigation";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const path = usePathname();
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="relative">
      <div className="flex justify-between items-center w-full py-3 px-4 md:px-8">
        <Link
          href="/"
          className="text-2xl font-bold text-jt-lightblue hover:opacity-90 transition-opacity"
        >
          Jonathan Trujillo
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-x-8">
          {NAVIGATION.main.map(({ name, link, pathname }, index) => (
            <Link
              key={index}
              href={link}
              className={`text-xl font-medium transition-colors duration-200 hover:text-jt-lightblue ${
                path.includes(pathname)
                  ? "text-jt-lightblue border-b-2 border-jt-lightblue pb-1"
                  : "text-white"
              }`}
            >
              {name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Icon */}
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
