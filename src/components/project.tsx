"use client";

import Image from "next/image";
import { Projectprops } from "@/types";
import Link from "next/link";
import { Link as Scroll } from "react-scroll";

const Project = ({
  name,
  description,
  techstack,
  link,
  image,
  authors = ["Jonathan Trujilo"],
}: Projectprops) => {
  return (
    <div className="relative flex flex-col justify-center items-center text-white">
      {/* <Link href={"/projects"} className="text-3xl bg-jt-lightblue text-white font-semibold p-1 rounded-xl">Return to Projects</Link> */}
      <div className="bg-gradient-to-r from-[#3CCDE3]/40 to-[#0B00A4]/40 blur-3xl w-1/2 h-3/5 absolute top-[10%] -left-[10%] -z-10" />
      <div className="bg-gradient-to-r from-[#3CCDE3]/40 to-[#0B00A4]/40 blur-3xl w-1/3 h-3/5 absolute -bottom-[5%] right-[0%] -z-10" />
      <div className="relative w-full h-80">
        <Image
          src={image}
          alt="project hero"
          fill
          className="object-cover z-0"
        />
        <div className="absolute inset-0 bg-black/20 z-10" />
      </div>
      <div className="w-11/12 md:w-2/3 space-y-6 mt-5">
        <div className="flex w-full justify-between">
          <div className="flex flex-col items-start justify-center">
            <div className="text-jt-lightblue font-semibold">
              Oct 2024 - Mar 2025
            </div>
            <h1 className="text-5xl font-bold">{name}</h1>
            <div className="flex items-center space-x-1 ml-0">
              <span className="text-gray-300 font-medium">by</span>
              {authors.map((author, index) => (
                <span key={index} className="text-gray-300 font-medium">
                  {author}
                  {index < authors.length - 1 && ", "}
                </span>
              ))}
            </div>
            <div className="flex gap-3 flex-wrap justify-center mt-2">
              {techstack.map((tech, index) => (
                <div
                  key={index}
                  className="text-gray-300 font-medium text-sm bg-gray-700 rounded-full px-2 py-1"
                >
                  {tech}
                </div>
              ))}
            </div>
            {link && (
              <div className="flex gap-3 mt-4">
                {link.map(({ name, link, icon }, index) => (
                  <Link
                    key={index}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 border border-white text-base text-white font-light rounded-lg px-2 py-1"
                  >
                    <Image src={icon} alt="icon" /> {name}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <div className="flex flex-col items-start border-l-4 border-jt-lightblue pl-4 h-fit -ml-4">
            {description.map(({ header, path }, index) => (
              <Scroll
                key={index}
                to={path}
                smooth={true}
                duration={800}
                offset={0}
                spy={true}
                className="text-xl font-medium cursor-pointer text-white hover:text-jt-lightblue transition-colors duration-300"
              >
                {header}
              </Scroll>
            ))}
          </div>
        </div>
        {description.map(({ header, description, image, path }, index) => (
          <div key={index} className="flex flex-col gap-4">
            <div className="border-l-4 border-jt-lightblue pl-4">
              <h2 id={path} className="text-xl font-bold">
                {header}
              </h2>
            </div>
            {image ? (
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/2 space-y-4">
                  <p className="text-gray-300 leading-relaxed">
                    {description[0]}
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    {description[1]}
                  </p>
                </div>
                <div className="md:w-1/2 bg-gray-800 rounded-lg aspect-video flex items-center justify-center">
                  <Image
                    src={image}
                    alt="image"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
            ) : (
              <p className="text-gray-300 leading-relaxed">{description}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
