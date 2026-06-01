"use client";

import { motion } from "framer-motion";

interface BentoGridProps {
  children: React.ReactNode;
}

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

export const bentoItem = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 260,
      damping: 22,
    },
  },
};

export default function BentoGrid({ children }: BentoGridProps) {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: 16,
        padding: "24px",
        overflowY: "auto",
        flex: 1,
        alignContent: "start",
      }}
    >
      {children}
    </motion.div>
  );
}
