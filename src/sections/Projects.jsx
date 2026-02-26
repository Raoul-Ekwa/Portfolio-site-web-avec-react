import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaMobileAlt,
  FaGlobe,
  FaBitcoin,
} from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const projectList = [
  {
    name: "Projet React Native",
    description:
      "📱 Application mobile de gestion des cartes de fidélité pour un supermarché, développée avec React Native",
    link: "https://github.com/NzetemMartin/Application-Mobile-SantaLucia",
    demo: "https://drive.google.com/file/d/103FBBFNXfl6q0Hll_8cr_J8TQs7L7hfN/preview",
    icon: <FaMobileAlt className="text-blue-500 text-3xl" />,
  },
  {
    name: "Portfolio Web",
    description: "🌐 Site personnel moderne développé en React et TailwindCSS.",
    link: "https://github.com/NzetemMartin/Portfolio-site-web-avec-react",
    demo: "https://drive.google.com/file/d/1JF1SA9yoixq_lFoGaRQxWdUnIVDQowZC/preview",
    icon: <FaGlobe className="text-purple-500 text-3xl" />,
  },
  {
    name: "Projet React",
    description:
      "💻 Application web dynamique, responsive et rapide utilisant React, JavaScript, Node.js, Express, PostgreSQL, RESTful API et JWT.",
    link: "https://github.com/NzetemMartin/wineApp-Frontend",
    demo: "https://drive.google.com/file/d/10PomfckPjKi2B4gfT0bs_vNXXp91SSgd/preview",
    icon: <FaReact className="text-cyan-500 text-3xl" />,
  },
  {
    name: "API Backend Node.js",
    description:
      "⚙️ Création d'une API REST avec Node.js, Express et PostgreSQL pour gérer les données et les utilisateurs.",
    link: "https://github.com/NzetemMartin/wineApp-Backend",
    demo: "https://drive.google.com/file/d/1ENjyCYJe-e4byxU1OQJkFVMeQ80siEf7/preview",
    icon: <FaNodeJs className="text-green-600 text-3xl" />,
  },
  {
    name: "BitChest",
    description:
      "💰 Plateforme web Symfony 7 / PHP 8.2 de gestion de crypto-monnaies avec comptes clients et admin, wallet, transactions, graphiques Chart.js et tests exhaustifs.",
    link: "https://github.com/NzetemMartin/BitChest",
    demo: "https://drive.google.com/file/d/16AF_O_NqWzMU4U9nFwI3c6QaS9BhaMd3/preview",
    icon: <FaBitcoin className="text-yellow-500 text-3xl" />,
  },
];

const Projects = () => {
  const [showModal, setShowModal] = useState(false);
  const [demoUrl, setDemoUrl] = useState("");
  const [loading, setLoading] = useState(true);

  const openModal = (url) => {
    setDemoUrl(url);
    setShowModal(true);
    setLoading(true); // Spinner actif
  };

  const closeModal = () => {
    setShowModal(false);
    setDemoUrl("");
  };

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-b from-white to-blue-50 relative"
    >
      <motion.h2
        className="text-4xl font-extrabold text-center mb-12 text-gray-800"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Mes Projets
      </motion.h2>

      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6">
        {projectList.map((project, index) => (
          <motion.div
            key={project.name}
            className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center justify-between border border-gray-100 hover:shadow-2xl transition-all"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="mb-4">{project.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">
              {project.name}
            </h3>
            <p className="text-gray-600 text-center mb-6">
              {project.description}
            </p>

            <div className="flex gap-3 mt-auto">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all shadow-md"
              >
                Voir le projet
              </a>

              {project.demo && (
                <button
                  onClick={() => openModal(project.demo)}
                  className="px-5 py-2 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-all shadow-md"
                >
                  Demo
                </button>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {showModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="bg-white w-[95%] max-w-6xl h-[90%] rounded-lg overflow-hidden shadow-lg relative flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-600 hover:text-red-500 text-2xl z-10"
            >
              <IoMdClose />
            </button>

            {loading && (
              <div className="absolute inset-0 flex items-center justify-center z-20 bg-black bg-opacity-30">
                <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-20 w-20"></div>
              </div>
            )}

            <iframe
              src={demoUrl}
              title="Demo Project"
              className="w-full h-full border-none"
              allow="fullscreen"
              onLoad={() => setLoading(false)}
            ></iframe>
          </div>
        </div>
      )}

      <style>{`
        .loader {
          border-top-color: #3498db;
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
};

export default Projects;
