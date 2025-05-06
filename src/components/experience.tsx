import React from "react";
import { EXPERIENCE } from "@/data/experience";
import Experiences from "./experiences";
const Experience = () => {
  return (
    <div className="flex flex-col items-center justify-center p-0">
      <div className="text-white text-5xl font-medium mx-4 ">Experience</div>
      {EXPERIENCE.map(({ title, description, company, date }, index) => (
        <Experiences
          title={title}
          description={description}
          company={company}
          date={date}
          key={index}
        />
      ))}
    </div>
  );
};

export default Experience;
