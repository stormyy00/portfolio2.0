import React from "react";
import { Camera, Aperture, Zap } from "lucide-react";

const equipment = [
  {
    icon: <Camera size={32} className="text-jt-lightblue" />,
    title: "Sony A6400",
    details: ["24 MP APS‑C CMOS", "4K Video Capture"],
  },
  {
    icon: <Aperture size={32} className="text-jt-lightblue" />,
    title: "Sigma 24‑70 f/2.8",
    details: ["Standard Zoom Lens", "Bright Aperture"],
  },
  {
    icon: <Zap size={32} className="text-jt-lightblue" />,
    title: "Godox V1 Flash",
    details: ["Round‑head Soft Light", "TTL & HSS Support"],
  },
];

const About = () => (
  <div className="w-full relative mx-auto px-6 py-16 bg-black text-whit z-0">
    <div className="bg-gradient-to-r from-[#3CCDE3]/40 to-[#0B00A4]/40 blur-3xl w-1/3 h-3/5 absolute top-1/2 -right-9 -z-10 " />
    <div className="mb-12 text-center">
      <h2 className="text-4xl font-extrabold">About Me</h2>
      <p className="mt-2 text-gray-600"></p>
    </div>

    <div>
      <h3 className="text-2xl font-semibold text-white mb-6">Equipment</h3>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {equipment.map(({ icon, title, details }) => (
          <div
            key={title}
            className="bg-slate-800 shadow-lg rounded-xl p-6 flex flex-col items-center text-center hover:shadow-2xl transition"
          >
            <div className="mb-4">{icon}</div>
            <h4 className="font-bold text-lg text-white mb-2">{title}</h4>
            <ul className="text-white text-sm space-y-1">
              {details.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default About;
