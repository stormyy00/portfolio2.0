import Link from "next/link";

const blogs = [
  {
    title: "Firebase & Express JWT Authentication",
    slug: "firebase-express-jwt",
    type: "tech",
    date: "2025-11-25",
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-black text-white relative">
      <div className="absolute inset-0 z-10">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 blur-3xl rounded-full" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 blur-3xl rounded-full transform -translate-x-1/4 translate-y-1/4" />
        <div className="absolute top-1/2 left-1/2 w-1/3 h-1/3 bg-gradient-to-r from-amber-500/20 to-red-500/20 blur-3xl rounded-full transform -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-4 py-3 md:py-6">
        <div className="mb-12 md:mb-24">
          <div className="inline-block mb-2 font-mono text-xs tracking-wider bg-white/10 backdrop-blur-sm px-2 py-1 rounded">
            <span className="text-amber-400">*</span> THOUGHTS & PROJECTS
          </div>
          <div className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter ">
            <span className="">The </span>
            <span className=" bg-jt-lightblue bg-clip-text text-transparent h-f">
              Blog
            </span>
          </div>
          <div className="h-px w-24 bg-gradient-to-r from-jt-lightblue to-purple-500 mb-6" />
          <p className="text-gray-400 max-w-xl text-lg">
            A collection of my thoughts, experiences, and insights on
            development, design, and technology. Coming soon.
          </p>
        </div>
        {blogs.length === 0 ? (
          <div className="flex flex-col items-center justify-center  text-white relative p-4">
            <div>
              There are no blogs available at the moment. Please check back
              later.
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 z-20 relative">
            {blogs.map(({ title, slug, date }, index) => (
              <Link
                key={index}
                href={`/blogs/${slug}`}
                className="
        group
        relative overflow-hidden
        border border-white/40
        bg-white/5
        rounded-xl
        p-6
        flex flex-col
        justify-between
        transition-all duration-300
        hover:border-jt-lightblue/50
        hover:bg-white/10
        hover:shadow-[0_0_25px_rgba(0,200,255,0.15)]
      "
              >
                <div>
                  <h2 className="text-lg font-semibold mb-2 group-hover:text-jt-lightblue transition">
                    {title}
                  </h2>
                  <p className="text-sm text-gray-300">
                    {new Date(date).toLocaleDateString()}
                  </p>
                </div>

                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-jt-lightblue/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;

{
  /* // <div className='flex flex-col items-center justify-center h-screen text-white relative'>
    //     <div className="bg-gradient-to-r from-[#3CCDE3]/40 to-[#0B00A4]/40 blur-3xl w-1/3 h-3/5 absolute -top-[20%] -right-0 -z-10 " />
    //   <div className="bg-gradient-to-r from-[#3CCDE3]/40 to-[#0B00A4]/40 blur-3xl w-1/3 h-3/5 absolute -bottom-[20%] left-0 -z-10 " />
    //   There are no blogs available at the moment. Please check back later. */
}
