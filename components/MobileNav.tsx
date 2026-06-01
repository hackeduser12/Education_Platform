"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { LayoutDashboard, BookOpen, Trophy, BarChart2, Settings } from "lucide-react";

const NAV_ITEMS = [
  { id: "dashboard", label: "Home", icon: LayoutDashboard },
  { id: "courses", label: "Courses", icon: BookOpen },
  { id: "achievements", label: "Wins", icon: Trophy },
  { id: "analytics", label: "Stats", icon: BarChart2 },
  { id: "settings", label: "Settings", icon: Settings },
];

export default function MobileNav() {
  const [active, setActive] = useState("dashboard");

  return (
    <nav
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        background: "rgba(13, 20, 35, 0.94)",
        borderTop: "1px solid var(--border-subtle)",
        boxShadow: "0 -14px 34px rgba(0,0,0,0.32)",
        display: "flex",
        padding: "8px 16px 12px",
        zIndex: 100,
        backdropFilter: "blur(12px)",
      }}
    >
      {NAV_ITEMS.map((item) => {
        const Icon = item.icon;
        const isActive = active === item.id;
        return (
          <button
            key={item.id}
            onClick={() => setActive(item.id)}
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 4,
              background: "transparent",
              border: "none",
              cursor: "pointer",
              padding: "6px 0",
              position: "relative",
            }}
          >
            {isActive && (
              <motion.div
                layoutId="mobile-nav-indicator"
                style={{
                  position: "absolute",
                  top: -8,
                  width: 24,
                  height: 2,
                  borderRadius: 9999,
                  background: "var(--accent-blue)",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              />
            )}
            <Icon
              size={20}
              style={{ color: isActive ? "var(--accent-blue)" : "var(--text-muted)" }}
            />
            <span
              style={{
                fontSize: 10,
                color: isActive ? "var(--accent-blue)" : "var(--text-muted)",
                fontWeight: isActive ? 600 : 400,
              }}
            >
              {item.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
}
