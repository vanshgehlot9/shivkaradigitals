"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    name: "Jeerihaveli",
    type: "Hotel Website",
    description: "A modern, responsive website for Jeerihaveli hotel, showcasing rooms, amenities, and online booking.",
    features: [
      "Responsive design for all devices",
      "Online room booking integration",
      "Photo gallery and amenities showcase",
    ],
    image: "/placeholder.jpg",
    cta: "View Flowchart",
    ctaLink: "#",
    label: "2024"
  },
  {
    name: "Tree Nuts",
    type: "E-commerce Store",
    description: "A full-featured e-commerce platform for Tree Nuts, including product catalog, cart, and checkout.",
    features: [
      "Product catalog & filtering",
      "Secure checkout & payments",
      "Order tracking dashboard",
    ],
    image: "/placeholder.jpg",
    cta: "View Flowchart",
    ctaLink: "#",
    label: "2024"
  },
  {
    name: "Balaji Solar Logistic",
    type: "Logistics UI",
    description: "A logistics management dashboard for Balaji Solar, streamlining operations and tracking.",
    features: [
      "Real-time shipment tracking",
      "Analytics & reporting",
      "User role management",
    ],
    image: "/placeholder.jpg",
    cta: "View Flowchart",
    ctaLink: "#",
    label: "2024"
  },
  {
    name: "Pigo Taxi Admin",
    type: "Admin APK",
    description: "Admin panel APK for Pigo Taxi, enabling management of drivers, rides, and analytics.",
    features: [
      "Driver & ride management",
      "Live analytics dashboard",
      "Push notifications",
    ],
    image: "/placeholder.jpg",
    cta: "View Flowchart",
    ctaLink: "#",
    label: "2023"
  },
  {
    name: "Vehicle on Rent",
    type: "Rental APK",
    description: "Mobile app for renting vehicles, with real-time availability and booking.",
    features: [
      "Vehicle availability calendar",
      "Instant booking system",
      "User reviews & ratings",
    ],
    image: "/placeholder.jpg",
    cta: "View Flowchart",
    ctaLink: "#",
    label: "2023"
  },
  {
    name: "3D Models for Handicraft",
    type: "3D Modeling",
    description: "High-quality 3D models created for handicraft products, enhancing online presentation.",
    features: [
      "Photorealistic 3D renders",
      "Optimized for web & AR",
      "Custom model requests",
    ],
    image: "/placeholder.jpg",
    cta: "View Flowchart",
    ctaLink: "#",
    label: "2023"
  },
];

const fadeIn: Record<string, any> = {
  hidden: { opacity: 0 },
  visible: (custom = 0) => ({
    opacity: 1,
    transition: { delay: custom, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

const fadeInUp: Record<string, any> = {
  hidden: { opacity: 0, y: 24 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom, duration: 0.4, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

const zoomIn: Record<string, any> = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (custom = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: custom, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

const slideInLeft: Record<string, any> = {
  hidden: { opacity: 0, x: -48 },
  visible: (custom = 0) => ({
    opacity: 1,
    x: 0,
    transition: { delay: custom, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

const slideInRight: Record<string, any> = {
  hidden: { opacity: 0, x: 48 },
  visible: (custom = 0) => ({i
    opacity: 1,
    x: 0,
    transition: { delay: custom, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

export default function FeaturedProjects() {
  return (
    <motion.section
      className="py-20 bg-gray-50"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeIn}
      custom={0}
    >
      <motion.p
        className="text-center text-sm font-semibold text-blue-600 tracking-widest mb-2"
        variants={fadeInUp}
        custom={0.2}
      >
        REAL-WORLD RESULTS
      </motion.p>
      <motion.h2
        className="text-4xl font-bold text-center mb-3"
        variants={zoomIn}
        custom={0.3}
      >
        Featured Projects
      </motion.h2>
      <motion.p
        className="text-center text-gray-500 max-w-xl mx-auto mb-12"
        variants={fadeIn}
        custom={0.35}
      >
        See how we transformed concepts into engaging digital experiences for our clients.
      </motion.p>
      <div className="space-y-16 max-w-4xl mx-auto">
        {projects.map((project, idx) => (
          <div
            key={project.name}
            className="flex flex-col md:flex-row items-center md:items-stretch bg-white rounded-2xl shadow-lg overflow-hidden"
          >
            {/* Left Panel */}
            <motion.div
              className="flex-1 p-8 flex flex-col justify-center"
              variants={slideInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={0.45}
            >
              <span className="text-xs uppercase text-gray-400 font-bold tracking-wider mb-1">{project.label}</span>
              <h3 className="text-2xl font-semibold mb-2">{project.name}</h3>
              <span className="text-blue-600 font-medium text-sm mb-2 block">{project.type}</span>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <ul className="mb-6 space-y-2">
                {project.features.map((feature, i) => (
                  <motion.li
                    key={feature}
                    className="flex items-start text-gray-700"
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    custom={0.55 + i * 0.1}
                  >
                    <span className="mr-2 mt-1 text-blue-500">•</span> {feature}
                  </motion.li>
                ))}
              </ul>
              <motion.a
                href={project.ctaLink}
                className="inline-block bg-blue-600 text-white px-5 py-2 rounded-lg font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-200"
                variants={zoomIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                custom={0.85}
                whileHover={{ scale: 1.08, boxShadow: "0 4px 24px rgba(37, 99, 235, 0.15)" }}
              >
                {project.cta} ↗
              </motion.a>
            </motion.div>
            {/* Right Panel */}
            <motion.div
              className="flex-1 min-h-[220px] relative"
              variants={slideInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={0.45}
            >
              <Image
                src={project.image}
                alt={project.name}
                fill
                style={{ objectFit: "cover" }}
                className="md:rounded-r-2xl md:rounded-bl-none rounded-b-2xl"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={idx === 0}
              />
            </motion.div>
          </div>
        ))}
      </div>
    </motion.section>
  );
} 