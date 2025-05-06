import React from "react";
import Link from "next/link";
import { GithubIcon, Linkedin, Mail } from "lucide-react";

export default function Footer() {
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
    <div className=" text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-2">Jonathan Trujillo</h2>
          <p className="text-sm mb-4">Software Engineer & Photographer</p>
          <div className="flex space-x-4">
            <Link href="" aria-label="LinkedIn">
              <Linkedin size={24} className="hover:text-white" />
            </Link>
            <Link href="" aria-label="GitHub">
              <GithubIcon size={24} className="hover:text-white" />
            </Link>
            <Link href="" aria-label="Email">
              <Mail size={24} className="hover:text-white" />
            </Link>
          </div>
        </div>

        <nav>
          <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav>
          <h3 className="text-xl font-semibold mb-3">Resources</h3>
          <ul className="space-y-1 text-sm">
            {resources.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="mt-8 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} Jonathan Trujillo. All rights
        reserved.
      </div>
    </div>
  );
}
