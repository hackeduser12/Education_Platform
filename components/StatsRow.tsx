"use client";

import { Clock, Target, TrendingUp, BookMarked } from "lucide-react";
import StatTile from "./StatTile";

export default function StatsRow() {
  return (
    <>
      <StatTile
        label="Total Activity This Week"
        value="12.4"
        // sub="+2.1 from last week"
        icon={Clock}
        accentColor="var(--accent-cyan)"
      />
      <StatTile
        label="Overall Progress"
        value="7/10"
        sub="70% completed"
        icon={Target}
        accentColor="var(--accent-emerald)"
      />
    </>
  );
}

export function StatsRowBottom() {
  return (
    <>
      <StatTile
        label="Points Achieved"
        value="259"
        // sub="Level 12 learner"
        icon={TrendingUp}
        accentColor="var(--accent-amber)"
      />
      <StatTile
        label="Completed Courses"
        value="18"
        sub="Till Now"
        icon={BookMarked}
        accentColor="var(--accent-rose)"
      />
    </>
  );
}
