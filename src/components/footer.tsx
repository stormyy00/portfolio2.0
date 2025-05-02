import React from "react";
import Link from "next/link";
const Footer = () => {
  return (
    <div className=" text-gray-300 px-6 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h2 className="text-xl font-bold mb-4">Jonathan Trujillo</h2>
          <p className="text-sm">
            Software Engineer <br /> Photographer
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <div className="flex flex-col space-y-2 text-sm">
            <Link href="/" className="hover:text-white">
              Home
            </Link>

            <Link href="/about" className="hover:text-white">
              About Us
            </Link>
            <Link href="/services" className="hover:text-white">
              Projects
            </Link>

            <Link href="/contact" className="hover:text-white">
              Experience
            </Link>
          </div>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Resources</h3>
          <div className="flex flex-col space-y-2 text-sm">
            <Link href="/blog" className="hover:text-white">
              Blog
            </Link>
            <Link href="/faqs" className="hover:text-white">
              FAQs
            </Link>

            <Link href="/privacy-policy" className="hover:text-white">
              Photography
            </Link>
          </div>
        </div>
        <div className="">
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <div className="flex flex-col space-y-2 text-sm">
            <Link href="">Linkedin</Link>
            <Link href="">Github</Link>
            <Link href="">Email</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
