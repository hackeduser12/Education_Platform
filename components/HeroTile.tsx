"use client";

import { motion } from "framer-motion";
import { Flame, CalendarDays } from "lucide-react";

interface HeroTileProps {
  name?: string;
  streak?: number;
}

export default function HeroTile({ name = "Alex", streak = 14 }: HeroTileProps) {
  const greeting = "Good afternoon";
  const displayDate = "Monday, June 1";

  return (
    <article
      className="bento-card grain-overlay"
      style={{
        padding: "28px 32px",
        background:
          "linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0c1a2e 100%)",
        gridColumn: "span 2",
        minHeight: 180,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      {/* Glowing orb background */}
      <div
        style={{
          position: "absolute",
          top: -40,
          right: -40,
          width: 200,
          height: 200,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(59,130,246,0.18) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: -20,
          left: 80,
          width: 150,
          height: 150,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div style={{ position: "relative", zIndex: 1 }}>
        <p
          style={{
            fontSize: 13,
            color: "var(--accent-cyan)",
            fontWeight: 500,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            marginBottom: 8,
            display: "flex",
            alignItems: "center",
            gap: 6,
          }}
        >
          <CalendarDays size={13} />
          {displayDate}
        </p>
        <h1
          style={{
            fontSize: "clamp(24px, 3vw, 36px)",
            fontWeight: 700,
            color: "var(--text-primary)",
            lineHeight: 1.15,
            letterSpacing: "-0.02em",
          }}
        >
          {greeting},{" "}
          <span
            style={{
              background: "linear-gradient(90deg, #60a5fa, #a78bfa)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {name}
          </span>{" "}
          👋
        </h1>
        <p
          style={{
            marginTop: 8,
            color: "var(--text-secondary)",
            fontSize: 14,
          }}
        >
          You&apos;re on a roll — keep up the momentum today.
        </p>
      </div>

      {/* Streak badge */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 300, damping: 20 }}
        style={{
          position: "relative",
          zIndex: 1,
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          padding: "8px 16px",
          background: "rgba(245,158,11,0.12)",
          border: "1px solid rgba(245,158,11,0.3)",
          borderRadius: 9999,
          width: "fit-content",
        }}
      >
        <Flame
          size={16}
          className="streak-flame"
          style={{ color: "var(--accent-amber)" }}
        />
        <span
          style={{
            fontFamily: "var(--font-space-mono)",
            fontSize: 13,
            fontWeight: 700,
            color: "var(--accent-amber)",
          }}
        >
          {streak} day streak
        </span>
      </motion.div>
    </article>
  );
}
