import {
  Timeline,
  TimelineItem,
  TimelineTitle,
  TimelineDescription,
  TimelineTime,
  TimelineHeader,
} from "@/components/ui/timeline";
import { experienceProps } from "@/types";

const Experiences = ({
  title,
  description,
  company,
  date,
}: experienceProps) => {
  return (
    <div className="flex h-full w-11/12 flex-wrap justify- items-center md:w-11/12">
      <Timeline className="mt-2 flex h-full w-full text-white flex-col items-center md:mt-0">
        <div className="mb-4 w-fit border-b-4 border-blue-400 pb-1 text-center text-2xl font-semibold md:mb-0 md:text-4xl" />
        <TimelineItem className="h-full flex flex-col justify-start w-full">
          <TimelineHeader>
            <TimelineTitle className="text-white flex justify-between w-full">
              <div className="flex flex-col">
                <p>{title}</p>
                <p className=" font-light italic">{company}</p>
              </div>
              <TimelineTime className=" text-white font-semibold text-lg ">
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
        </TimelineItem>
      </Timeline>
    </div>
  );
};

export default Experiences;
