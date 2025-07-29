import { ArrowUpRight, ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import Skills from "./skils";
import { CREDENTIALS } from "@/data/skills";
import Header from "./header";

const About = () => {
  return (
    <div id="about" className="py-16 text-white w-ful relative">
      <div className="bg-gradient-to-r from-[#3CCDE3]/40 to-[#0B00A4]/40 blur-3xl w-1/3 h-4/5 absolute -top-[0%] right-0 -z-10" />
      {/* <div className="bg-gradient-to-r from-[#3CCDE3]/40 to-[#0B00A4]/40 blur-3xl w-1/3 h-3/5 absolute -top-[0%] left-4 -z-10 overflow-clip" /> */}
      {/* <div className="flex flex-col items-start mb-6">
        <div className="text-2xl text-left text-jt-lightblue mx-4 my-1">
          About
        </div>
        <div className="text-white text-left text-5xl font-medium mx-4">
          About
        </div>
      </div> */}
      <Header title="about" />
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-6">
        <div className="space-y-8">
          <div className="relative bg-white/5 border border-jt-lightblue rounded-2xl p-8 hover:border-cyan-500/80 transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-2 bg-jt-lightblue rounded-full"></div>
              <div className="text-xl font-bold text-white font-mono">~/me</div>
            </div>
            <p className="text-lg leading-relaxed">
              I am currently a software engineer at{" "}
              <span className="text-jt-lightblue font-semibold">EFG</span>,
              working on creating a prototype to help generate marketing content
              for social amplification. I am finishing my{" "}
              <span className="font-semibold">Bachelor{"'"}s of Science</span>{" "}
              in <span className="font-semibold">Computer Science</span> at the{" "}
              <span className="text-jt-lightblue font-semibold">
                University of California, Riverside
              </span>
              .
            </p>
            <p className="mt-4 text-lg">
              Outside of Computer Science, I work as a freelance Photographer.
            </p>
          </div>

          <div className="relative bg-white/5 border border-jt-lightblue rounded-2xl p-8 hover:border-cyan-500/80 transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-2 bg-jt-lightblue rounded-full"></div>
              <div className="text-xl font-bold text-white font-mono">
                ~/credentials
              </div>
            </div>
            <div className="flex flex-wrap gap-3 mt-4">
              {CREDENTIALS.map(({ name, link }, index) => (
                <Link
                  href={link}
                  target="_blank"
                  key={index}
                  className="flex items-center gap-2 px-3 py-2 bg-white/5 border border-white/50 backdrop-blur-sm rounded-lg shadow-sm hover:shadow-md hover:border-jt-lightblue/40 transition duration-200"
                >
                  <div className="flex items-center gap-3">
                    <ChevronRight
                      size={16}
                      className="text-cyan-400 group-hover/item:translate-x-1 transition-transform"
                    />
                    <span className="text-slate-200 font-mono text-sm">
                      {name}
                    </span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-cyan-400 opacity-0 group-hover/item:opacity-100 transition-opacity" />
                </Link>
              ))}
            </div>
          </div>
        </div>
        <Skills />
      </div>
    </div>
  );
};

export default About;
