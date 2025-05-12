import { SKILLS } from "@/data/skills";
import React from "react";

const Skills = () => {
  return (
    <div className="text-black h-full">
      <h2 className="text-2xl font-semibold mb-6 pb-2 border-b border-gray-200 text-white">
        Skills
      </h2>

      <div className="space-y-8">
        {Object.entries(SKILLS).map(([type, skills], index) => (
          <div key={index}>
            <h3 className="text-xl font-medium text-jt-lightblue mb-4">
              {type}
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.map(({ name, icon: Icon }, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 bg-white border border-gray-200 hover:border-jt-lightblue/90 px-4 py-2 rounded-lg shadow-sm transition-all duration-200 group"
                >
                  <span className="text-gray-600 group-hover:text-jt-lightblue transition-colors">
                    <Icon size={18} />
                  </span>
                  <span>{name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
