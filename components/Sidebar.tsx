"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard,
  BookOpen,
  Trophy,
  BarChart2,
  Settings,
  ChevronLeft,
  ChevronRight,
  Zap,
} from "lucide-react";

const NAV_ITEMS = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { id: "courses", label: "My Courses", icon: BookOpen },
  { id: "achievements", label: "Achievements", icon: Trophy },
  { id: "analytics", label: "Analytics", icon: BarChart2 },
  { id: "settings", label: "Settings", icon: Settings },
];

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const [active, setActive] = useState("dashboard");

  return (
    <motion.nav
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="relative flex flex-col h-full"
      style={{
        width: collapsed ? "72px" : "220px",
        transition: "width 0.3s cubic-bezier(0.4,0,0.2,1)",
        background: "rgba(13, 20, 35, 0.9)",
        borderRight: "1px solid var(--border-subtle)",
        boxShadow: "12px 0 40px rgba(0,0,0,0.28)",
        padding: "24px 12px",
        gap: "8px",
        flexShrink: 0,
      }}
      aria-label="Primary navigation"
    >
      {/* Logo */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          padding: "0 4px 20px",
          borderBottom: "1px solid var(--border-subtle)",
          marginBottom: "8px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: 32,
            height: 32,
            borderRadius: 8,
            background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <Zap size={16} color="white" />
        </div>
        <AnimatePresence>
          {!collapsed && (
            <motion.span
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "auto" }}
              exit={{ opacity: 0, width: 0 }}
              transition={{ duration: 0.2 }}
              style={{
                fontFamily: "var(--font-space-mono)",
                fontWeight: 700,
                fontSize: 15,
                color: "var(--text-primary)",
                whiteSpace: "nowrap",
                overflow: "hidden",
              }}
            >
              LearnOS
            </motion.span>
          )}
        </AnimatePresence>
      </div>

      {/* Nav Items */}
      <nav style={{ display: "flex", flexDirection: "column", gap: 4, flex: 1 }}>
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive = active === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActive(item.id)}
              style={{
                position: "relative",
                display: "flex",
                alignItems: "center",
                gap: 10,
                padding: "10px 10px",
                borderRadius: 10,
                border: "none",
                cursor: "pointer",
                background: "transparent",
                color: isActive ? "var(--text-primary)" : "var(--text-muted)",
                transition: "color 0.2s",
                textAlign: "left",
                overflow: "hidden",
                width: "100%",
              }}
              aria-current={isActive ? "page" : undefined}
            >
              {isActive && (
                <motion.div
                  layoutId="nav-highlight"
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(135deg, rgba(59,130,246,0.15), rgba(139,92,246,0.1))",
                    borderRadius: 10,
                    border: "1px solid rgba(59,130,246,0.25)",
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                  }}
                />
              )}
              <Icon
                size={18}
                style={{
                  flexShrink: 0,
                  color: isActive ? "var(--accent-blue)" : "inherit",
                  position: "relative",
                  zIndex: 1,
                }}
              />
              <AnimatePresence>
                {!collapsed && (
                  <motion.span
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: "auto" }}
                    exit={{ opacity: 0, width: 0 }}
                    transition={{ duration: 0.15 }}
                    style={{
                      fontSize: 13,
                      fontWeight: 500,
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      position: "relative",
                      zIndex: 1,
                    }}
                  >
                    {item.label}
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          );
        })}
      </nav>

      {/* Collapse toggle */}
      <button
        onClick={() => setCollapsed((c) => !c)}
        style={{
          alignSelf: "flex-end",
          background: "rgba(24, 35, 56, 0.78)",
          border: "1px solid var(--border-subtle)",
          borderRadius: 8,
          cursor: "pointer",
          color: "var(--text-muted)",
          padding: "6px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
      >
        {collapsed ? <ChevronRight size={14} /> : <ChevronLeft size={14} />}
      </button>
    </motion.nav>
  );
}
