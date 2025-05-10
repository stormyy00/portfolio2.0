import { MoreHorizontal } from "lucide-react";
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
    <div className="relative w-80 h-52 shadow-md m-4 text-white rounded-xl overflow-hidden">
      <Link href={`/projects/${slug}`}>
        <Image
          src={image}
          alt={name}
          className="w-full h-full object-cover absolute inset-0 z-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/30 z-10" />
      </Link>

      <div className="absolute top-0 right-0 m-2 z-20">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="z-20 p-1 rounded-full hover:bg-white/10">
              <MoreHorizontal className="text-white" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-black text-white border border-white/20 z-30">
            <DropdownMenuLabel>Quick Links</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {link.map(({ name, link }, index) => (
              <DropdownMenuItem key={index}>
                <Link
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 w-full"
                >
                  {name}
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="absolute bottom-0 left-0 m-1 ml-6 z-20">
        <p className="font-bold text-white text-2xl">{name}</p>
        <p className="font-light text-white text-lg">{description}</p>
      </div>
    </div>
  );
};

export default Card;
