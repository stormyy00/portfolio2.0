import React from "react";
import Link from "next/link";
import { GithubIcon, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/experience", label: "Experience" },
  ];

  const resources = [
    { href: "/blog", label: "Blog" },
    { href: "/faqs", label: "FAQs" },
    { href: "/photography", label: "Photography" },
  ];

  return (
    <div className=" text-gray-300 py-10 flex flex-col items-center">
      <div className="w-4/5 mx-auto px-4 grid grid-cols-1 justify-items-center md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-2">Jonathan Trujillo</h2>
          <p className="text-sm mb-4">Software Engineer & Photographer</p>
          <div className="flex space-x-4">
            <Link href="#" aria-label="LinkedIn">
              <Linkedin size={24} className="hover:text-white" />
            </Link>
            <Link href="#" aria-label="GitHub">
              <GithubIcon size={24} className="hover:text-white" />
            </Link>
            <Link href="mailto:your@email.com" aria-label="Email">
              <Mail size={24} className="hover:text-white" />
            </Link>
          </div>
        </div>
        <div className="flex justify-between w-full md:w-3/5 md:col-span-2">
          <div>
            <div className="text-xl font-semibold mb-3">Quick Links</div>
            <ul className="space-y-1 text-sm">
              {quickLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="hover:text-white">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-xl font-semibold mb-3">Resources</div>
            <ul className="space-y-1 text-sm">
              {resources.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="hover:text-white">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} Jonathan Trujillo. All rights
        reserved.
      </div>
    </div>
  );
};

export default Footer;
