import {
  Timeline,
  TimelineItem,
  TimelineTitle,
  TimelineDescription,
  TimelineTime,
  TimelineHeader,
} from "@/components/ui/timeline";
import { experienceProps } from "@/types";

type props = {
  data: experienceProps[];
};

const Experiences = ({ data }: props) => {
  return (
    <div className="flex h-full w-11/12 flex-wrap justify-center items-center md:w-10/12 ">
      <Timeline className="mt-2 flex h-full w-full text-white flex-col items-center md:mt-0 ml-0 ">
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
      </Timeline>
    </div>
  );
};

export default Experiences;
