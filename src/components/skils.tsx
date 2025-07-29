import { SKILLS } from "@/data/skills";
import React from "react";

const Skills = () => {
  return (
    <div className="relative bg-white/5 border border-jt-lightblue rounded-2xl p-8 hover:border-cyan-500/80 transition-all duration-300">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-2 h-2 bg-jt-lightblue rounded-full" />
        <div className="text-xl font-bold text-white font-mono">~/skills</div>
      </div>

      <div className="space-y-4">
        {Object.entries(SKILLS).map(([type, skills], index) => (
          <div key={index}>
            <div className="text-lg font-semibold text-white mb-2 font-mono flex items-center gap-2">
              <span className="text-cyan-400">$</span> {type.toLowerCase()}
            </div>
            <div className="flex flex-wrap gap-3">
              {skills.map(({ name, icon: Icon }, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 px-3 py-2 bg-white/5 border border-white/10 backdrop-blur-sm rounded-lg shadow-sm hover:shadow-md hover:border-jt-lightblue/40 transition duration-200"
                >
                  <Icon size={16} className="text-jt-lightblue" />
                  <span className="text-sm text-white">{name}</span>
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
