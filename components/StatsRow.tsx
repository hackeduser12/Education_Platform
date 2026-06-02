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
        label="XP Earned"
        value="2,840"
        sub="Level 12 learner"
        icon={TrendingUp}
        accentColor="var(--accent-amber)"
      />
      <StatTile
        label="Courses Done"
        value="23"
        sub="Since joining"
        icon={BookMarked}
        accentColor="var(--accent-rose)"
      />
    </>
  );
}
