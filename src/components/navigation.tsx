"use client";
import Link from "next/link";
import { NAVIGATION } from "@/data/navigation";
import { usePathname } from "next/navigation";

const Navigation = () => {
  const path = usePathname();

  return (
    <nav className="w-full py-6 px-4 md:px-8">
      <div className="mx-auto flex flex-col gap-2">
        <div className="flex justify-between items-center w-full">
          <Link
            href="/"
            className="text-2xl font-bold text-jt-lightblue hover:opacity-90 transition-opacity"
          >
            Jonathan Trujillo
          </Link>
          <div className="flex gap-3">
            {NAVIGATION.sub.map(({ name, link }, index) => (
              <Link
                key={index}
                href={link}
                className="border border-jt-lightblue text-jt-lightblue px-4 py-1 rounded-full text-sm font-medium hover:bg-jt-lightblue hover:text-white transition-colors duration-200"
              >
                {name}
              </Link>
            ))}
          </div>
        </div>

        <div className="hidden md:flex space-x-8 mt-0">
          {NAVIGATION.main.map(({ name, link, pathname }, index) => (
            <Link
              key={index}
              href={link}
              className={`text-xl font-medium transition-colors duration-200 hover:text-jt-lightblue ${
                path.includes(pathname)
                  ? "text-jt-lightblue border-b-2 border-jt-lightblue pb-1"
                  : "text-white"
              }`}
            >
              {name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
