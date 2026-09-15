# Kishore M — Portfolio (React + Express + MySQL + Prisma)

## Structure
- `client/` — React (Vite) frontend
- `server/` — Express API with Prisma ORM (MySQL)

## Setup

### 1. Database (MySQL)
Create a database, e.g. `portfolio`.

### 2. Server
```
cd server
npm install
cp .env.example .env   # then edit DATABASE_URL with your MySQL credentials
npm run prisma:migrate
npm run prisma:seed
npm run dev
```
Runs on http://localhost:5000

### 3. Client
```
cd client
npm install
npm run dev
```
Runs on http://localhost:5173 (proxies `/api` to the server)

## Notes
- Projects are stored in MySQL via Prisma (`server/prisma/schema.prisma`) and seeded with 4 placeholder projects — edit `server/prisma/seed.js` and re-run `npm run prisma:seed` once you have real project data.
- The Hero section's layout (circle background, image placement, text position) is preserved exactly as in the original design — only extracted into `client/src/components/Hero.jsx`.
- Accent color was extended into a purple → cyan gradient (`--gradient-cool` in `client/src/index.css`) for a cooler vibe across About/Journey/Skills/Projects, while the Hero itself keeps its original solid purple.
