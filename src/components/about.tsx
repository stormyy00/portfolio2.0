import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import React from "react";
import Skills from "./skils";

const About = () => {
  return (
    <div id="about" className="py-16 text-white w-ful relative">
      <div className="bg-gradient-to-r from-[#3CCDE3]/40 to-[#0B00A4]/40 blur-3xl w-1/3 h-4/5 absolute -top-[0%] right-0 -z-10" />
      {/* <div className="bg-gradient-to-r from-[#3CCDE3]/40 to-[#0B00A4]/40 blur-3xl w-1/3 h-3/5 absolute -top-[0%] left-4 -z-10 overflow-clip" /> */}
      <div className="flex flex-col items-start mb-6">
        <div className="text-2xl text-left text-jt-lightblue mx-4 my-1">
          About
        </div>
        <div className="text-white text-left text-5xl font-medium mx-4">
          About
        </div>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-6">
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4 pb-2 border-b border-gray-200">
              About me
            </h2>
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

          <div>
            <h2 className="text-2xl font-semibold mb-4 pb-2 border-b border-gray-200">
              Credentials
            </h2>
            <div className="flex flex-wrap gap-3 mt-4">
              <Link
                href={
                  "https://www.credly.com/badges/cdbf60d3-c9b0-4106-b28f-7b5efdf9ae72/public_url"
                }
                target="_blank"
                className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 transition-colors px-4 py-2 rounded-lg text-black"
              >
                <span>Google Cloud Computing Foundations</span>
              </Link>
              <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-lg text-black">
                <span>Oracle AI Vector Search</span>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4 pb-2 border-b border-gray-200">
              Connect
            </h2>
            <div className="flex gap-4 mt-4">
              <Link
                href="https://www.linkedin.com/in/jonathan--trujillo/"
                target="_blank"
                className="p-3 bg-gray-500 hover:bg-blue-100 hover:text-blue-600 rounded-full transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </Link>
              <Link
                href="https://github.com/jonathantrujillo"
                target="_blank"
                className="p-3 bg-gray-500 hover:bg-gray-700 hover:text-white rounded-full transition-colors"
                aria-label="GitHub"
              >
                <Github size={24} />
              </Link>
              <Link
                href="mailto:youremail@example.com"
                className="p-3 bg-gray-500 hover:bg-red-100 hover:text-red-600 rounded-full transition-colors"
                aria-label="Email"
              >
                <Mail size={24} />
              </Link>
            </div>
          </div>
        </div>
        <Skills />
      </div>
    </div>
  );
};

export default About;
