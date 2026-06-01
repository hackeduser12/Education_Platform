"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import * as Icons from "lucide-react";
import type { Course } from "@/lib/supabase";

const CARD_GRADIENTS = [
  "linear-gradient(135deg, rgba(59,130,246,0.12) 0%, rgba(6,182,212,0.06) 100%)",
  "linear-gradient(135deg, rgba(139,92,246,0.12) 0%, rgba(59,130,246,0.06) 100%)",
  "linear-gradient(135deg, rgba(16,185,129,0.12) 0%, rgba(6,182,212,0.06) 100%)",
  "linear-gradient(135deg, rgba(244,63,94,0.12) 0%, rgba(245,158,11,0.06) 100%)",
];

const ACCENT_COLORS = [
  "var(--accent-blue)",
  "var(--accent-purple)",
  "var(--accent-emerald)",
  "var(--accent-rose)",
];

interface CourseCardProps {
  course: Course;
  index: number;
}

function AnimatedProgressBar({
  progress,
  color,
}: {
  progress: number;
  color: string;
}) {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = barRef.current;
    if (!el) return;
    // Start at 0, animate to target
    el.style.width = "0%";
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        el.style.transition =
          "width 1.2s cubic-bezier(0.4, 0, 0.2, 1) 0.3s";
        el.style.width = `${progress}%`;
      });
    });
  }, [progress]);

  return (
    <div className="progress-bar-container">
      <div
        ref={barRef}
        style={{
          height: "100%",
          background: `linear-gradient(90deg, ${color}, ${color}88)`,
          borderRadius: 9999,
          boxShadow: `0 0 8px ${color}66`,
        }}
      />
    </div>
  );
}

export default function CourseCard({ course, index }: CourseCardProps) {
  const gradient = CARD_GRADIENTS[index % CARD_GRADIENTS.length];
  const accentColor = ACCENT_COLORS[index % ACCENT_COLORS.length];

  // Get the icon from lucide-react dynamically
  const iconName = course.icon_name
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join("") as keyof typeof Icons;

  const IconComponent =
    (Icons[iconName] as React.ElementType) ?? Icons.BookOpen;

  return (
    <motion.article
      className="bento-card grain-overlay"
      whileHover={{
        scale: 1.015,
        boxShadow: `0 0 30px ${accentColor}33, 0 8px 32px rgba(0,0,0,0.4)`,
        borderColor: `${accentColor}44`,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      style={{
        padding: "24px",
        background: `var(--bg-card)`,
        display: "flex",
        flexDirection: "column",
        gap: 16,
        cursor: "pointer",
        willChange: "transform",
      }}
    >
      {/* Gradient mesh background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: gradient,
          borderRadius: "inherit",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", gap: 16 }}>
        {/* Icon */}
        <div
          style={{
            width: 40,
            height: 40,
            borderRadius: 10,
            background: `${accentColor}18`,
            border: `1px solid ${accentColor}30`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <IconComponent size={20} style={{ color: accentColor }} />
        </div>

        {/* Title */}
        <div>
          <h3
            style={{
              fontSize: 14,
              fontWeight: 600,
              color: "var(--text-primary)",
              lineHeight: 1.3,
              marginBottom: 4,
            }}
          >
            {course.title}
          </h3>
          <p style={{ fontSize: 12, color: "var(--text-muted)" }}>
            {course.progress < 30
              ? "Just started"
              : course.progress < 70
              ? "In progress"
              : course.progress < 100
              ? "Almost done"
              : "Completed"}{" "}
            · {course.progress}%
          </p>
        </div>

        {/* Progress bar */}
        <AnimatedProgressBar progress={course.progress} color={accentColor} />
      </div>
    </motion.article>
  );
}
