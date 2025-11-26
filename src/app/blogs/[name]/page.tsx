import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import Back from "./_back";

export async function generateStaticParams() {
  const blogsDir = path.join(process.cwd(), "src/blogs");
  const files = fs.readdirSync(blogsDir);

  return files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => ({
      name: file.replace(".mdx", ""),
    }));
}

export default function Page({ params }: { params: { name: string } }) {
  const filePath = path.join(process.cwd(), "src/blogs", `${params.name}.mdx`);

  if (!fs.existsSync(filePath)) {
    return <div>Post not found</div>;
  }

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw); // frontmatter + MDX body

  return (
    <div className="relative min-h-screen w-full overflow-hidden text-white">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(80%_60%_at_20%_0%,rgba(80,71,163,0.15),transparent_70%)]" />

      <div className="max-w-5xl mx-auto px-6 md:px-8 py-12 md:py-10">
        <div className="flex flex-col justify-start items-start mb-4 mt-2">
          <Back />
          <div className="inline-block px-3 py-1 mt-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 font-mono text-xs tracking-wider">
            <span className="text-amber-400">*</span> THOUGHTS & PROJECTS
          </div>
        </div>

        <div className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight mb-6">
          {data.title || "Blog Post"}
        </div>

        <div className="flex items-center gap-4 mb-8">
          <span className="px-4 py-1 rounded-full bg-jt-lightblue/20 border border-jt-lightblue/40 backdrop-blur-md text-sm">
            {data.type || "Unknown"}
          </span>
          <span className="text-gray-400 text-sm">{data.date}</span>
        </div>

        {/* MDX Content */}
        <article className="prose prose-invert prose-headings:text-white prose-a:text-jt-lightblue prose-pre:bg-white/10 prose-pre:border prose-pre:border-white/10 max-w-none tracking-wide leading-relaxed">
          <MDXRemote source={content} />
        </article>
      </div>
    </div>
  );
}
