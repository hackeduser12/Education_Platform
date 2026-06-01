# LearnOS — Student Dashboard

A futuristic, dark-mode learning dashboard built with Next.js App Router, Supabase, Tailwind CSS, and Framer Motion.

## 🚀 Live Demo
Deploy to Vercel: [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

---

## 🏗️ Architecture

### Server / Client Component Split
The primary data-fetching boundary is at `components/CoursesGrid.tsx` — a **Server Component** that calls `lib/supabase.ts` directly using the `@supabase/supabase-js` client. It never ships Supabase credentials to the client.

The fetched courses are then passed as serialized props to `CoursesClient.tsx` — a **Client Component** — which handles all Framer Motion animations and user interactions.

```
app/page.tsx (Server)
  └── <Suspense fallback={<CoursesSkeleton />}>
        └── CoursesGrid.tsx (Server — fetches from Supabase)
              └── CoursesClient.tsx (Client — animations, interactions)
```

All other tiles (Hero, Activity, Stats) are Client Components because they use Framer Motion directly and don't need server-side data.

### Supabase Schema
```sql
create table courses (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  progress integer not null check (progress >= 0 and progress <= 100),
  icon_name text not null,   -- lucide-react icon slug, e.g. "code-2"
  created_at timestamptz default now()
);

-- Seed data
insert into courses (title, progress, icon_name) values
  ('Advanced React Patterns', 75, 'code-2'),
  ('System Design Fundamentals', 42, 'layout-dashboard'),
  ('TypeScript Deep Dive', 90, 'braces'),
  ('Database Architecture', 28, 'database');
```

### Animation Strategy
- **Page load**: `BentoGrid.tsx` uses Framer Motion `variants` + `staggerChildren` so tiles reveal sequentially (`staggerChildren: 0.08s`).
- **Card hover**: `whileHover` with `type: "spring", stiffness: 300, damping: 20` for natural physics. Only `transform: scale` and `box-shadow` are mutated — no layout properties, so zero layout shifts.
- **Sidebar**: `layoutId="nav-highlight"` for the active state background — snaps with spring physics between nav items.
- **Progress bars**: CSS transition from `0%` → actual value on mount, triggered with `requestAnimationFrame` double-flush.
- **Activity grid**: Each cell animates in with stagger using `delay: wi * 0.02 + di * 0.005`.

### Performance Choices
- `will-change: transform` on bento cards to promote GPU compositing before hover occurs.
- Only `transform` and `opacity` used for animations — avoids triggering browser reflows/repaints.
- Fonts loaded via `next/font/google` for automatic subsetting and zero render-blocking.

---

## 🛠️ Setup

### 1. Clone & install
```bash
git clone https://github.com/your-username/learning-dashboard.git
cd learning-dashboard
npm install
```

### 2. Supabase setup
1. Create a free project at [supabase.com](https://supabase.com)
2. Run the SQL above in the SQL Editor to create and seed the `courses` table
3. Copy your Project URL and anon key from **Settings → API**

### 3. Environment variables
```bash
cp .env.example .env.local
# Fill in your Supabase credentials
```

### 4. Run locally
```bash
npm run dev
```

---

## 📦 Deploy to Vercel
1. Push to GitHub
2. Import project in Vercel
3. Add `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` in Vercel Environment Variables
4. Deploy

---

## 🗂️ Project Structure
```
app/
  layout.tsx          # Root layout with fonts, metadata
  page.tsx            # Dashboard page (Server Component)
  loading.tsx         # App-level loading state
  globals.css         # CSS variables, animations, utilities

components/
  Sidebar.tsx         # Collapsible nav with layoutId animation
  BentoGrid.tsx       # Staggered grid animation container
  HeroTile.tsx        # Greeting + streak badge
  CoursesGrid.tsx     # Server Component — Supabase fetch
  CoursesClient.tsx   # Client Component — course card animations
  CourseCard.tsx      # Individual course with progress bar
  CoursesSkeleton.tsx # Shimmer skeleton while data loads
  CourseErrorFallback.tsx  # Error state UI
  ActivityTile.tsx    # Contribution-style activity graph
  StatTile.tsx        # Single-metric stat card
  MobileNav.tsx       # Bottom nav for mobile

lib/
  supabase.ts         # Supabase client + typed getCourses()
```

---

## 📋 Challenges & Notes
- **Icon hydration**: Lucide icons are mapped dynamically from `icon_name` strings stored in Supabase. The mapping converts kebab-case to PascalCase and falls back to `BookOpen`.
- **SSR + Framer Motion**: All animated components are explicitly marked `"use client"`. The server component tree stops at `CoursesGrid`, which passes plain serializable data down.
- **No layout shifts**: Sidebar collapse/expand uses CSS `width` transition instead of Framer Motion layout animations to avoid the sidebar participating in the Bento grid's stagger sequence.
