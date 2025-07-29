"use client";

import Image from "next/image";
import { Projectprops } from "@/types";
import Link from "next/link";
import { Link as Scroll } from "react-scroll";
import { ArrowLeft, ExternalLink, Calendar, User } from "lucide-react";

const Project = ({
  name,
  description,
  techstack,
  link,
  image,
  authors = ["Jonathan Trujilo"],
}: Projectprops) => {
  return (
    <div
      className="min-h-screen relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #0f172a 0%, #1e293b 25%, #0f172a 50%, #1e293b 75%, #0f172a 100%)",
      }}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-60 right-20 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-300" />
        <div className="absolute bottom-32 left-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-700" />

        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="relative z-10">
        <div className="container mx-auto px-8 py-6">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="font-mono text-sm">cd ../projects</span>
          </Link>
        </div>

        <div className="container mx-auto px-8 mb-12">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-slate-900/90 via-slate-800/90 to-slate-900/90 backdrop-blur-md border border-slate-700/50 shadow-2xl">
            <div className="relative h-80 overflow-hidden">
              <Image src={image} alt={name} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse shadow-lg" />
                  <span className="text-white font-mono text-sm uppercase tracking-wider bg-emerald-500/90 px-3 py-1 rounded-full backdrop-blur-sm border border-emerald-400/50 shadow-lg">
                    Production Ready
                  </span>
                </div>
                <h1 className="text-5xl font-bold text-white mb-2">{name}</h1>
                <div className="flex items-center gap-4 text-slate-300">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span className="font-mono text-sm">
                      Oct 2024 - Mar 2025
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span className="font-mono text-sm">
                      {authors.join(", ")}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-8">
          <div className="grid lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-6">
                <div className="bg-slate-900/90 backdrop-blur-md border border-slate-700/50 rounded-2xl p-6">
                  <h3 className="text-cyan-400 font-mono text-sm uppercase tracking-wider mb-4">
                    Tech Stack
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {techstack.map((tech, index) => (
                      <span
                        key={index}
                        className="text-xs font-mono bg-slate-800/50 text-slate-300 px-3 py-1 rounded-full border border-slate-700/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {link && (
                  <div className="bg-slate-900/90 backdrop-blur-md border border-slate-700/50 rounded-2xl p-6">
                    <h3 className="text-cyan-400 font-mono text-sm uppercase tracking-wider mb-4">
                      External Links
                    </h3>
                    <div className="space-y-3">
                      {link.map(({ name, link: url, icon }, index) => (
                        <Link
                          key={index}
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/30 hover:bg-slate-800/50 border border-slate-700/30 hover:border-cyan-400/30 transition-all group"
                        >
                          <div className="w-5 h-5 flex-shrink-0">
                            <Image
                              src={icon}
                              alt={name}
                              width={20}
                              height={20}
                            />
                          </div>
                          <span className="text-slate-300 group-hover:text-cyan-300 transition-colors text-sm">
                            {name}
                          </span>
                          <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 ml-auto transition-colors" />
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                <div className="bg-slate-900/90 backdrop-blur-md border border-slate-700/50 rounded-2xl p-6">
                  <div className="text-cyan-400 font-mono text-sm uppercase tracking-wider mb-4">
                    Quick Navigation
                  </div>
                  <div className="space-y-2">
                    {description.map(({ header, path }, index) => (
                      <Scroll
                        key={index}
                        to={path}
                        smooth={true}
                        duration={800}
                        offset={-100}
                        spy={true}
                        className="block p-2 rounded-lg text-sm text-slate-300 hover:text-cyan-300 hover:bg-slate-800/30 transition-all cursor-pointer border-l-2 border-transparent hover:border-cyan-400"
                      >
                        {header}
                      </Scroll>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="space-y-8">
                {description.map(
                  (
                    { header, description: desc, image: sectionImage, path },
                    index,
                  ) => (
                    <div
                      key={index}
                      id={path}
                      className="bg-slate-900/90 backdrop-blur-md border border-slate-700/50 rounded-2xl p-8 scroll-mt-24"
                    >
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-1 h-8 bg-gradient-to-b from-cyan-400 to-blue-400 rounded-full" />
                        <div>
                          <h2 className="text-2xl font-bold text-white">
                            {header}
                          </h2>
                          <div className="text-cyan-400/60 font-mono text-xs mt-1">
                            ./{path.replace("#", "")}
                          </div>
                        </div>
                      </div>

                      {sectionImage ? (
                        <div className="grid md:grid-cols-2 gap-8">
                          <div className="space-y-4">
                            {Array.isArray(desc) ? (
                              desc.map((paragraph, i) => (
                                <p
                                  key={i}
                                  className="text-slate-300 leading-relaxed"
                                >
                                  {paragraph}
                                </p>
                              ))
                            ) : (
                              <p className="text-slate-300 leading-relaxed">
                                {desc}
                              </p>
                            )}
                          </div>
                          <div className="relative rounded-xl overflow-hidden bg-slate-800/50 border border-slate-700/30">
                            <Image
                              src={sectionImage}
                              alt={header}
                              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity" />
                          </div>
                        </div>
                      ) : (
                        <div className="prose prose-invert max-w-none">
                          {Array.isArray(desc) ? (
                            desc.map((paragraph, i) => (
                              <p
                                key={i}
                                className="text-slate-300 leading-relaxed mb-4"
                              >
                                {paragraph}
                              </p>
                            ))
                          ) : (
                            <p className="text-slate-300 leading-relaxed">
                              {desc}
                            </p>
                          )}
                        </div>
                      )}
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-8 py-12 mt-16">
          <div className="text-center">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-mono text-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Projects
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
