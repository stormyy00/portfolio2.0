import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen font-poppins">
      <div className="relative text-7xl text-center font-bold text-jt-lightblue">
        JONATHAN TRUJILLO
        <div className="absolute inset-6 w-full text-outline-white -z-10">
          JONATHAN TRUJILLO
        </div>
        <div className="flex flex-col items-end justify-end">
          <div className="text-5xl font-bold text-outline-white2 mt-6">
            software engineer
          </div>
          <div className="text-5xl font-bold text-outline-white2 mt-0">
            photographer
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
