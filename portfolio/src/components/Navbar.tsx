import { useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(true);
  
  return (
    <nav className="p-4 flex justify-between items-center bg-gray-900 text-white">
      <h1 className="text-2xl font-bold">Rhikshitha.dev</h1>
      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? <FiSun /> : <FiMoon />}
      </button>
    </nav>
  );
};

export default Navbar;
