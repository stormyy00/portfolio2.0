"use client";

import Projects from "@/components/projects";
import Toolbar from "@/components/toolbar";
import { PROJECTS } from "@/data/projects";
import { useState } from "react";

const Page = () => {
  const [search, setSearch] = useState(PROJECTS);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-0">
      <Toolbar data={PROJECTS} setSearch={setSearch} />
      <Projects data={search} amount={22} />
    </div>
  );
};

export default Page;
