import React from "react";
import { Camera, Aperture, Zap, Heart } from "lucide-react";

const equipment = [
  {
    icon: <Camera size={24} className="text-cyan-400" />,
    title: "Sony A6400",
    details: ["24 MP APS‑C CMOS", "4K Video Capture"],
  },
  {
    icon: <Aperture size={24} className="text-cyan-400" />,
    title: "Sigma 24‑70 f/2.8",
    details: ["Standard Zoom Lens", "Bright Aperture"],
  },
  {
    icon: <Zap size={24} className="text-cyan-400" />,
    title: "Godox V1 Flash",
    details: ["Round‑head Soft Light", "TTL & HSS Support"],
  },
];

const About = () => {
  return (
    <div id="about" className="min-h-screen ">
      <div className="pt-16 pb-6 md:pb-12 px-6 text-center">
        <div className="text-3xl md:text-6xl font-bold text-transparent bg-gradient-to-r from-jt-lightblue to-blue-300  bg-clip-text mb-4">
          ABOUT ME
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 pb-16">
        <div className="mb-16">
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-6 flex items-center gap-3">
                  <Heart className="text-cyan-400" size={28} />
                  My Story
                </div>
                <div className="space-y-4 text-slate-300 leading-relaxed flex flex-col items-center h-full">
                  <p>
                    Photography has been my passion for over two years,
                    transforming from a hobby into a way of seeing and capturing
                    the world around me. I treat it as a way to capture moments
                    and create a digital diary. What started with casual
                    snapshots has evolved into a deep appreciation for the art
                    of visual storytelling.
                  </p>
                </div>
              </div>
              <div>
                <div className="text-center mb-12">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Equipment
                  </div>
                  <p className="text-slate-300 max-w-2xl mx-auto">
                    The tools that help me capture the world through my lens
                  </p>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  {equipment.map(({ icon, title, details }, index) => (
                    <div
                      key={index}
                      className="group bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10 hover:border-cyan-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10"
                    >
                      <div className="mb-2 flex justify-center">
                        <div className="p-4 bg-white/10 rounded-2xl group-hover:bg-cyan-500/20 transition-colors duration-300">
                          {icon}
                        </div>
                      </div>
                      <div className="font-bold text-lg text-white mb-2 text-center">
                        {title}
                      </div>
                      <ul className="text-slate-300 text-center space-y-2">
                        {details.map((detail, idx) => (
                          <li key={idx} className="text-sm">
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
