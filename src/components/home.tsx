import React from "react";

const Home = () => {
  return (
    <div className="relative flex flex-col justify-center items-center h-screen font-poppins w-full">
      <div className="bg-gradient-to-r from-[#3CCDE3]/40 to-[#0B00A4]/40 blur-3xl w-1/3 h-3/5 absolute -top-[20%] right-4 -z-10 overflow-clip" />
      <div className="bg-gradient-to-r from-[#3CCDE3]/40 to-[#0B00A4]/40 blur-3xl w-1/3 h-3/5 absolute -bottom-[20%] left-0 -z-10 overflow-clip" />
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full" />
        <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-indigo-400 rounded-full" />
        <div className="absolute top-1/2 left-3/4 w-2 h-2 bg-blue-400 rounded-full" />
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-indigo-500 rounded-full" />
      </div>
      <div className="relative w-fit text-5xl md:text-7xl text-center font-bold text-jt-lightblue">
        JONATHAN TRUJILLO
        <div className="absolute inset-4 md:inset-6 w-fit md:w-full text-outline-white -z-10">
          JONATHAN TRUJILLO
        </div>
        <div className="flex flex-col items-center md:items-end justify-end">
          <div className="text-3xl md:text-5xl font-bold text-outline-white2 mt-6">
            software engineer
          </div>
          <div className="text-3xl md:text-5xl font-bold text-outline-white2 mt-0">
            photographer
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
