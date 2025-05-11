"use client";

// import {
//   Timeline,
//   TimelineItem,
//   TimelineTitle,
//   TimelineDescription,
//   TimelineTime,
//   TimelineHeader,
// } from "@/components/ui/timeline";
import { experienceProps } from "@/types";
import { useState } from "react";

type props = {
  data: experienceProps[];
};

const Experiences = ({ data }: props) => {
  const [selected, setSelected] = useState(data[0].company);

  const { title, date, description, company } = data.find(
    ({ company }) => company === selected,
  ) as experienceProps;

  return (
    <div className="flex h-full w-11/12 flex-wrap justify-center items-center md:w-10/12 py-10">
      <div className="flex w-screen">
        <div className="flex flex-col w-1/3 pr-4 border-r border-gray-600 flex-shrink-0 duration-300">
          {data.map(({ company }) => (
            <button
              key={company}
              onClick={() => setSelected(company)}
              className={`relative text-left py-2 px-4 text-white w-full overflow-hidden group transition-all duration-200 ${
                selected === company
                  ? "text-cyan-300 bg-[#1b2638]/60"
                  : "hover:bg-[#1b2638]/30"
              }`}
            >
              <span
                className={`absolute left-0 top-0 h-full w-1 bg-cyan-300 transform transition-all duration-300 ${
                  selected === company
                    ? "opacity-100"
                    : "opacity-0 group-hover:opacity-80"
                }`}
              />
              {company}
            </button>
          ))}
        </div>
        <div className="w-2/3 pl-6 min-h-[100px] flex flex-col justify-start">
          <div className="text-xl md:text-2xl font-semibold mb-1 text-white">
            {title} <span className="text-cyan-300">@ {company}</span>
          </div>
          <p className="text-sm text-gray-400 mb-4">{date}</p>
          <div className="flex flex-col space-y-2">
            {description.map((desc, i) => (
              <li
                key={i}
                className="text-[#e2e8f0] text-sm md:text-base leading-relaxed"
              >
                {desc}
              </li>
            ))}
          </div>
        </div>
      </div>
      {/* <Timeline className="mt-2 flex h-full w-full text-white flex-col items-center md:mt-0 ml-0 ">
        {data.map(({ title, company, date, description }, index) => (
          <TimelineItem key={index} className="h-fit w-full ">
            <div className="bg-gray-800 p-4 rounded-xl w-5/6">
              <TimelineHeader>
                <TimelineTitle className="text-white flex justify-between w-full">
                  <div className="flex flex-col">
                    <p>{title}</p>
                    <p className=" font-light italic">{company}</p>
                  </div>
                  <TimelineTime className="text-white bg-transparent font-semibold text-lg ">
                    {date}
                  </TimelineTime>
                </TimelineTitle>
              </TimelineHeader>
              <TimelineDescription className="mt-1 text-white w-full">
                {description.map((desc, index) => (
                  <li key={index} className="text-sm md:text-base">
                    {desc}
                  </li>
                ))}
              </TimelineDescription>
            </div>
          </TimelineItem>
        ))}
      </Timeline> */}
    </div>
  );
};

export default Experiences;
