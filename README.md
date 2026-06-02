# 📘 Learning Dashboard

A modern, animated learning dashboard built with Next.js, React, Framer Motion, and Supabase.

## ✨ Features
- Personalized dashboard with greeting
- Learning stats tracking
- Dynamic courses from Supabase
- Bento-grid UI layout
- Responsive design
- Animated progress bars

## 🏗️ Tech Stack
- Next.js (App Router)
- React + TypeScript
- Supabase
- Framer Motion
- Lucide Icons

## 📂 Project Structure
components/
- Sidebar.tsx
- MobileNav.tsx
- HeroTile.tsx
- CourseCard.tsx
- StatTile.tsx
- StatsRow.tsx
- BentoGrid.tsx

lib/
- supabase.ts

app/
- layout.tsx
- globals.css
- page.tsx

## 🗄️ Supabase Setup

Environment Variables:
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=

Courses Table:
- id (uuid)
- title (text)
- progress (int)
- icon_name (text)
- created_at (timestamp)

## 🚀 Run Project
npm install
npm run dev

## 👨‍💻 Author
Kartik Prajapati
