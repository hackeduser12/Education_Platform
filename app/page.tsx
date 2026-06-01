import { Suspense } from "react";
import { BookMarked } from "lucide-react";
import Sidebar from "@/components/Sidebar";
import BentoGrid from "@/components/BentoGrid";
import HeroTile from "@/components/HeroTile";
import ActivityTile from "@/components/ActivityTile";
import StatsRow, { StatsRowBottom } from "@/components/StatsRow";
import CoursesGrid from "@/components/CoursesGrid";
import CoursesSkeleton from "@/components/CoursesSkeleton";
import MobileNav from "@/components/MobileNav";

export const dynamic = "force-dynamic";

export default function DashboardPage() {
  return (
    <>
      <div
        style={{
          display: "flex",
          height: "100vh",
          overflow: "hidden",
          background:
            "radial-gradient(circle at 18% 8%, rgba(59,130,246,0.18), transparent 32rem), radial-gradient(circle at 90% 20%, rgba(139,92,246,0.13), transparent 30rem), linear-gradient(135deg, #0b1020, #111827 52%, #0c1324)",
        }}
        className="dashboard-root"
      >
        <Sidebar />

        <main
          style={{
            flex: 1,
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <header
            style={{
              padding: "20px 24px 0",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexShrink: 0,
            }}
          >
            <p
              style={{
                fontSize: 11,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "var(--text-muted)",
                fontWeight: 500,
              }}
            >
              Learning Dashboard by Kartik Prajapati
            </p>
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: "50%",
                background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 14,
                fontWeight: 700,
                color: "white",
                border: "2px solid var(--border-subtle)",
              }}
            >
              A
            </div>
          </header>

          <BentoGrid>
            <div style={{ gridColumn: "span 2" }}>
              <HeroTile name="Kartik" courses={5} />
            </div>

            <StatsRow />

            <div
              style={{
                gridColumn: "span 4",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                paddingTop: 4,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <BookMarked size={15} style={{ color: "var(--accent-purple)" }} />
                <span
                  style={{
                    fontSize: 11,
                    fontWeight: 600,
                    color: "var(--text-secondary)",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                  }}
                >
                  Active Courses
                </span>
              </div>
              <span
                style={{
                  fontSize: 11,
                  color: "var(--text-muted)",
                  fontFamily: "monospace",
                }}
              >
                Synced from Supabase
              </span>
            </div>

            <Suspense fallback={<CoursesSkeleton />}>
              <CoursesGrid />
            </Suspense>

            <div style={{ gridColumn: "span 2" }}>
              <ActivityTile />
            </div>

            <StatsRowBottom />
          </BentoGrid>
        </main>
      </div>

      <div className="mobile-nav-container">
        <MobileNav />
      </div>

      <style>{`
        .mobile-nav-container { display: none; }
        @media (max-width: 767px) {
          .mobile-nav-container { display: block; }
          .dashboard-root { padding-bottom: 70px; overflow-y: auto; }
          .dashboard-root > nav { display: none !important; }
        }
        @media (min-width: 768px) and (max-width: 1023px) {
          .dashboard-root > nav { width: 72px !important; }
        }
      `}</style>
    </>
  );
}
