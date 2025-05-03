import React from "react";
import Card from "./card";
import { Projectprops } from "@/types";

const Projects = ({ data }: { data: Projectprops[] }) => {
  return (
    <div
      id="projects"
      className="relative flex flex-col justify-center items-start gap-0 w-5/6"
    >
      <div className="bg-gradient-to-r from-[#3CCDE3]/40 to-[#0B00A4]/40 blur-3xl w-1/3 h-3/5 absolute -top-[20%] -left-[10%] -z-10" />
      <div className="bg-gradient-to-r from-[#3CCDE3]/40 to-[#0B00A4]/40 blur-3xl w-1/3 h-3/5 absolute -bottom-[20%] -right-[10%] -z-10" />
      <div className="text-2xl text-jt-lightblue mx-4 my-1">Projects</div>
      <div className="text-white text-5xl font-medium mx-4">PROJECTS</div>
      <div className="flex justify-center">
        <div className="flex flex-col md:flex-row md:w-full justify-between flex-wrap mt-[5%]">
          {data.map(({ name, short_desc, slug, image }, index) => (
            <Card
              key={index}
              name={name}
              description={short_desc}
              link={slug}
              image={image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
