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
      <div className="absolute bottom-0 left-0 w-full flex items-end justify-between p-6">
        <div className="z-10 flex flex-col h-full border-l-4 pl-4 border-white">
          <p className="text-[30px] sm:text-[40px] md:text-[50px] lg:text-[70px] xl:text-[80px]">
            Jonathan Trujillo
          </p>
          <p className="text-base md:text-xl lg:text-2xl xl:text-3xl">
            Photographer
          </p>
        </div>
        <div className="flex gap-2 h-fit">
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
