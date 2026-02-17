# 🎯 Portfolio Frontend

A modern, fast, and fully-responsive personal portfolio built with cutting-edge web technologies.

## ⚡ Quick Start

```bash
npm install
npm run dev
```

Open your browser and navigate to `http://localhost:5173`

## 📌 About This Project

This is a **React-based portfolio website** showcasing professional work, skills, experience, certifications, and projects. It features smooth animations, optimized performance, and an engaging user experience with hardware-accelerated smooth scrolling.

## 🎨 Key Features

✅ **Smooth Scrolling** - Physics-based scroll with Lenis  
✅ **Fluid Animations** - Scroll-triggered reveals with Framer Motion  
✅ **Mobile Responsive** - Built with Tailwind CSS for all devices  
✅ **Fast Performance** - Vite dev server with instant HMR  
✅ **Modern UI** - Lucide React & React Icons integration  
✅ **Modular Code** - Organized components with custom hooks  

## 📦 Installation

```bash
# Install dependencies
npm install

# (Optional) Set up environment variables
echo "VITE_API_URL=your_api_url" > .env.local
```

## 🚀 Available Scripts

```bash
npm run dev      # Start development server (localhost:5173)
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Check code quality with ESLint
```

## 📁 Project Structure

```
src/
├── components/
│   ├── animations/     # FadeIn, Reveal, TittleCard
│   ├── layout/         # Navbar, Footer
│   ├── sections/       # Hero, About, Skills, Projects, Experience, Certification, Contact
│   └── ui/             # Button, Card, SectionTitle
├── data/               # Static data (skills, projects, experience, etc.)
├── hooks/              # Custom hooks (useLenis, usescrollAnimation)
├── pages/              # Page components (Home)
├── utils/              # Helpers (motionVariants)
└── App.jsx             # Main app with Lenis setup
```

## 🛠️ Tech Stack

| Tech | Purpose |
|------|---------|
| React 19 | UI framework |
| Vite 7 | Build tool & dev server |
| Tailwind CSS 4 | Styling |
| Framer Motion 12 | Animations |
| Lenis 1.3 | Smooth scrolling |
| React Router 7 | Client-side routing |
| Axios | HTTP requests |
| ESLint 9 | Code linting |

## 🎯 Portfolio Sections

- **Hero** - Eye-catching landing section
- **Intro** - Brief introduction
- **About** - Detailed background
- **Experience** - Work history timeline
- **Skills** - Technical expertise
- **Projects** - Showcase of work
- **Certification** - Credentials & achievements
- **Contact** - Get in touch

## 🚢 Deployment

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy the `dist/` folder to:
   - **Vercel** (recommended) - Zero-config
   - **Netlify** - Drag & drop
   - **GitHub Pages** - Free hosting
   - **AWS S3 + CloudFront** - Enterprise solution

## 🔧 Customization

### Edit Static Data
Update files in `src/data/`:
- `skills.js` - Add/edit technical skills
- `projects.js` - Add portfolio projects
- `experience.js` - Update work history
- `certification.js` - Add certifications
- `socials.js` - Add social media links

### Modify Animations
Centralized motion variants are in `src/utils/motionVariants.js`

## 📱 Responsive Breakpoints

Uses Tailwind CSS breakpoints:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## ⚙️ Configuration Files

- `vite.config.js` - Vite & React plugin setup with Tailwind
- `eslint.config.js` - Code quality rules
- `package.json` - Dependencies & scripts

## 🐛 Troubleshooting

| Issue | Solution |
|-------|----------|
| Port 5173 in use | `npm run dev -- --port 3000` |
| Module errors | `rm -rf node_modules && npm install` |
| Build fails | `npm run lint` and fix errors |

---

**Made with ❤️ by Naveen kumar R | [License info]
