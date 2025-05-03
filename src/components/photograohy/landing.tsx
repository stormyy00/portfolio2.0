import Image from "next/image";
import backgorund from "../../../public/landing.jpg";
import Link from "next/link";

const Landing = () => {
  return (
    <div className="flex min-h-96 w-full justify-center text-white md:h-screen">
      <div className="absolute h-96 w-full md:h-full">
        <Image
          className="h-full object-cover"
          src={backgorund}
          alt="UCR Background"
          fill
        />
      </div>
      <div className="absolute min-h-80 w-full bg-gradient-to-r from-[#00000081] to-[#080909] opacity-[75%] md:h-full" />
      <div className=" absolute  z-10 flex flex-col items-center justify-center h-full">
        <p className="text-center text-[30px] sm:text-[40px] md:text-[50px] lg:text-[70px] xl:text-[80px]">
          Jonathan Trujillo
        </p>
        <div className="mb-2 mt-1 h-[2px] w-28 bg-[#f9f9f9] sm:mb-3 sm:h-[3px] sm:w-36 md:mb-4 lg:mb-6 lg:h-1 lg:w-44" />
        <p className="text-base md:text-xl lg:text-2xl xl:text-3xl">
          Photographer
        </p>
        <div className="flex gap-2">
          <Link
            href="/photography"
            className="mt-4 flex items-center justify-center rounded-full border border-white bg-transparent px-4 py-2 text-sm font-medium text-white transition duration-300 ease-in-out hover:bg-white hover:text-black"
          >
            About
          </Link>
          <Link
            href="photography/gallery"
            className="mt-4 flex items-center justify-center rounded-full border border-white bg-transparent px-4 py-2 text-sm font-medium text-white transition duration-300 ease-in-out hover:bg-white hover:text-black"
          >
            Gallery
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;
