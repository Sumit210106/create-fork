<div align="">

# React + Supabase +Tailwind CSS Starter

<p align="center">
  <a href="https://react.dev"><img src="https://img.shields.io/badge/React-000000?style=flat-square&logo=react&logoColor=61DAFB" alt="React"/></a>
  <a href="https://vitejs.dev"><img src="https://img.shields.io/badge/Vite-000000?style=flat-square&logo=vite&logoColor=646CFF" alt="Vite"/></a>
  <a href="https://supabase.com"><img src="https://img.shields.io/badge/Supabase-3ECF8E?style=flat-square&logo=supabase&logoColor=white" alt="Supabase"/></a>
  <a href="https://tailwindcss.com"><img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white" alt="Tailwind"/></a>
</p>



## Features

- React (Vite)
- Supabase client preconfigured
- Tailwind CSS installed
- Lucide React icons
- Simple page + component structure

## Quick start

```bash
npm install
npm run dev
# open http://localhost:5173
```

## Supabase

Client is set up at:
- src/lib/supabase.js

Import and use:

```js
import { supabase } from "@/lib/supabase";
```

Environment:

```bash
cp .env.example .env
# then set:
# VITE_SUPABASE_URL=
# VITE_SUPABASE_ANON_KEY=
```

## Folder structure

```
src/
 ├─ components/    # reusable UI components
 │   └─ starter.jsx
 ├─ pages/         # page-level components
 │   └─ home.jsx
 ├─ lib/           # supabase client, helpers
 │   └─ supabase.js
 └─ App.jsx
```

## Notes

- Tailwind is ready to use.
- No routing or auth scaffolded by default — extend as needed.

## Author

Template by Sumit Nayak — https://github.com/Sumit210106/
