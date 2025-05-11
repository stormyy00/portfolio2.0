import Image from "next/image";
import backgorund from "../../../public/landing.jpg";
import Link from "next/link";

const Landing = () => {
  return (
    <div className="flex relative h-[90vh] w-full justify-center text-white">
      <div className="absolute inset-0">
        <Image
          src={backgorund}
          alt="UCR Background"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="absolute min-h-72 w-full bg-gradient-to-r from-[#00000081] to-[#080909] opacity-[75%] md:h-full" />
      <div className="absolute bottom-0 left-0 z-10 w-full flex flex-col md:flex-row items-start md:items-end justify-between p-6 md:p-12 gap-6">
        {/* Text Block */}
        <div className="flex flex-col border-l-4 border-white pl-4">
          <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold">
            Jonathan Trujillo
          </p>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl">
            Photographer
          </p>
        </div>
        <div className="flex gap-3">
          <Link
            href="/photography"
            className="px-4 py-2 rounded-full border border-white text-sm font-medium transition hover:bg-white hover:text-black"
          >
            About
          </Link>
          <Link
            href="/photography/gallery"
            className="px-4 py-2 rounded-full border border-white text-sm font-medium transition hover:bg-white hover:text-black"
          >
            Gallery
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;
