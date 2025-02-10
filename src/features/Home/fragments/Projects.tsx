import { Project } from "@/types/common";
import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "Pokedex XYZ",
    description:
      "A simple PokeDex application where you can view and catch Pokémon.",
    image: "/assets/pokedex.png?height=400&width=600",
    technologies: ["TypeScript", "React", "GraphQL"],
    link: "#",
  },
  {
    title: "Fluid React Native",
    description: "A simple wrapper to animate your React Native component.",
    image: "/assets/fluid.png?height=400&width=600",
    technologies: ["TypeScript", "React Native"],
    link: "#",
  },
  {
    title: "Cookbook",
    description: "A simple website to find recipes.",
    image: "/assets/cookbook.png?height=400&width=600",
    technologies: ["TypeScript", "React", "Lottie", "Axios"],
    link: "#",
  },
  {
    title: "Wordol",
    description: "A wordle-like website.",
    image: "/assets/wordol.png?height=400&width=600",
    technologies: ["TypeScript", "React", "Lottie"],
    link: "#",
  },
];

type ProjectCard = {
  project: Project;
  index: number;
};

function ProjectCard({ project, index }: ProjectCard) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="grid md:grid-cols-2 gap-8 items-center"
    >
      <div className={`space-y-4 ${index % 2 === 0 ? "md:order-1" : ""}`}>
        <h3 className="text-2xl font-bold text-[#1D1D1D]">{project.title}</h3>
        <p className="text-gray-700">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="text-sm px-3 py-1 bg-[#1D1D1D] text-[#e5e5e5] rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        <motion.a
          href={project.link}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block px-6 py-2 bg-[#1D1D1D] text-[#e5e5e5] hover:bg-gray-800 transition-colors rounded"
        >
          View Project
        </motion.a>
      </div>
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="relative h-[300px] md:h-[400px] overflow-hidden rounded-lg"
      >
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          fill
          className="object-cover"
        />
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen bg-[#e5e5e5] py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-16 text-[#1D1D1D]"
        >
          Personal Projects
        </motion.h2>

        <div className="grid gap-20">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
