import About from "@/components/about";
import Experience from "@/components/experience";
import Home from "@/components/home";
import Projects from "@/components/projects";
import Sidebar from "@/components/sidebar";
import { PROJECTS } from "@/data/projects";

const page = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen p-0">
      <Sidebar />
      <Home />
      <About />
      <Experience />
      <Projects data={PROJECTS} amount={11} />
    </div>
  );
};

export default page;
