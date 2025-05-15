import React from "react";
import Card from "./card";
import { Projectprops } from "@/types";

const Projects = ({
  data,
  amount,
}: {
  data: Projectprops[];
  amount: number;
}) => {
  return (
    <div
      id="projects"
      className="relative flex flex-col justify-center items-start gap-0 w-full md:w-9/12"
    >
      <div className="bg-gradient-to-r from-[#3CCDE3]/40 to-[#0B00A4]/40 blur-3xl w-1/3 h-3/5 absolute -top-[20%] -left-[20%] -z-10" />
      <div className="bg-gradient-to-r from-[#3CCDE3]/40 to-[#0B00A4]/40 blur-3xl w-1/3 h-3/5 absolute -bottom-[20%] right-0 md:-right-[15%] -z-10 " />
      <div className="text-2xl text-left text-jt-lightblue mx-4 my-1">
        Projects
      </div>
      <div className="text-white text-left text-5xl font-medium mx-4">
        PROJECTS
      </div>
      <div className="flex justify-center w-full">
        <div className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-0 mt-[5%] w-full">
          {data
            .slice(0, amount)
            .map(({ name, short_desc, slug, image, link }, index) => (
              <div
                key={index}
                className="w-full md:w-1/3 m-4 md:m-0 hover:-translate-y-2 duration-500"
              >
                <Card
                  name={name}
                  description={short_desc}
                  slug={slug}
                  link={link}
                  image={image}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
