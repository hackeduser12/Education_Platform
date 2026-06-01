"use client";

import { motion } from "framer-motion";
import { Activity } from "lucide-react";

function generateActivityData() {
  const weeks = 16;
  const days = 7;
  const data: { value: number; date: Date }[][] = [];
  const baseDate = new Date("2026-06-01T00:00:00.000Z");

  for (let w = weeks - 1; w >= 0; w--) {
    const week: { value: number; date: Date }[] = [];
    for (let d = 0; d < days; d++) {
      const offset = w * 7 + (days - 1 - d);
      const date = new Date(baseDate);
      date.setUTCDate(baseDate.getUTCDate() - offset);
      const seed = (w + 3) * 17 + (d + 5) * 31;
      const value = [0, 2, 1, 3, 0, 4, 2, 1, 3, 4][seed % 10];
      week.push({
        value,
        date,
      });
    }
    data.push(week);
  }
  return data;
}

const INTENSITY_COLORS = [
  "rgba(255,255,255,0.04)",
  "rgba(59,130,246,0.25)",
  "rgba(59,130,246,0.45)",
  "rgba(59,130,246,0.7)",
  "#3b82f6",
];

export default function ActivityTile() {
  const data = generateActivityData();

  const totalActiveDays = data
    .flat()
    .filter((d) => d.value > 0).length;

  return (
    <article
      className="bento-card grain-overlay"
      style={{
        padding: "24px",
        gridColumn: "span 2",
        background: "var(--bg-card)",
      }}
    >
      <div style={{ position: "relative", zIndex: 1 }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 20,
          }}
        >
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                marginBottom: 4,
              }}
            >
              <Activity size={16} style={{ color: "var(--accent-cyan)" }} />
              <h2
                style={{
                  fontSize: 14,
                  fontWeight: 600,
                  color: "var(--text-primary)",
                }}
              >
                Learning Activity
              </h2>
            </div>
            <p style={{ fontSize: 12, color: "var(--text-muted)" }}>
              {totalActiveDays} active days in the last 16 weeks
            </p>
          </div>
          <div
            style={{
              fontFamily: "var(--font-space-mono)",
              fontSize: 11,
              color: "var(--text-muted)",
              display: "flex",
              gap: 4,
              alignItems: "center",
            }}
          >
            <span>Less</span>
            {INTENSITY_COLORS.map((c, i) => (
              <div
                key={i}
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: 2,
                  background: c,
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              />
            ))}
            <span>More</span>
          </div>
        </div>

        {/* Grid */}
        <div
          style={{
            display: "flex",
            gap: 3,
            overflowX: "auto",
          }}
        >
          {data.map((week, wi) => (
            <div
              key={wi}
              style={{ display: "flex", flexDirection: "column", gap: 3 }}
            >
              {week.map((day, di) => (
                <motion.div
                  key={di}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    delay: wi * 0.02 + di * 0.005,
                    type: "spring",
                    stiffness: 400,
                    damping: 20,
                  }}
                  whileHover={{ scale: 1.4 }}
                  title={`${day.date.toDateString()}: ${day.value > 0 ? `${day.value * 25}min` : "No activity"}`}
                  style={{
                    width: 11,
                    height: 11,
                    borderRadius: 2,
                    background: INTENSITY_COLORS[day.value],
                    border: "1px solid rgba(255,255,255,0.04)",
                    cursor: "pointer",
                  }}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}
