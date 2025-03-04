import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-black text-white">
      <motion.h1
        className="text-5xl font-bold"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hi, I'm Rhikshitha 👋
      </motion.h1>
      <motion.p
        className="text-xl mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Frontend Engineer | React | TypeScript | GraphQL
      </motion.p>
    </div>
  );
};

export default Home;
