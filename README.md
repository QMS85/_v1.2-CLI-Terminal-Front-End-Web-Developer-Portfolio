# CLI Terminal Portfolio v1.2 — Jonathan Peters

> **An Interactive, Terminal-Styled Portfolio Website** showcasing my journey as a **Front-End Web Developer** with 4+ years of experience. Built with **vanilla HTML, CSS, and JavaScript** — no frameworks, pure performance.

<div align="center">

[![Portfolio Live](https://img.shields.io/badge/🌐_Portfolio-Live-success?style=flat-square)](https://qms85.github.io/_v1.2-CLI-Terminal-Front-End-Web-Developer-Portfolio/)
[![GitHub Stars](https://img.shields.io/github/stars/QMS85/_v1.2-CLI-Terminal-Front-End-Web-Developer-Portfolio?style=flat-square)](https://github.com/QMS85/_v1.2-CLI-Terminal-Front-End-Web-Developer-Portfolio)
[![License](https://img.shields.io/badge/License-MIT-blue?style=flat-square)](LICENSE)
[![Status](https://img.shields.io/badge/Status-Active-brightgreen?style=flat-square)]()

</div>

---

## 🎯 Overview

This is **v1.2** of my portfolio — a **terminal-styled interactive experience** that reimagines how developers showcase their work. Instead of a traditional website, visitors interact with a **CLI (Command Line Interface)** terminal where they can:

- 📖 Explore my **bio & professional background**
- 💻 View my **technical skills** across multiple domains
- 🚀 Discover **10+ portfolio projects** I've built
- 🏆 Check my **certifications & achievements**
- 📧 Find **contact & social links**
- 📊 View **live GitHub statistics**
- ⌨️ Browse **command history**
- 🎨 Toggle **light/dark theme**

### Why This Approach?

✨ **Unique First Impression** — Stand out with an unconventional, memorable portfolio  
⚡ **Pure Performance** — No heavy frameworks; vanilla JS delivers instant load times  
🎮 **Engaging UX** — Interactive terminal commands make exploring fun  
📱 **Fully Responsive** — Works seamlessly on mobile, tablet, and desktop  
♿ **Accessible** — Semantic HTML, ARIA labels, keyboard navigation  
🔍 **SEO Optimized** — Proper meta tags, structured data, Open Graph support  

---

## 🚀 Live Demo

### **[Visit Portfolio →](https://qms85.github.io/_v1.2-CLI-Terminal-Front-End-Web-Developer-Portfolio/)**

Try these commands:
- `bio` — Learn about me
- `skills` — See technical expertise
- `projects` — Explore my work
- `certs` — View certifications
- `contact` — Get in touch
- `github` — Real-time GitHub stats
- `help` — See all commands

---

## 📂 Project Structure

```
_v1.2-CLI-Terminal-Front-End-Web-Developer-Portfolio/
├── index.html           # Main HTML structure (semantic, accessible)
├── style.css            # Complete styling (CSS variables, animations, responsive)
├── app.js               # JavaScript logic (command parsing, DOM manipulation)
├── jonathan1.png        # Profile image
├── UpdatedCVOfJPeters.pdf # Downloadable CV
├── README.md            # This file
└── .gitignore           # (Recommended) Exclude node_modules, etc.
```

---

## 🛠️ Technology Stack

| Layer | Technologies |
|-------|--------------|
| **Frontend** | HTML5, CSS3, Vanilla JavaScript (ES6+) |
| **Styling** | CSS Grid, Flexbox, CSS Custom Properties, Animations |
| **Icons & Fonts** | Google Fonts (DM Mono, Space Grotesk) |
| **APIs** | GitHub REST API for live statistics |
| **Hosting** | GitHub Pages |
| **Tools** | Git, GitHub CLI, VS Code, Figma |

---

## 💡 Key Features

### 1. **Interactive Terminal Interface**
- Command-line style interaction
- Real-time command execution
- Visual feedback with animations
- Toast notifications for user actions

### 2. **Dynamic Commands**
```javascript
// Available commands:
help              // Display all commands
bio               // View developer profile
skills            // Technical expertise breakdown
projects          // Portfolio projects showcase
certs             // Certifications from freeCodeCamp
contact           // Social links & contact info
github            // Live GitHub API stats
history           // Last 20 executed commands
download cv       // Download PDF resume
clear             // Clear terminal output
```

### 3. **Smart Local Features**
- ⏰ **Real-time Clock** — Shows visitor's local date/time/timezone
- 🌓 **Dark/Light Mode** — Persistent theme toggle
- 💾 **Command History** — Last 50 commands stored in localStorage
- ⌨️ **Keyboard Shortcuts**:
  - `↑` `↓` Navigate command history
  - `Tab` Auto-complete commands
  - `Enter` Execute command

### 4. **Responsive Design**
- Desktop-first approach
- Mobile breakpoint at 760px
- Touch-friendly buttons
- Optimized for all screen sizes

### 5. **Performance Optimized**
- Zero JavaScript frameworks
- ~25KB total asset size
- Lazy API calls (GitHub fetch on demand)
- CSS animations via GPU acceleration
- Optimized Google Fonts loading

### 6. **Accessibility (A11y)**
- Semantic HTML (`<header>`, `<nav>`, `<section>`, `<main>`)
- ARIA labels for screen readers
- Keyboard navigation support
- Color contrast WCAG AA compliant
- Focus indicators visible

### 7. **SEO Ready**
- Meta tags (description, robots, OG tags)
- Structured semantic HTML
- Open Graph support for social sharing
- Mobile viewport configured
- Favicon included

---

## 📋 Commands Breakdown

### **`bio`**
Displays developer profile with:
- Name, title, experience, location
- Professional summary
- Current focus areas
- Contact information

### **`skills`**
Organized skill categories:
- Languages (HTML5, CSS3, JavaScript, Python, TypeScript)
- Frameworks & Libraries (React, Bootstrap, SASS)
- Tools (Git, GitHub, VS Code)
- APIs & Services
- Back-end technologies (Node.js, Express, MongoDB)
- AI assistants (GitHub Copilot, ChatGPT, etc.)
- Deployment platforms
- Soft skills

### **`projects`**
Four project categories:
1. **Portfolio Websites** — 3 portfolio iterations
2. **Featured Projects** — 4 main showcase projects
3. **Figma Implementations** — 6 design-to-code projects
4. **Additional Projects** — 5 smaller projects

### **`certs`**
All certifications from **freeCodeCamp**:
- Responsive Web Design (RWD)
- JavaScript Algorithms & Data Structures
- Front End Development Libraries
- Data Visualization with D3.js

### **`contact`**
Multiple connection options:
- Direct email
- LinkedIn profile
- GitHub profile
- X/Twitter
- Facebook
- Availability status

### **`github`**
Live statistics via GitHub API:
- Public repositories count
- Followers & following
- Total gists
- Account creation date

---

## 🎨 Styling Highlights

### Color Scheme (CSS Variables)
```css
--bg: #0d1117;           /* Dark background */
--text: #c9d1d9;         /* Primary text */
--green: #3fb950;        /* Success/highlight */
--blue: #58a6ff;         /* Information */
--cyan: #39c5cf;         /* Links/interaction */
--pink: #bc8cff;         /* Accent */
--danger: #ff7b72;       /* Errors */
```

### Key Design Elements
- **Window Chrome** — macOS-style window controls (red, yellow, green dots)
- **Terminal Grid** — Sidebar + main content layout
- **Card Components** — Content sections with colored left borders
- **Animations** — Smooth transitions and entrance effects
- **Responsive Breakpoints** — Desktop, tablet, mobile optimized

---

## 🚀 Getting Started

### Installation & Setup

```bash
# 1. Clone the repository
git clone https://github.com/QMS85/_v1.2-CLI-Terminal-Front-End-Web-Developer-Portfolio.git
cd _v1.2-CLI-Terminal-Front-End-Web-Developer-Portfolio

# 2. Open in your browser (no build step needed!)
open index.html
# or on Linux:
firefox index.html
# or on Windows:
start index.html
```

### Customization Guide

#### **Update Your Profile**
Edit `index.html` lines 86-95:
```html
<img src="your-image.png" alt="Your name profile image" class="profile-image" />
<strong>Your Name</strong>
<span>Your Title</span>
<small>Your Status</small>
```

#### **Modify Commands**
Edit `app.js` — each command has a dedicated function:
```javascript
function bio() {
  return card("YOUR TITLE", `
    <p><strong>Your Info:</strong> Your Details</p>
    <!-- Add your custom content -->
  `, "blue");
}
```

#### **Change Colors**
Update CSS variables in `style.css`:
```css
:root {
  --bg: #your-color;
  --green: #your-color;
  /* etc. */
}
```

#### **Add New Commands**
1. Add command name to `commandNames` array (line 3)
2. Create function for command (e.g., `function newcommand() {...}`)
3. Add case to `commandResponse()` switch statement
4. Add button to HTML sidebar

---

## 📊 GitHub API Integration

The portfolio fetches **live GitHub statistics** using the public GitHub API:

```javascript
async function github() {
  const response = await fetch("https://api.github.com/users/QMS85");
  if (!response.ok) throw new Error("Unable to fetch GitHub data.");
  const data = await response.json();
  // Display: public repos, followers, following, created date
}
```

**No authentication required** — uses public API limits (60 requests/hour).

---

## 📱 Responsive Behavior

| Breakpoint | Changes |
|-----------|---------|
| **Desktop (> 760px)** | 2-column layout (sidebar + content), full commands visible |
| **Tablet/Mobile (≤ 760px)** | Stacked layout, 3-column command grid, optimized spacing |

---

## ♿ Accessibility Features

- ✅ **Semantic HTML** — Proper heading hierarchy, landmark regions
- ✅ **ARIA Labels** — `aria-label`, `aria-live` for screen readers
- ✅ **Keyboard Navigation** — Full tab support, focus indicators
- ✅ **Color Contrast** — WCAG AA compliant
- ✅ **Focus Management** — Visible focus outline on buttons
- ✅ **Form Labels** — Associated labels with inputs

---

## 🔒 Security & Best Practices

- ✅ **HTML Escaping** — All user input sanitized with `escapeHtml()`
- ✅ **No External Scripts** — Just Google Fonts via link tag
- ✅ **HTTPS Ready** — Works perfectly on GitHub Pages (HTTPS by default)
- ✅ **XSS Protection** — No `innerHTML` misuse; proper escaping
- ✅ **CSP Compatible** — Can add Content Security Policy headers

---

## 📈 SEO Optimization

- ✅ **Meta Tags** — Description, robots, Open Graph
- ✅ **Structured Markup** — Semantic HTML5 elements
- ✅ **Mobile Responsive** — Viewport meta tag configured
- ✅ **Performance** — Fast load times, optimized assets
- ✅ **Accessibility** — Better SEO through a11y compliance

---

## 🎓 Learning Value

This project demonstrates:

### **Front-End Development Skills**
- Vanilla JavaScript (no framework dependencies)
- DOM manipulation & event handling
- Async/await for API calls
- localStorage for persistence
- CSS Grid & Flexbox layouts
- Responsive design patterns
- Animations & transitions

### **Best Practices**
- Semantic HTML
- CSS variables & organization
- Modular JavaScript functions
- Error handling & fallbacks
- Performance optimization
- Accessibility standards
- Git version control

### **Developer Experience**
- CLI/terminal interaction design
- User feedback systems (toast notifications)
- Keyboard shortcuts (history, autocomplete)
- Theme persistence
- Error messaging

---

## 🐛 Troubleshooting

### **Commands not working?**
- Ensure `app.js` is properly loaded
- Check browser console for errors
- Verify all DOM elements exist in HTML

### **Styles look broken?**
- Check that `style.css` is linked in `<head>`
- Clear browser cache (Ctrl+Shift+R)
- Test in different browser

### **GitHub stats not loading?**
- Check GitHub API status (api.github.com)
- Verify internet connection
- API has rate limits (60 requests/hour without auth)

### **Local time not updating?**
- Check browser permissions
- Ensure JavaScript is enabled
- Verify `updateLocalDateTime()` function runs

---

## 📦 Dependencies

**None!** This project uses:
- Pure HTML5
- Vanilla CSS3
- Plain JavaScript (ES6+)
- External: Google Fonts (via CDN)
- External API: GitHub REST API (optional)

---

## 📄 License

This project is open source under the **MIT License**. See [LICENSE](LICENSE) file for details.

---

## 🤝 Contributing

Found a bug? Want to suggest improvements?

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/improvement`)
3. **Commit** changes (`git commit -m "Add improvement"`)
4. **Push** to branch (`git push origin feature/improvement`)
5. **Open** a Pull Request

---

## 📞 Let's Connect

- **Portfolio:** [qms85.github.io/_v1.2-CLI-Terminal-Front-End-Web-Developer-Portfolio](https://qms85.github.io/_v1.2-CLI-Terminal-Front-End-Web-Developer-Portfolio/)
- **GitHub:** [@QMS85](https://github.com/QMS85)
- **Email:** [jonathanpeters051@gmail.com](mailto:jonathanpeters051@gmail.com)
- **LinkedIn:** [linkedin.com/in/2jonathanpeters](https://linkedin.com/in/2jonathanpeters)
- **Twitter/X:** [@DJJonnas85](https://twitter.com/DJJonnas85)

---

## 🌟 Acknowledgments

- **Design Inspiration:** Terminal aesthetics, macOS window chrome
- **Fonts:** Google Fonts (DM Mono, Space Grotesk)
- **Icons:** Custom CSS-based symbols
- **Data Source:** GitHub REST API
- **Hosting:** GitHub Pages

---

## 📊 Project Statistics

| Metric | Value |
|--------|-------|
| **Total Files** | 6 (HTML, CSS, JS, Image, PDF, README) |
| **Lines of Code** | ~1,200 (combined) |
| **HTML Size** | ~7.6 KB |
| **CSS Size** | ~11.3 KB |
| **JavaScript Size** | ~13.7 KB |
| **Load Time** | < 1 second |
| **Accessibility** | WCAG AA Compliant |
| **Browser Support** | Modern browsers (ES6+) |

---

## 🗓️ Version History

### **v1.2** (Current)
- 🎨 Improved terminal styling
- ✨ Enhanced animations
- 📱 Better mobile responsiveness
- ⚡ Performance optimizations
- ♿ Improved accessibility
- 📖 Comprehensive documentation

### **v1.0** (Legacy)
- Initial CLI terminal portfolio concept

---

## 🚀 Future Enhancements

- [ ] Add command suggestions/autocomplete improvements
- [ ] Dark mode animations
- [ ] More interactive project cards
- [ ] WebGL background effects
- [ ] Multi-language support
- [ ] Blog section integration
- [ ] Real-time project activity feed
- [ ] Music player integration

---

<div align="center">

### Made with ❤️ by Jonathan Peters

**"Code is poetry written in a language computers understand."**

[⬆ Back to Top](#cli-terminal-portfolio-v12--jonathan-peters)

</div>
