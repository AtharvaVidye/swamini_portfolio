import { HERO_CONTENT } from "../constants/index.js";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay },
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-16 flex justify-center mt-16">
      <div className="text-center">
        <motion.h1
          variants={container(0)}
          initial="hidden"
          animate="visible"
          className="pb-8 text-6xl font-thin tracking-tight lg:text-8xl"
        >
          Swamini Pimpale
        </motion.h1>
        <motion.span 
          variants={container(0.5)}
          initial="hidden"
          animate="visible"
          className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">
          Python Developer
        </motion.span>
        <motion.p 
          variants={container(1)}
          initial="hidden"
          animate="visible"
          className="my-2 max-w-xl py-4 font-light tracking-tighter">
          {HERO_CONTENT}
        </motion.p>
      </div>
    </div>
  );
};

export default Hero;