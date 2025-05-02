import About from "@/components/about";
import Home from "@/components/home";
import Projects from "@/components/projects";
import { PROJECTS } from "@/data/projects";

const page = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-0">
      <Home />
      <About />
      <Projects data={PROJECTS} />
    </div>
  );
};

export default page;
