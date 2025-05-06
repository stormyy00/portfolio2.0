export async function generateStaticParams() {
  return [{ type: "tech" }, { type: "life" }, { type: "travel" }];
}

const Page = ({ params }: { params: { type: string } }) => {
  return (
    <div>
      <h1>Blog Category: {params.type}</h1>
    </div>
  );
};

export default Page;
