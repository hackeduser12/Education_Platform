"use client";

import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";

export default function CourseErrorFallback() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      style={{
        gridColumn: "span 4",
        padding: "32px",
        borderRadius: 16,
        background: "rgba(244,63,94,0.07)",
        border: "1px solid rgba(244,63,94,0.2)",
        display: "flex",
        alignItems: "center",
        gap: 12,
        color: "var(--accent-rose)",
      }}
    >
      <AlertTriangle size={20} />
      <div>
        <p style={{ fontWeight: 600, fontSize: 14 }}>
          Couldn&apos;t load courses
        </p>
        <p style={{ fontSize: 12, color: "var(--text-muted)", marginTop: 2 }}>
          Check your Supabase environment variables and database connection.
        </p>
      </div>
    </motion.div>
  );
}
