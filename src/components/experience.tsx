import React from "react";
import { EXPERIENCE } from "@/data/experience";
import Experiences from "./experiences";
import Header from "./header";
const Experience = () => {
  return (
    <div
      id="experience"
      className=" relative flex flex-col items-start justify-center p-10 w-full md:w-9/12  h-fullmd:min-h-screen px-3 md:px-0"
    >
      <Header title="experience" />
      <Experiences data={EXPERIENCE} />
    </div>
  );
};

export default Experience;
