"use client";
import { useParams } from "next/navigation";
import { useMemo, useState } from "react";
import { projects } from "../../../lib/projects";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function ProjectDetailsPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const project = useMemo(() => projects.find(p => p.slug === slug), [slug]);
  const [current, setCurrent] = useState(0);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
          <Link href="/" className="text-lavender underline">Go back home</Link>
        </div>
      </div>
    );
  }

  const screenshots = project.screenshots || [];
  const goNext = () => setCurrent((c) => (c + 1) % screenshots.length);
  const goPrev = () => setCurrent((c) => (c - 1 + screenshots.length) % screenshots.length);

  return (
    <div className="min-h-screen bg-very-light-pink py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-4xl font-bold mb-2 text-gray-900">{project.name}</h1>
        <p className="text-lavender font-medium mb-4">{project.type}</p>
        <p className="text-gray-700 mb-6">{project.description}</p>

        {/* Screenshots Carousel */}
        <div className="mb-8 relative">
          <div className="overflow-hidden rounded-lg border border-lavender/20 h-64 flex items-center justify-center bg-gray-100">
            <AnimatePresence initial={false} mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
                className="w-full h-full flex items-center justify-center absolute top-0 left-0"
              >
                <Image src={screenshots[current]} alt={project.name + ' screenshot'} width={600} height={400} className="object-cover w-full h-64" />
              </motion.div>
            </AnimatePresence>
          </div>
          {/* Carousel Controls */}
          {screenshots.length > 1 && (
            <>
              <button onClick={goPrev} className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-lavender text-lavender hover:text-white rounded-full p-2 shadow transition-colors z-10">
                &#8592;
              </button>
              <button onClick={goNext} className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-lavender text-lavender hover:text-white rounded-full p-2 shadow transition-colors z-10">
                &#8594;
              </button>
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
                {screenshots.map((_, idx) => (
                  <button
                    key={idx}
                    className={`w-3 h-3 rounded-full border-2 ${idx === current ? 'bg-lavender border-lavender' : 'bg-white border-gray-300'} transition-colors`}
                    onClick={() => setCurrent(idx)}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Tech Stack */}
        <div className="mb-6">
          <h2 className="text-xl font-bold mb-2">Tech Stack</h2>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span key={tech} className="px-3 py-1 bg-gradient-to-r from-lavender/20 to-pink/20 text-gray-700 text-sm rounded-full border border-lavender/20">{tech}</span>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="mb-6">
          <h2 className="text-xl font-bold mb-2">Features</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            {project.features?.map((feature, idx) => (
              <li key={idx}>{feature}</li>
            ))}
          </ul>
        </div>

        {/* Challenges */}
        {project.challenges && (
          <div className="mb-6">
            <h2 className="text-xl font-bold mb-2">Challenges & Solutions</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              {project.challenges.map((challenge, idx) => (
                <li key={idx}>{challenge}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Links */}
        <div className="flex flex-wrap gap-4 mt-8">
          {project.demoLink && project.demoLink !== "#" && (
            <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-lavender to-pink text-white px-6 py-2 rounded-full font-medium shadow hover:shadow-lg transition-all">Live Demo</a>
          )}
          {project.repoLink && project.repoLink !== "#" && (
            <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="bg-gray-900 text-white px-6 py-2 rounded-full font-medium shadow hover:shadow-lg transition-all">Source Code</a>
          )}
          <Link href="/" className="bg-white border border-lavender text-lavender px-6 py-2 rounded-full font-medium shadow hover:bg-lavender hover:text-white transition-all">Back to Home</Link>
        </div>
      </div>
    </div>
  );
} 