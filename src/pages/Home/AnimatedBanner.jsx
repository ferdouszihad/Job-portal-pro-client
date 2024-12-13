import { motion } from "motion/react";
const AnimatedBanner = () => {
  return (
    <div
      className="hero min-h-screen overflow-clip"
      style={{
        backgroundImage:
          "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-4xl ">
          <motion.h1
            animate={{
              scale: 1.2,
              transition: { duration: 2 },
              repeatCount: "infinity",
            }}
            whileHover={{ scale: 1.1 }}
            className="mb-5 text-5xl font-bold"
          >
            Welcome to Job Portal
          </motion.h1>

          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <motion.button
            animate={{ y: [0, 50, 0] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="btn btn-primary"
          >
            Get Started
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default AnimatedBanner;
