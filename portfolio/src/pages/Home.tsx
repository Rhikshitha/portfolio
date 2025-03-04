import { useState } from "react";
import { motion } from "framer-motion";
import { FaBars, FaGithub, FaLinkedin, FaTimes } from "react-icons/fa";

const Home = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#1a1a1b] text-[#D7DADC] flex flex-col">
      <nav className="fixed top-0 left-0 w-full bg-[#272729] shadow-md p-4 flex justify-between items-center z-50">
        <h1 className="text-xl font-bold text-[#FF4500]">Rhikshitha</h1>
        <div className="hidden md:flex space-x-6">
          <a href="#experience" className="hover:text-[#FF4500]">Experience</a>
          <a href="#skills" className="hover:text-[#FF4500]">Skills</a>
          <a href="#projects" className="hover:text-[#FF4500]">Projects</a>
          <a href="#contact" className="hover:text-[#FF4500]">Contact</a>
        </div>
        <button 
          className="md:hidden text-2xl text-[#FF4500]"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          {isSidebarOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      <div className="flex mt-16">
        <motion.aside 
          initial={{ x: -300 }} 
          animate={{ x: isSidebarOpen ? 0 : -300 }} 
          transition={{ duration: 0.5 }} 
          className={`fixed md:static w-64 bg-[#272729] h-full p-5 ${isSidebarOpen ? 'left-0' : '-left-64'} md:left-0`}
        >
          <div className="flex flex-col items-center">
            <img 
              src="https://via.placeholder.com/100" 
              alt="Profile" 
              className="w-24 h-24 rounded-full border-4 border-[#FF4500]"
            />
            <h2 className="text-lg font-semibold mt-3">Rhikshitha</h2>
            <p className="text-sm text-gray-400">Frontend Engineer | React | TypeScript</p>
            <div className="flex space-x-4 mt-3">
              <a href="#" className="text-xl hover:text-[#FF4500]"><FaGithub /></a>
              <a href="#" className="text-xl hover:text-[#FF4500]"><FaLinkedin /></a>
            </div>
          </div>
        </motion.aside>

        <main className="flex-1 p-5 md:ml-64">
          <section id="experience" className="mb-10">
            <h2 className="text-2xl font-bold mb-3 text-[#FF4500]">Experience</h2>
            <div className="bg-[#272729] p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold">Frontend Engineer at HappyFox</h3>
              <p className="text-sm text-gray-400">Aug 2023 - Present</p>
              <p className="mt-2">Building scalable UI components with React, TypeScript, and Tailwind CSS.</p>
            </div>
          </section>

          <section id="skills" className="mb-10">
            <h2 className="text-2xl font-bold mb-3 text-[#FF4500]">Skills</h2>
            <div className="bg-[#272729] p-4 rounded-lg shadow-md">
              <p className="text-gray-300">React, TypeScript, GraphQL, Tailwind CSS, Framer Motion</p>
            </div>
          </section>

          <section id="projects" className="mb-10">
            <h2 className="text-2xl font-bold mb-3 text-[#FF4500]">Projects</h2>
            <div className="bg-[#272729] p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold">ShiftWyse</h3>
              <p className="text-sm text-gray-400">Employee scheduling software built with Django and React.</p>
            </div>
          </section>

          <section id="contact" className="mb-10">
            <h2 className="text-2xl font-bold mb-3 text-[#FF4500]">Contact</h2>
            <div className="bg-[#272729] p-4 rounded-lg shadow-md">
              <p className="text-gray-300">Email: rhikshitha@example.com</p>
              <p className="text-gray-300">LinkedIn: linkedin.com/in/rhikshitha</p>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Home;
