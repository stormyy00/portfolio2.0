"use client";

import { NAVIGATION } from "@/data/navigation";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { FileText, Linkedin } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Link as Scroll } from "react-scroll";

const LinkIcons = ({
  name,
  icon,
  url,
}: {
  name: string;
  icon: React.JSX.Element;
  url: string;
}) => {
  return (
    <div className="group cursor-pointer">
      <Link
        href={url}
        className="p-3 bg-gradient-to-br from-cyan-400/20 via-blue-500/20 to-indigo-600/20 backdrop-blur-md border border-cyan-400/30 rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-105 group-hover:shadow-cyan-400/20 transition-all duration-300"
      >
        {icon}
      </Link>
      <p className="mt-2 text-xs font-mono text-cyan-200 text-center tracking-tighter  uppercase drop-shadow">
        {name}
      </p>
    </div>
  );
};

const Home = () => {
  return (
    <div className="relative flex flex-col justify-center items-center h-screen font-poppins w-full">
      <div className="bg-gradient-to-r from-[#3CCDE3]/40 to-[#0B00A4]/40 blur-3xl w-1/3 h-3/5 absolute -top-[20%] -right-0 -z-10 " />
      <div className="bg-gradient-to-r from-[#3CCDE3]/40 to-[#0B00A4]/40 blur-3xl w-1/3 h-3/5 absolute -bottom-[20%] left-0 -z-10 " />
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full" />
        <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-indigo-400 rounded-full" />
        <div className="absolute top-1/2 left-3/4 w-2 h-2 bg-blue-400 rounded-full" />
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-indigo-500 rounded-full" />
      </div>

      <div className="absolute top-10 left-10 grid grid-cols-2 gap-6">
        {NAVIGATION.sub.map(({ name, pathname, icon: Icon }, index) => (
          <div className="group cursor-pointer" key={index}>
            <Scroll
              to={pathname}
              smooth={true}
              duration={800}
              offset={0}
              spy={true}
            >
              <div className="p-3 bg-gradient-to-br from-cyan-400/20 via-blue-500/20 to-indigo-600/20 backdrop-blur-md border border-cyan-400/30 rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-105 group-hover:shadow-cyan-400/20 transition-all duration-300">
                <Icon className="w-8 h-8 text-cyan-300 group-hover:text-cyan-200 transition-colors" />
              </div>
              <p className="mt-2 text-xs font-mono text-cyan-200 text-center tracking-tighter uppercase drop-shadow">
                {name}
              </p>
            </Scroll>
          </div>
        ))}
        <div className="group cursor-pointer">
          <div className="p-3 bg-gradient-to-br from-cyan-400/20 via-blue-500/20 to-indigo-600/20 backdrop-blur-md border border-cyan-400/30 rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-105 group-hover:shadow-cyan-400/20 transition-all duration-300">
            <FileText className="w-8 h-8 text-cyan-300 group-hover:text-cyan-200 transition-colors" />
          </div>
          <p className="mt-2 text-xs font-mono text-cyan-200 text-center tracking-widest uppercase drop-shadow">
            Content
          </p>
        </div>
      </div>
      <div className="absolute bottom-40 left-10 grid grid-cols-2 gap-6">
        <div className="group cursor-pointer">
          <div className="p-3 bg-gradient-to-br from-cyan-400/20 via-blue-500/20 to-indigo-600/20 backdrop-blur-md border border-cyan-400/30 rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-105 group-hover:shadow-cyan-400/20 transition-all duration-300">
            <FileText className="w-8 h-8 text-cyan-300 group-hover:text-cyan-200 transition-colors" />
          </div>
          <p className="mt-2 text-xs font-mono text-cyan-200 text-center tracking-tighter  uppercase drop-shadow">
            CSGO
          </p>
        </div>
        <div className="group cursor-pointer">
          <div className="p-3 bg-gradient-to-br from-cyan-400/20 via-blue-500/20 to-indigo-600/20 backdrop-blur-md border border-cyan-400/30 rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-105 group-hover:shadow-cyan-400/20 transition-all duration-300">
            <FileText className="w-8 h-8 text-cyan-300 group-hover:text-cyan-200 transition-colors" />
          </div>
          <p className="mt-2 text-xs font-mono text-cyan-200 text-center tracking-tighter  uppercase drop-shadow">
            Apex
          </p>
        </div>
        <LinkIcons
          name={"Blogs"}
          icon={
            <FileText className="w-8 h-8 text-cyan-300 group-hover:text-cyan-200 transition-colors" />
          }
          url="/blogs"
        />
      </div>

      <div className="absolute right-10 top-10">
        {/* <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-2 bg-jt-lightblue rounded-full"></div>
            <div className="text-2xl font-bold text-white font-mono">
              ~/connect
            </div>
          </div> */}
        <div className="flex flex-col gap-6">
          <LinkIcons
            name={"Linkedin"}
            icon={
              <Linkedin className="w-8 h-8 text-cyan-300 group-hover:text-cyan-200 transition-colors" />
            }
            url={"https://www.linkedin.com/in/jonathan--trujillo/"}
          />
          <LinkIcons
            name={"Github"}
            icon={
              <SiGithub className="w-8 h-8 text-cyan-300 group-hover:text-cyan-200 transition-colorss" />
            }
            url={"https://github.com/stormyy00"}
          />
          {/* <LinkIcons
            name={"Mail"}
            icon={
              <Mail className="w-8 h-8 text-cyan-400 group-hover/social:text-red-400 transition-colors" />
            }
            url={"mailto:youremail@example.com"}
          /> */}
        </div>
      </div>
      <div className="relative w-fit text-5xl md:text-7xl text-center font-bold text-jt-lightblue">
        <span className="vintage-shadow-blue">JONATHAN TRUJILLO</span>
        <div className="absolute inset-4 md:inset-6 w-fit md:w-full text-outline-white whitespace-normal md:whitespace-nowrap -z-10">
          JONATHAN TRUJILLO
        </div>
        <div className="flex flex-col items-center md:items-end justify-end">
          <div className="text-3xl md:text-5xl font-bold text-outline-white mt-6">
            software engineer
          </div>
          <div className="text-3xl md:text-5xl font-bold text-outline-white mt-0">
            photographer
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
