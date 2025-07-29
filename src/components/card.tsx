import { MoreHorizontal, Code, Globe } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type CardProps = {
  name: string;
  description: string;
  slug: string;
  image: StaticImageData;
  link: {
    name: string;
    link: string;
  }[];
};

const Card = ({ name, description, slug, image, link }: CardProps) => {
  return (
    <div className="relative w-44 md:w-full h-52 md:h-60 bg-gradient-to-br from-slate-900/90 via-slate-800/90 to-slate-900/90 backdrop-blur-md border border-slate-700/50 rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 hover:border-cyan-400/50 hover:shadow-cyan-500/20">
      <div className="absolute inset-0 opacity-30">
        <Image src={image} alt={name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/60" />
      </div>

      <div className="relative z-10 h-full flex flex-col">
        <div className="flex justify-between items-start p-6 pb-2">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              <span className="text-emerald-400 text-xs font-mono uppercase tracking-wider">
                Active
              </span>
            </div>
            <Link href={`/projects/${slug}`}>
              <div className="text-white font-bold text-xl leading-tight hover:text-cyan-300 transition-colors cursor-pointer">
                {name}
              </div>
            </Link>
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger className="cursor-pointer" asChild>
              <MoreHorizontal className="w-5 h-5 text-slate-400 hover:text-cyan-400 transition-colors" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-slate-900/95 backdrop-blur-lg text-white border border-slate-700/50 shadow-2xl rounded-xl">
              <DropdownMenuLabel className="text-cyan-400 font-mono text-xs uppercase tracking-wider">
                External Links
              </DropdownMenuLabel>
              <DropdownMenuSeparator className="bg-slate-700/50" />
              {link.map(({ name, link }, index) => (
                <DropdownMenuItem
                  key={index}
                  className="hover:bg-slate-800/50 focus:bg-slate-800/50 rounded-lg"
                >
                  <Link
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 w-full text-slate-200 hover:text-cyan-300 transition-colors"
                  >
                    {name.toLowerCase().includes("github") ? (
                      <Code className="w-4 h-4" />
                    ) : (
                      <Globe className="w-4 h-4" />
                    )}
                    {name}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="flex-1 px-6">
          <p className="text-slate-300 text-sm leading-relaxed line-clamp-3">
            {description}
          </p>
        </div>

        <div className="p-6 pt-2">
          <Link href={`/projects/${slug}`}>
            <div className="flex items-center justify-between group-hover:translate-x-1 transition-transform duration-300">
              <span className="text-cyan-400 text-sm font-medium hover:text-cyan-300 transition-colors">
                View Project →
              </span>
              <div className=" hidden md:flex space-x-1">
                <div className="w-2 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full" />
                <div className="w-4 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full" />
                <div className="w-2 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full" />
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400/20 via-blue-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm -z-10" />
    </div>
  );
};

export default Card;
