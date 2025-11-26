"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

const Back = () => {
  const router = useRouter();
  return (
    <button
      onClick={() => router.push("/blogs")}
      className={`flex relative text-left py-2 px- text-white hover:text-cyan-300 w-full overflow-hidden group transition-all duration-200`}
    >
      <ArrowLeft />
      <span> Back to Blogs</span>
    </button>
  );
};

export default Back;
