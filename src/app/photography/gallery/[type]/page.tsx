import React from "react";

export async function generateStaticParams() {
  return [{ type: "portraits" }, { type: "events" }, { type: "products" }];
}

const Page = ({ params }: { params: { type: string } }) => {
  return <div>{params.type}</div>;
};

export default Page;
