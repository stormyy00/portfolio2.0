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
      </div>
      <div className="flex flex-col items-center justify-center  text-white relative p-4">
        <p className=" font-semibold">
          There are no blogs available at the moment. Please check back later.
        </p>
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
