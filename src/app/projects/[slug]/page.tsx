// app/projects/[slug]/page.tsx
import { getProjectBySlug, PROJECTS } from "@/data/projects";
import Project from "@/components/project";
import { notFound } from "next/navigation";

type props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  return PROJECTS.map(({ slug }) => ({ slug: slug }));
}

const Page = async ({ params }: props) => {
  const project = getProjectBySlug(params.slug);
  console.log(params);

  if (!project) return notFound();

  const { name, description, techstack, image, short_desc, link, slug } =
    project;

  return (
    <Project
      name={name}
      description={description}
      techstack={techstack}
      image={image}
      short_desc={short_desc}
      link={link}
      slug={slug}
    />
  );
};

export default Page;
