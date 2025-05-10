import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import React from "react";
import Skills from "./skils";

const About = () => {
  return (
    <div
      id="about"
      className="flex flex-col items-center bg-white text-black w-full my-10"
    >
      <div className="text-7xl font-bold w-full overflow-hidden whitespace-nowrap">
        {"about.".repeat(40)}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-6 w-5/6">
        <div className="space-y-8">
          <div className=" pb-4">
            <h2 className="text-2xl font-semibold mb-2 border-b border-black">
              Introduction
            </h2>
            <p>
              I am a software engineer with a passion for photography. I{"'"}m
              obsessed with building projects that help benefits prople
              productiity.
              <br />I enjoy doing photography and also DJ on the side, as well
              as
            </p>
          </div>

          <div className=" pb-4">
            <h2 className="text-2xl font-semibold mb-2 border-b border-black">
              Education
            </h2>
            <p>
              Currently attending from the University of California, Riverside
              Bachelors Computer Science.
            </p>
          </div>

          <div className="pb-4">
            <h2 className="text-2xl font-semibold mb-2 border-b border-black">
              Contacts
            </h2>
            <div className="flex gap-x-2 justify-center">
              <Link
                href="https://www.linkedin.com/in/jonathan--trujillo/"
                target="_blank"
                className="text-blue-500 hover:underline"
              >
                <Linkedin size={24} />
              </Link>
              <Link
                href="https://github.com/jonathantrujillo"
                target="_blank"
                className="text-blue-500 hover:underline"
              >
                <Github size={24} />
              </Link>
              <Link
                href="mailto:youremail@example.com"
                className="text-blue-500 hover:underline"
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
