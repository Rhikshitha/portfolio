import { motion } from "framer-motion";

const projects = [
  { title: "ShiftWyse", description: "Employee scheduling platform built with Django & React." },
  { title: "Stitchflow", description: "SaaS renewal dashboard using Next.js & GraphQL." },
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-4xl font-bold text-center mb-8">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="p-6 border border-gray-700 rounded-lg"
            whileHover={{ scale: 1.05 }}
          >
            <h2 className="text-2xl font-bold">{project.title}</h2>
            <p className="mt-2">{project.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
