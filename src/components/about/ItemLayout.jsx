"use client";
import { motion } from "framer-motion";
import clsx from "clsx";

const ItemLayout = ({ children, className, enableAnimation = true }) => {
  return (
    <motion.div
      initial={enableAnimation ? { scale: 0 } : undefined}
      whileInView={enableAnimation ? { scale: 1 } : undefined}
      transition={enableAnimation ? { duration: 0.3 } : undefined}
      viewport={
        enableAnimation
          ? {
              once: true,
              amount: 0.1, // Trigger when 5% of the rectangle is visible
              rootMargin: "-100px 0px", // Trigger earlier by offsetting the viewport
            }
          : undefined
      }
      className={clsx(
        "custom-bg p-6 sm:p-8 rounded-xl flex items-center justify-center space-y-8",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export default ItemLayout;
