"use client";

import Projects from "@/components/projects";
import Toolbar from "@/components/toolbar";
import { PROJECTS } from "@/data/projects";
import { useState } from "react";

const Page = () => {
  const [search, setSearch] = useState(PROJECTS);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-0 gap-2 py-10">
      <Projects
        data={search}
        amount={22}
        toolbar={<Toolbar data={PROJECTS} setSearch={setSearch} />}
      />
    </div>
  );
};

export default Page;
