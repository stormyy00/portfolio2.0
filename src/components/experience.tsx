import React from "react";
import { EXPERIENCE } from "@/data/experience";
import Experiences from "./experiences";
const Experience = () => {
  return (
    <div className="flex flex-col items-center justify-center p-0">
      <div className="text-white text-5xl font-medium m-4">Experience</div>
      <Experiences data={EXPERIENCE} />
    </div>
  );
};

export default Experience;
