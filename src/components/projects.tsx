import React from "react";
import Card from "./card";
import { Projectprops } from "@/types";
import Header from "./header";

const Projects = ({
  data,
  amount,
  toolbar,
}: {
  data: Projectprops[];
  amount: number;
  toolbar?: React.ReactNode;
}) => {
  return (
    <div
      id="projects"
      className="relative flex flex-col justify-center items-start gap-0 w-full min-h-screen md:w-9/12"
    >
      <div className="bg-gradient-to-r from-[#3CCDE3]/40 to-[#0B00A4]/40 blur-3xl w-1/3 h-3/5 absolute -top-[20%] -left-[20%] -z-10" />
      <div className="bg-gradient-to-r from-[#3CCDE3]/40 to-[#0B00A4]/40 blur-3xl w-1/3 h-3/5 absolute -bottom-[20%] right-0 md:-right-[15%] -z-10 " />
      <Header title="$ ls -la ~/projects/" toolbar={toolbar} />
      <div className="flex flex-row flex-wrap items-center justify-center gap-3 md:gap-9 mt-[15%] md:mt-[7%] w-full">
        {data
          .slice(0, amount)
          .map(({ name, short_desc, slug, image, link }, index) => (
            <div
              key={index}
              className="w-fit md:w-[31%] m-1 md:m-0 duration-500"
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
  );
};

export default Projects;
