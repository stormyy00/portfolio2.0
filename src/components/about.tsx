import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <div id="about" className="bg-white text-black w-full my-10">
      <div className="text-7xl font-bold w-full overflow-hidden whitespace-nowrap">
        {"about.".repeat(40)}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-6">
        <div className="space-y-8">
          <div className=" pb-4">
            <h2 className="text-2xl font-semibold mb-2 border-b border-black">
              Introduction
            </h2>
            <p>
              I am a software engineer with a passion for photography. I have a
              strong background in web development and a keen eye for design. I
              enjoy creating beautiful and functional websites that provide a
              great user experience.
            </p>
          </div>

          <div className=" pb-4">
            <h2 className="text-2xl font-semibold mb-2 border-b border-black">
              Education
            </h2>
            <p>
              I graduated from the University of California, Berkeley with a
              degree in Computer Science. During my time at UC Berkeley, I was
              involved in various projects and organizations that helped me
              develop my skills and gain valuable experience.
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
                LinkedIn
              </Link>
              <br />
              <Link
                href="https://github.com/jonathantrujillo"
                target="_blank"
                className="text-blue-500 hover:underline"
              >
                GitHub
              </Link>
              <br />
              <Link
                href="mailto:youremail@example.com"
                className="text-blue-500 hover:underline"
              >
                Email
              </Link>
            </div>
          </div>
        </div>

        <div className=" pb-4">
          <h2 className="text-2xl font-semibold mb-2 border-b border-black">
            Experiences
          </h2>
          <p>
            Worked on multiple web development projects, contributed to
            open-source, and built personal apps combining photography with
            modern web tech.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
