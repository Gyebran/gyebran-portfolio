export const profile = {
  name: 'Gyebran Nauri Haikal',
  shortName: 'Gyebran',
  role: 'Full-Stack Developer & Information Systems Student',
  headline: 'Building useful digital products with code, systems thinking, and AI.',
  summary:
    'I am an Information Systems student at Telkom University focused on building modern web applications. I enjoy working across frontend, backend, databases, and AI-integrated workflows while choosing tools based on the problem being solved.',
  email: 'gyebran777@gmail.com',
  github: 'https://github.com/Gyebran',
  avatar: 'https://avatars.githubusercontent.com/u/152045520?v=4',
  availability: 'Open to internship, junior developer, and selected freelance opportunities.',
}

export const navigation = [
  { label: 'Home', link: '#' },
  { label: 'Profile', link: '#about' },
  { label: 'Experience', link: '#experience' },
  { label: 'Projects', link: '#projects' },
  { label: 'Certificates', link: '#certificates' },
  { label: 'The Arsenal', link: '#arsenal' },
  { label: 'Contact', link: '#contact' },
]

export const socials = [
  { label: 'GitHub', link: 'https://github.com/Gyebran' },
  { label: 'Email', link: 'mailto:gyebran777@gmail.com' },
]

export const experience = [
  {
    period: 'Current',
    role: 'Information Systems Student',
    organization: 'Telkom University',
    description:
      'Developing a foundation in systems analysis, databases, enterprise architecture, software development, and digital product thinking while building academic and personal projects.',
  },
  {
    period: 'Project Work',
    role: 'Full-Stack Web Development',
    organization: 'Academic & Personal Projects',
    description:
      'Building web applications across Laravel/PHP and React/Next.js/Node.js stacks, including authentication, APIs, database integrations, responsive interfaces, and deployment-oriented workflows.',
  },
  {
    period: 'Project Work',
    role: 'AI-Integrated Applications',
    organization: 'Interactive Edutainment & Experiments',
    description:
      'Exploring AI-assisted application architecture, including a simple microservices setup connecting a Node.js/TypeScript backend, Next.js frontend, database services, Cloudinary, Docker, and Gemini integration.',
  },
]

export const projects = [
  {
    id: 'ecoeat',
    title: 'EcoEat',
    type: 'Full-Stack · Sustainability',
    description:
      'A Laravel-based surplus-food platform with authentication, KYC document submission, admin approval workflows, and authenticated product catalog APIs.',
    tech: ['Laravel', 'PHP', 'Sanctum', 'REST API'],
    repo: null,
    repoLabel: 'Private repository',
    live: null,
    image: null,
    featured: true,
  },
  {
    id: 'room-reservation',
    title: 'Web Peminjaman Ruangan',
    type: 'Full-Stack · Reservation System',
    description:
      'A room reservation web application built with Next.js, TypeScript, Supabase, and a component-based responsive interface.',
    tech: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind CSS'],
    repo: 'https://github.com/Gyebran/WEB_PEMINJAMAN_RUANGAN',
    repoLabel: 'GitHub',
    live: 'https://web-peminjaman-ruangan.vercel.app/',
    image: null,
    featured: true,
  },
  {
    id: 'interactive-edutainment',
    title: 'Interactive Edutainment',
    type: 'Web Platform · AI Integration',
    description:
      'An interactive education platform using a simple microservices architecture with Node.js/TypeScript, Next.js, Docker, database services, Cloudinary, and Gemini integration.',
    tech: ['Node.js', 'TypeScript', 'Next.js', 'Docker', 'Gemini'],
    repo: 'https://github.com/Gyebran/backend-interactive-edutainment',
    repoLabel: 'GitHub',
    live: null,
    image: null,
    featured: true,
  },
  {
    id: 'etani',
    title: 'E-Tani API',
    type: 'Backend · Agriculture',
    description:
      'An Express backend that classifies weather conditions and turns forecast data into practical watering recommendations and multi-day farming insights.',
    tech: ['Node.js', 'Express', 'Weather Logic', 'REST API'],
    repo: 'https://github.com/Gyebran/backend-etani',
    repoLabel: 'GitHub',
    live: null,
    image: null,
    featured: false,
  },
  {
    id: 'asthma-monitoring',
    title: 'Smart Asthma Monitoring',
    type: 'PWA · Health Monitoring',
    description:
      'A responsive progressive web app for asthma symptom tracking, history, reminders, charts, and offline-capable usage across desktop and mobile devices.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'PWA', 'Supabase'],
    repo: 'https://github.com/Gyebran/smart-asthma-monitoring',
    repoLabel: 'GitHub',
    live: null,
    image: null,
    featured: false,
  },
]

export const certificates = [
  {
    id: 'ai-performance-ads',
    image: null,
    title: 'AI-Powered Performance Ads',
    description: 'Certification focused on using AI-assisted approaches in performance advertising.',
  },
  {
    id: 'business-plan-champion',
    image: null,
    title: 'Business Plan — 1st Champion',
    description: 'Competition achievement recognizing a business plan presentation and business-development work.',
  },
  {
    id: 'intro-programming',
    image: null,
    title: 'Introduction to Programming',
    description: 'Foundational programming certification covering core programming concepts and problem solving.',
  },
  {
    id: 'python',
    image: null,
    title: 'Python',
    description: 'Programming certification focused on Python fundamentals and practical coding concepts.',
  },
]

export const skills = [
  { name: 'React', icon: 'https://cdn.simpleicons.org/react/white' },
  { name: 'Next.js', icon: 'https://cdn.simpleicons.org/nextdotjs/white' },
  { name: 'Laravel', icon: 'https://cdn.simpleicons.org/laravel/white' },
  { name: 'Node.js', icon: 'https://cdn.simpleicons.org/nodedotjs/white' },
  { name: 'PHP', icon: 'https://cdn.simpleicons.org/php/white' },
  { name: 'Python', icon: 'https://cdn.simpleicons.org/python/white' },
  { name: 'TypeScript', icon: 'https://cdn.simpleicons.org/typescript/white' },
  { name: 'PostgreSQL', icon: 'https://cdn.simpleicons.org/postgresql/white' },
  { name: 'Supabase', icon: 'https://cdn.simpleicons.org/supabase/white' },
  { name: 'Three.js', icon: 'https://cdn.simpleicons.org/threedotjs/white' },
  { name: 'Tailwind CSS', icon: 'https://cdn.simpleicons.org/tailwindcss/white' },
  { name: 'Docker', icon: 'https://cdn.simpleicons.org/docker/white' },
  { name: 'Git', icon: 'https://cdn.simpleicons.org/git/white' },
  { name: 'Vercel', icon: 'https://cdn.simpleicons.org/vercel/white' },
]
