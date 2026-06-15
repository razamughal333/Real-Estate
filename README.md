# Raza Estate

A responsive real estate landing page built with HTML, Tailwind CSS v4, and vanilla JavaScript.

**Live Site:** [raza-estate.vercel.app](https://raza-estate.vercel.app)  
**Repository:** [github.com/razamughal333/Real-Estate](https://github.com/razamughal333/Real-Estate)

---

## About

Raza Estate is a dark-themed real estate website inspired by the Estatein Figma design. It was built as a learning project to practice modern front-end development — including responsive layouts, component design, and deploying to production.

---

## Features

- Announcement bar with close button
- Sticky navbar with mobile hamburger menu
- Hero section with stats
- Features strip
- Property cards with a JS-powered slider
- Testimonials section
- FAQ section
- Call-to-action section
- Multi-column responsive footer with email subscription input

---

## Tech Stack

- **HTML5**
- **Tailwind CSS v4** (via `@tailwindcss/cli`)
- **Vanilla JavaScript** (minimal — menu toggle + card slider)
- **Font Awesome 7** (icons)
- **Vercel** (deployment)

---

## Getting Started

### Prerequisites

- Node.js installed
- npm installed

### Installation

```bash
git clone https://github.com/razamughal333/Real-Estate.git
cd Real-Estate
npm install
```

### Development

Watch for changes and auto-rebuild CSS:

```bash
npm run watch
```

Then open `src/index.html` in your browser.

---

## Project Structure

```
Real-Estate/
├── src/
│   ├── index.html      # Main HTML file
│   ├── app.js          # JavaScript (menu + slider)
│   ├── input.css       # Tailwind source CSS
│   ├── output.css      # Generated CSS (do not edit)
│   └── images/         # Property and icon images
├── package.json
└── README.md
```

---

## Deployment

Deployed on **Vercel** with automatic redeployment on every `git push` to `main`.

---

## License

MIT © 2026 Raza Ahmed
