"use client";

import { motion } from "framer-motion";
import CourseCard from "./CourseCard";
import type { Course } from "@/lib/supabase";

const itemVariant = {
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

export default function CoursesClient({ courses }: { courses: Course[] }) {
  if (courses.length === 0) {
    return (
      <motion.div
        variants={itemVariant}
        style={{
          gridColumn: "span 4",
          padding: "40px",
          textAlign: "center",
          color: "var(--text-muted)",
          fontSize: 14,
        }}
      >
        No courses found. Add some courses to your Supabase database!
      </motion.div>
    );
  }

  return (
    <>
      {courses.map((course, i) => (
        <motion.div key={course.id} variants={itemVariant}>
          <CourseCard course={course} index={i} />
        </motion.div>
      ))}
    </>
  );
}
