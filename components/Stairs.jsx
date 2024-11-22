import { motion } from "framer-motion";

// Variants for animation
const stairAnimation = {
  initial: {
    top: "0%",
  },
  animated: {
    top: "100%",
  },
  exit: {
    top: ["100%", "0%"],
  },
};

// Function to reverse the index for staggered effect
const reverseIndex = (index) => {
  const totalSteps = 6; // Number of Steps
  return totalSteps - index - 1;
};

const Stairs = () => {
  return (
    <>
      {/* Render 6 motion divs, each representing a step of the stairs */}
      {[...Array(6)].map((_, index) => {
        return (
          <motion.div
            key={index}
            variants={stairAnimation}
            initial="initial"
            animate="animated"
            exit="exit"
            transition={{
              duration: 0.4,
              ease: "easeInOut",
              delay: reverseIndex(index) * 0.1, // Decreasing delay
            }}
            className="w-full h-full bg-white relative"
          />
        );
      })}
    </>
  );
};

export default Stairs;
