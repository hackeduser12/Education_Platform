# 📘 Learning Dashboard

![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-blue?logo=typescript)
![Supabase](https://img.shields.io/badge/Supabase-green?logo=supabase)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-38B2AC?logo=tailwind-css)
![License](https://img.shields.io/badge/License-MIT-yellow)

A modern **Learning Dashboard** built with **Next.js (App Router)**, **TypeScript**, **Supabase**, and **WebSockets**.  
It helps users track courses, progress, and activity in a clean, responsive UI with real-time updates.

---

## 🚀 Live Demo

👉 https://your-deployment-link.vercel.app

---

## 📸 Screenshots

> Replace these with actual screenshots from your project

### Dashboard Home
![Dashboard](https://via.placeholder.com/1200x600?text=Dashboard+Screenshot)

### Course Progress
![Courses](https://via.placeholder.com/1200x600?text=Courses+Progress+Screenshot)

### Activity Feed
![Activity](https://via.placeholder.com/1200x600?text=Activity+Feed+Screenshot)

---

## ⚙️ Tech Stack

- Next.js 14+ (App Router)
- TypeScript
- Supabase (Database + Auth)
- WebSockets (Real-time updates)
- Tailwind CSS
- React Server & Client Components

---

## 🏗️ Architecture Overview

This project uses a **hybrid Next.js architecture** combining Server and Client Components.

### 🔵 Server Components
- Fetch initial data (courses, stats, activity)
- Render static UI
- Improve SEO & performance

### 🟢 Client Components
- WebSocket connections
- UI interactions
- Real-time updates

---

## 🔄 Data Flow

```
Supabase DB
   ↓
Server Components (Initial Render)
   ↓
Client Components (Live Updates via WebSockets)
```

---

## 🧠 Key Decisions

- Minimized client-side JS for performance
- Split UI into reusable components
- Used WebSockets only for live updates
- Strong TypeScript typing across components

---

## ⚠️ Challenges Faced

### 1. Server vs Client Confusion
Solved by strict rule:
> If it uses state/effects → Client Component

### 2. WebSocket duplication
Fixed using proper `useEffect` cleanup

### 3. Windows build error (.next trace EPERM)
Resolved by clearing `.next` cache

---

## 📁 Project Structure

```
app/
 ├─ page.tsx
 ├─ layout.tsx

components/
 ├─ Sidebar/
 ├─ HeroTile/
 ├─ ActivityTile/
 ├─ CoursesGrid/
 ├─ StatsRow/

lib/
 ├─ supabaseClient.ts
 ├─ websocket.ts
```

---

## 🚀 Deployment

This project is deployed on **Vercel**

👉 https://your-deployment-link.vercel.app

To deploy yourself:
1. Push repo to GitHub
2. Import into Vercel
3. Add environment variables
4. Deploy 🚀

---

## 👨‍💻 Author

**Kartik Prajapati**

---

## 📌 Future Improvements

- Authentication (Supabase Auth)
- Course recommendations
- Offline support
- Analytics dashboard upgrade
