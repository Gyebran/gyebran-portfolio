# Gyebran Nauri Haikal — Portfolio

A modern interactive portfolio built with React, Vite, Three.js, GSAP, Framer Motion, and Tailwind CSS.

## Highlights

- Interactive Three.js hero with subtle parallax and post-processing
- Responsive portfolio sections for profile, experience, projects, certifications, skills, and contact
- Real project data sourced from existing repositories instead of placeholder content
- Accessible navigation, focus states, reduced-motion support, and semantic section structure
- SEO metadata, Open Graph metadata, custom favicon, and recruiter-focused information hierarchy

## Featured Projects

- **EcoEat** — Laravel-based surplus-food platform with authentication, KYC submission, admin approval, and product APIs
- **Web Peminjaman Ruangan** — Next.js, TypeScript, Supabase room reservation application
- **Interactive Edutainment** — Node.js/TypeScript + Next.js project with Docker, Cloudinary, database integration, and Gemini integration
- **E-Tani API** — Express backend that classifies weather and generates farming recommendations
- **Smart Asthma Monitoring** — Responsive PWA for symptom tracking, reminders, history, and offline usage

## Tech Stack

- React 19
- Vite
- Three.js / React Three Fiber / Drei
- GSAP
- Framer Motion
- Tailwind CSS

## Local Development

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
npm run preview
```

## Project Structure

```text
src/
├── components/      # UI sections and reusable visual components
├── data/            # Centralized portfolio content
├── App.jsx          # Page composition and hero
├── Scene.jsx        # Three.js hero scene
├── Particles.jsx    # Ambient background effect
└── index.css        # Global design system and responsive styles
```

## Accessibility & Performance Notes

- Supports `prefers-reduced-motion`
- Uses responsive layouts and touch-friendly project/certificate sections
- Limits canvas DPR for more predictable GPU cost
- Below-the-fold images use lazy loading
- Hero assets should continue to be optimized to WebP/AVIF for the best production performance

## Contact

- GitHub: https://github.com/Gyebran
- Email: gyebran777@gmail.com

---

Built and maintained by **Gyebran Nauri Haikal**.
