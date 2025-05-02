import Projects from "@/components/projects";
import { PROJECTS } from "@/data/projects";

const page = () => {
  return (
    <div>
      <Projects data={PROJECTS} />
    </div>
  );
};

export default page;
