"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

interface StatTileProps {
  label: string;
  value: string;
  sub?: string;
  icon: LucideIcon;
  accentColor: string;
  delay?: number;
}

export default function StatTile({
  label,
  value,
  sub,
  icon: Icon,
  accentColor,
  delay = 0,
}: StatTileProps) {
  return (
    <motion.article
      className="bento-card grain-overlay"
      whileHover={{
        scale: 1.015,
        boxShadow: `0 0 24px ${accentColor}2a`,
        borderColor: `${accentColor}30`,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      style={{
        padding: "20px",
        cursor: "default",
        display: "flex",
        flexDirection: "column",
        gap: 12,
        willChange: "transform",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: 80,
          height: 80,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${accentColor}18 0%, transparent 70%)`,
          transform: "translate(20px, -20px)",
          pointerEvents: "none",
        }}
      />
      <div style={{ position: "relative", zIndex: 1 }}>
        <div
          style={{
            width: 36,
            height: 36,
            borderRadius: 8,
            background: `${accentColor}15`,
            border: `1px solid ${accentColor}28`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 12,
          }}
        >
          <Icon size={16} style={{ color: accentColor }} />
        </div>
        <p style={{ fontSize: 11, color: "var(--text-muted)", marginBottom: 4, textTransform: "uppercase", letterSpacing: "0.06em", fontWeight: 500 }}>
          {label}
        </p>
        <p
          style={{
            fontFamily: "var(--font-space-mono)",
            fontSize: 24,
            fontWeight: 700,
            color: "var(--text-primary)",
            lineHeight: 1,
          }}
        >
          {value}
        </p>
        {sub && (
          <p style={{ fontSize: 11, color: accentColor, marginTop: 4 }}>{sub}</p>
        )}
      </div>
    </motion.article>
  );
}
