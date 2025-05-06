// app/photography/gallery/[type]/page.tsx

import Gallery from "@/components/photograohy/gallery";
import React from "react";

// This is required for static export with dynamic route
export async function generateStaticParams() {
  return [
    { type: "portraits" },
    { type: "events" },
    { type: "products" },
    // add all valid types you support
  ];
}

const Page = ({ params }: { params: { type: string } }) => {
  return (
    <div>
      <Gallery type={params.type} />
    </div>
  );
};

export default Page;
