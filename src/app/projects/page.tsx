import Projects from "@/components/projects";
import { PROJECTS } from "@/data/projects";

const page = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-0">
      <Projects data={PROJECTS} />
    </div>
  );
};

export default page;
