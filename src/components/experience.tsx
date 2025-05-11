import React from "react";
import { EXPERIENCE } from "@/data/experience";
import Experiences from "./experiences";
const Experience = () => {
  return (
    <div
      id="experience"
      className=" relative flex flex-col items-start justify-center p-0 w-full md:w-9/12"
    >
      <div className="bg-gradient-to-r from-[#3CCDE3]/40 to-[#0B00A4]/40 blur-3xl w-1/3 h-3/5 absolute -top-[20%] right-0 md:-right-[20%] -z-10 overflow-clip" />
      <div className="text-2xl text-jt-lightblue my-1">Experience</div>
      <div className="text-white text-5xl font-medium ">Experience</div>

      <Experiences data={EXPERIENCE} />
    </div>
  );
};

export default Experience;
