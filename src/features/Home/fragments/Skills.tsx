import { motion } from "framer-motion";
import { FaJs, FaReact, FaAws, FaGithub } from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiFirebase,
  SiTerraform,
  SiJest,
  SiRedux,
  SiAxios,
  SiStorybook,
  SiJira,
  SiGraphql,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

const topSkills = [
  { name: "JavaScript", icon: FaJs },
  { name: "TypeScript", icon: SiTypescript },
  { name: "React JS", icon: FaReact },
  { name: "Next JS", icon: SiNextdotjs },
];

const otherSkills = [
  { name: "React Native", icon: TbBrandReactNative },
  { name: "Firebase", icon: SiFirebase },
  { name: "AWS", icon: FaAws },
  { name: "Terraform", icon: SiTerraform },
  { name: "GitHub Actions", icon: FaGithub },
  { name: "Jest", icon: SiJest },
  { name: "Redux", icon: SiRedux },
  { name: "Axios", icon: SiAxios },
  { name: "Storybook", icon: SiStorybook },
  { name: "JIRA", icon: SiJira },
  { name: "GraphQL", icon: SiGraphql },
];

export default function Skills() {
  return (
    <section id="skills" className="min-h-screen bg-[#1D1D1D] py-20">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-16 text-[#d9d9d9] text-center"
        >
          Skills
        </motion.h2>

        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-[#d9d9d9] text-center">
            Top Skills
          </h3>
          <div className="flex justify-center flex-wrap gap-8">
            {topSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center"
              >
                <skill.icon size={48} className="text-gray-400 mb-2" />
                <p className="text-center text-gray-300">{skill.name}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-8 text-[#d9d9d9] text-center">
            Other Skills
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
            {otherSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center"
              >
                <skill.icon size={36} className="text-gray-400 mb-2" />
                <p className="text-center text-gray-300 text-sm">
                  {skill.name}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
