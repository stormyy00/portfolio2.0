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
        <div className="space-y-8 flex flex-col justify-center">
          <div className=" pb-4">
            <h2 className="text-2xl font-semibold mb-2 border-b border-black">
              About me
            </h2>
            <p>
              I am currently software engineer at{" "}
              <span className="text-jt-lightblue font-semibold"> EFG</span>,
              working in creating a protype to help generate marketing content
              for social amplification. I am currently finishing my{" "}
              <span className="font-semibold">Bachelors of Science</span> in
              <span className="font-semibold"> Computer Science</span> at the{" "}
              <span className="text-jt-lightblue font-semibold">
                University of California, Riverside{" "}
              </span>
            </p>

            <p className="mt-4">
              {" "}
              Some technologies i{"'"}ve been working with on the right:
            </p>

            <p className="mt-4">
              Outside of Computer Science, I am working as freelance
              Photographer.
            </p>
          </div>
          <div>
            <div className="text-2xl font-semibold border-b-2 border-black">
              Credentials{" "}
            </div>
            <div className="w-fit mt-2">
              <div className="flex items-center gap-2 text-black bg-jt-dark p-2 rounded-md shadow">
                <span>Google Cloud Foundations</span>
              </div>
              <div className="flex items-center gap-2 text-black bg-jt-dark p-2 rounded-md shadow">
                <span>Oracle Vector Search</span>
              </div>
            </div>
          </div>

          <div className="pb-4">
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
