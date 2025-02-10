import { motion } from "framer-motion";
import Image from "next/image";

const experiences = [
  {
    company: "Traveloka",
    logo: "/assets/traveloka-logo.png",
    position: "Frontend Engineer",
    period: "September 2021 - Present",
    achievements: [
      "Lead the transition from legacy JavaScript to TypeScript, improving maintainability and reducing runtime errors.",
      "Spearheaded the development of the Traveloka supplier portal website.",
      "Lead a cross-functional team for the Traveloka career site revamp project.",
      "Developed and implemented a self-service dashboard that reduced user waiting time by 75%, significantly enhancing team productivity and operational efficiency.",
      "Collaborated with the Engineering Manager to create Architecture Decision Records (ADR) for the self-service dashboard, ensuring clear communication and alignment across teams.",
      "Mentored junior developers, conducting code reviews, and knowledge sharing sessions.",
    ],
  },
  {
    company: "KodeFox",
    logo: "/assets/kodefox-logo.png",
    position: "Mobile Developer",
    period: "January 2019 - September 2021",
    achievements: [
      "Developed and maintained multiple high-performance mobile applications using React Native, resulting in a 4+ star rating on both App Store and Google Play.",
      "Implemented UI/UX designs and animations, enhancing user engagement and increasing daily active users by 40%.",
      "Collaborated with cross-functional teams to deliver features on time and within scope, contributing to a 100% on-time project delivery rate.",
      "Implemented OTA update feature.",
      "Mentored junior developers and conducting code reviews.",
    ],
  },
];

type WorkExperience = {
  company: string;
  logo: string;
  position: string;
  period: string;
  achievements: string[];
};

type Props = {
  experience: WorkExperience;
  index: number;
};

function ExperienceCard({ experience, index }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="bg-[#2A2A2A] p-6 rounded-lg shadow-lg md:ml-16 ml-0 relative"
    >
      <div className="absolute left-0 top-1/2 transform -translate-x-[2.25rem] -translate-y-1/2 w-4 h-4 bg-gray-700 rounded-full border-4 border-[#1D1D1D]"></div>
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-2xl font-bold text-[#d9d9d9]">
            {experience.company}
          </h3>
          <h4 className="text-xl font-semibold text-[#d9d9d9]">
            {experience.position}
          </h4>
        </div>
        <div className="relative w-16 h-16">
          <Image
            src={experience.logo || "/placeholder.svg"}
            alt={`${experience.company} logo`}
            fill
            className="object-contain"
          />
        </div>
      </div>
      <p className="text-gray-400 mb-4">{experience.period}</p>
      <ul className="space-y-2">
        {experience.achievements.map((achievement, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="text-gray-300"
          >
            • {achievement}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}

export default function Experience() {
  return (
    <section id="works" className="min-h-screen bg-[#1D1D1D] py-20">
      <div className="container px-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-8 md:mb-16 text-[#d9d9d9]"
        >
          Work Experience
        </motion.h2>

        <div className="relative space-y-12 overflow-hidden">
          <div className="hidden md:flex absolute left-2 md:left-8 top-0 bottom-0 w-0.5 bg-gray-700"></div>

          {experiences.map((exp, index) => (
            <ExperienceCard key={exp.company} experience={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
