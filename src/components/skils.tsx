import { SKILLS } from "@/data/skills";
import React from "react";

const Skills = () => {
  return (
    <div className="text-black px-4 py-0">
      <h2 className="text-4xl font-bold text-center mb-6">
        <span className="text-jt-lightblue">S</span>KILLS
      </h2>
      {Object.entries(SKILLS).map(([type, skills], index) => (
        <div key={index} className="mb-6">
          <div className="text-2xl font-semibold text-jt-lightblue mb-2">
            {type}
          </div>
          <div className="flex flex-wrap gap-4">
            {skills.map(({ name, icon: Icon }, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 text-black bg-jt-dark p-2 rounded-md shadow"
              >
                <Icon />
                <span>{name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
