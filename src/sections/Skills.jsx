import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaCss3Alt,
  FaJsSquare,
  FaHtml5,
  FaDocker,
  FaPhp,
  FaShieldAlt,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiExpress,
  SiTypescript,
  SiSymfony,
  SiChartdotjs,
  SiMysql,
} from "react-icons/si";

const skills = [
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500 text-4xl" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-600 text-4xl" /> },
  {
    name: "JavaScript",
    icon: <FaJsSquare className="text-yellow-400 text-4xl" />,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="text-blue-500 text-4xl" />,
  },
  { name: "React", icon: <FaReact className="text-sky-500 text-4xl" /> },
  {
    name: "React Native",
    icon: <FaReact className="text-blue-400 text-4xl" />,
  },
  { name: "Node.js", icon: <FaNodeJs className="text-green-600 text-4xl" /> },
  {
    name: "Express.js",
    icon: <SiExpress className="text-gray-800 text-4xl" />,
  },
  { name: "MongoDB", icon: <SiMongodb className="text-green-700 text-4xl" /> },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql className="text-blue-800 text-4xl" />,
  },
  {
    name: "TailwindCSS",
    icon: <SiTailwindcss className="text-cyan-500 text-4xl" />,
  },
  { name: "Git", icon: <FaGitAlt className="text-orange-500 text-4xl" /> },
  { name: "Docker", icon: <FaDocker className="text-blue-400 text-4xl" /> },
  // Ajouts pour BitChest
  { name: "PHP 8", icon: <FaPhp className="text-purple-600 text-4xl" /> },
  {
    name: "Symfony 7",
    icon: <SiSymfony className="text-indigo-500 text-4xl" />,
  },
  {
    name: "Chart.js",
    icon: <SiChartdotjs className="text-blue-500 text-4xl" />,
  },
  { name: "MySQL", icon: <SiMysql className="text-blue-700 text-4xl" /> },
  { name: "Sécurité", icon: <FaShieldAlt className="text-red-500 text-4xl" /> },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-b from-white to-blue-50"
    >
      <motion.h2
        className="text-4xl font-extrabold text-center mb-12 text-gray-800"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Compétences
      </motion.h2>

      <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-8 px-6">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            className="bg-white rounded-xl shadow-lg px-6 py-5 flex flex-col items-center justify-center border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition-all"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.1, rotate: 2 }}
          >
            {skill.icon}
            <span className="mt-3 font-semibold text-gray-700">
              {skill.name}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
