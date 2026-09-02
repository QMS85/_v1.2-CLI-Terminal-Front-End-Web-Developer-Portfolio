/* CLI Terminal Portfolio — plain JavaScript */
const cvUrl = "UpdatedCVOfJPeters.pdf";
const commandNames = ["help", "bio", "skills", "projects", "certs", "contact", "github", "history", "download cv", "clear"];

// DOM Element Validation
const output = document.getElementById("terminalOutput");
const input = document.getElementById("terminalInput");
const form = document.getElementById("terminalForm");
const dateTime = document.getElementById("localDateTime");
const timezone = document.getElementById("localTimezone");
const sessionTimezone = document.getElementById("sessionTimezone");
const toast = document.getElementById("toast");
const themeButton = document.getElementById("themeButton");
const themeIcon = document.getElementById("themeIcon");
const themeLabel = document.getElementById("themeLabel");
const clearButton = document.getElementById("clearButton");

// Validate critical elements exist
if (!output || !input || !form || !toast || !dateTime || !timezone || !sessionTimezone || !themeButton || !themeIcon || !themeLabel) {
  console.error("Critical DOM elements missing!");
  throw new Error("Required terminal elements not found in HTML");
}

let commandHistory = readStorage("terminalHistory", []);
let historyIndex = -1;
let isDarkMode = readStorage("isDarkMode", true);
let toastTimer;

function readStorage(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value === null ? fallback : JSON.parse(value);
  } catch {
    return fallback;
  }
}

function writeStorage(key, value) {
  try { 
    localStorage.setItem(key, JSON.stringify(value)); 
  } catch { 
    /* Storage can be unavailable in private browsing. */ 
  }
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;"
  }[character]));
}

function link(href, label) {
  return `<a class="term-link" href="${href}" target="_blank" rel="noreferrer">${label} ↗</a>`;
}

function card(title, content, tone = "") {
  return `<section class="term-card ${tone}"><h2>${title}</h2>${content}</section>`;
}

function bio() {
  return card("DEVELOPER PROFILE", `
    <p><strong>Name:</strong> Jonathan Peters</p>
    <p><strong>Title:</strong> Front-End Web Developer</p>
    <p><strong>Experience:</strong> 4+ Years</p>
    <p><strong>Location:</strong> South Africa</p>
    <h3>About</h3>
    <p>Passionate About Building Accessible, Responsive, High-Performance Web Interfaces. Specialized In Converting Designs To Production-Ready Code With A Focus On User Experience And Performance Optimization.</p>
    <h3>Current Focus</h3>
    <ul><li>Expanding Expertise In Full-Stack Development With Node.js</li><li>Learning TypeScript For Type-Safe JavaScript Development</li><li>Building Scalable Web Applications With Modern Tooling</li></ul>
    <h3>Contact</h3>
    <p>Email: ${link("mailto:jonathanpeters051@gmail.com", "jonathanpeters051@gmail.com")}</p>
    <p>Professional Profile: ${link("https://linkedin.com/in/2jonathanpeters", "LinkedIn")}</p>
  `, "blue");
}

function skills() {
  const groups = [
    ["Languages", "HTML5 · CSS3 · JavaScript (ES6+) · Python · TypeScript · jQuery"],
    ["Frameworks & Libraries", "React · Bootstrap · jQuery · SASS/SCSS"],
    ["Tools & Platforms", "Git · GitHub · GitHub CLI · VS Code · Figma"],
    ["APIs & Services", "REST APIs · GitHub API · Weather API · Geolocation API"],
    ["Back-End (Still Learning)", "Node.js · Express.js · MongoDB · Database Design"],
    ["AI Assistant Tools", "GitHub Copilot · ChatGPT · Google Gemini · Groq · Replit · Base44"],
    ["Deployment & Hosting", "GitHub Pages · Netlify · Vercel · Streamlit · Traditional Hosting"],
    ["Soft Skills", "Problem-solving · Communication · Attention to Detail · Collaborative Development · Self-Learning"]
  ];
  return card("TECHNICAL SKILLS", `<div class="skill-grid">${groups.map(([name, value]) => `<div class="skill-item"><b>${name}</b><span>${value}</span></div>`).join("")}</div>`, "green");
}

function projects() {
  const portfolios = [
    ["Front End Web Developer Portfolio", "Front End Web Developer Portfolio", "https://qms85.github.io/v1-CLI-Terminal-Portfolio/"],
    ["v1 CLI Terminal Theme", "Front End Web Developer Portfolio", "https://qms85.github.io/v1-CLI-Terminal-Portfolio/"],
    ["v1.2 CLI Terminal Theme", "Front End Web Developer Portfolio", "https://qms85.github.io/_v1.2-CLI-Terminal-Front-End-Web-Developer-Portfolio/"]
  ];
  const featured = [
    ["Gem-Jumper", "Interactive Platform Game", "https://gem-jumper-f4f91f18.base44.app/"],
    ["Funky Snake Game", "Retro Style Game", "https://qms85.github.io/SnakeGame2025/"],
    ["GitHub User Search", "API Integration", "https://qms85.github.io/Github-User-Search/"],
    ["Crypto Tracker Pro", "Real-time Data", "https://qms85.github.io/CryptoTrackerPro/"]
  ];
  const figma = [
    ["Job Listings", "https://qms85.github.io/JobListings/"],
    ["Product List with Cart", "https://qms85.github.io/ProductListWithCart/"],
    ["EasyBank Landing Page", "https://qms85.github.io/EasyBankLandingPage/"],
    ["IP Address Tracker", "https://qms85.github.io/IPAddressTracker/"],
    ["Social Links Profile", "https://qms85.github.io/SocialLinks/"],
    ["QR Code Generator", "https://qms85.github.io/QRCode/"]
  ];
  const additional = [
    ["Multi Timezone Clock", "https://qms85.github.io/MultiTimeZoneClock/"],
    ["Music Player", "https://qms85.github.io/MusicPlayer/"],
    ["Meme Generator", "https://qms85.github.io/MemeGenerator/"],
    ["Password Generator", "https://qms85.github.io/Password-Generator/"],
    ["Simple Calculator", "https://qms85.github.io/GitHubCalculator/"]
  ];
  
  const list = (items, start = 1, detailed = true) => `<ol class="project-list" start="${start}">${items.map(([name, description, href], index) => `<li><span class="project-number">${String(index + start)}</span>${link(href, name)}${detailed ? `<br><small>${description}</small>` : ""}</li>`).join("")}</ol>`;
  
  return card("PORTFOLIO PROJECTS", `<h3>Portfolio Websites</h3>${list(portfolios)}<h3>Featured Projects</h3>${list(featured)}<h3>Figma Design Implementation</h3>${list(figma, 5, false)}<h3>Additional Projects</h3>${list(additional, 11, false)}`);
}

function certs() {
  const certifications = [
    ["Responsive Web Design (RWD)", "https://www.freecodecamp.org/certification/jonathan_peters/responsive-web-design-v9"],
    ["JavaScript Algorithms & Data Structures", "https://www.freecodecamp.org/certification/Jonathan_Peters/javascript-algorithms-and-data-structures-v8"],
    ["Front End Development Libraries", "https://www.freecodecamp.org/certification/Jonathan_Peters/front-end-development-libraries"],
    ["Data Visualization with D3.js", "https://www.freecodecamp.org/certification/Jonathan_Peters/data-visualization"]
  ];
  return card("CERTIFICATIONS & ACHIEVEMENTS", `<p>All Certifications From freeCodeCamp.</p>${certifications.map(([name, href]) => `<div class="cert-row"><span class="cert-mark">✓</span>${link(href, name)}</div>`).join("")}`);
}

function contact() {
  return card("CONTACT & SOCIAL LINKS", `
    <h3>Direct Contact</h3><p>Email: ${link("mailto:jonathanpeters051@gmail.com", "jonathanpeters051@gmail.com")}</p>
    <h3>Professional Networks</h3><p>${link("https://linkedin.com/in/2jonathanpeters", "LinkedIn Profile")}</p><p>${link("https://github.com/QMS85", "GitHub Profile")}</p>
    <h3>Social Media</h3><p>${link("https://twitter.com/DJJonnas85", "X / Twitter")}</p><p>${link("https://facebook.com/2jonathanpeters", "Facebook")}</p>
    <h3>Open to</h3><ul><li>Freelance Web Development Projects</li><li>Contract Frontend Development Work</li><li>Full-time Developer Positions</li><li>Collaboration & Partnership Opportunities</li></ul>
  `, "green");
}

function help() {
  return card("AVAILABLE COMMANDS", `<h3>Navigation</h3><ul>${["bio — View developer profile & background", "skills — Technical stack and expertise", "projects — Highlighted portfolio projects", "certs — Certifications & achievements", "contact — Contact & social links", "github — GitHub statistics", "history — Command history", "download cv — Download your CV", "clear — Clear terminal", "help — Show this help message"].map(cmd => `<li>${cmd}</li>`).join("")}</ul>`);
}

function historyOutput() {
  if (!commandHistory.length) return `<p class="response-muted">No command history yet. Start typing commands.</p>`;
  return card("COMMAND HISTORY (LAST 20)", `<ol reversed>${commandHistory.slice(0, 20).map((command) => `<li>${escapeHtml(command)}</li>`).join("")}</ol><p>Total commands executed: ${commandHistory.length}</p>`);
}

async function github() {
  const response = await fetch("https://api.github.com/users/QMS85");
  if (!response.ok) throw new Error("Unable to fetch GitHub data.");
  const data = await response.json();
  return card("GITHUB STATISTICS", `<p><strong>Username:</strong> ${link("https://github.com/QMS85", "@QMS85")}</p><div class="stats-grid"><div class="stat"><b>${data.public_repos}</b><span>Public Repos</span></div><div class="stat"><b>${data.followers}</b><span>Followers</span></div><div class="stat"><b>${data.following}</b><span>Following</span></div></div>`);
}

function commandResponse(command) {
  switch (command) {
    case "help": return help();
    case "bio": return bio();
    case "skills": return skills();
    case "projects": return projects();
    case "certs": return certs();
    case "contact": return contact();
    case "github": return github();
    case "history": return historyOutput();
    case "download cv": return card("CV DOWNLOAD", `<p><strong>Status:</strong> <span class="prompt-user">CV download ready.</span></p><p><a class="term-link" href="${cvUrl}" download>Download Updated CV</a></p>`);
    default: return null;
  }
}

function appendLine(html, className = "response") {
  const line = document.createElement("div");
  line.className = `term-line ${className}`;
  line.innerHTML = html;
  output.appendChild(line);
  output.scrollTop = output.scrollHeight;
  return line;
}

function showToast(message) {
  toast.textContent = message;
  toast.hidden = false;
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => { toast.hidden = true; }, 3000);
}

function execute(rawCommand) {
  const command = rawCommand.toLowerCase().trim();
  if (!command) return;
  commandHistory = [command, ...commandHistory].slice(0, 50);
  writeStorage("terminalHistory", commandHistory);
  historyIndex = -1;
  document.querySelectorAll(".command-button").forEach((button) => button.classList.toggle("active", button.dataset.command === command.split(" ")[0]));
  appendLine(`<div class="prompt-line"><span class="prompt-user">user@portfolio</span>:<span class="prompt-path">~</span>$ ${escapeHtml(command)}</div>`, "command");
  if (command === "clear") { output.innerHTML = ""; return; }
  if (!commandNames.includes(command)) {
    appendLine(`Command not found: '${escapeHtml(command)}'. Type 'help' for available commands.`, "response-error");
    return;
  }
  const result = commandResponse(command);
  if (result && typeof result.then === "function") {
    const loading = appendLine(`<div class="loading-bar"></div><p class="response-muted">Running ${command}...</p>`, "loading");
    result.then((html) => { loading.remove(); appendLine(html); }).catch((error) => { loading.remove(); appendLine(escapeHtml(error.message), "response-error"); });
  } else if (result) {
    appendLine(result);
  }
}

function updateLocalDateTime() {
  const now = new Date();
  const resolved = Intl.DateTimeFormat().resolvedOptions();
  const formatted = new Intl.DateTimeFormat(undefined, { dateStyle: "medium", timeStyle: "medium" }).format(now);
  dateTime.textContent = formatted;
  dateTime.setAttribute("datetime", now.toISOString()); // ✅ FIXED
  timezone.textContent = resolved.timeZone || "Local timezone";
  sessionTimezone.textContent = resolved.timeZone || "local timezone";
}

function applyTheme() {
  document.documentElement.classList.toggle("light-theme", !isDarkMode);
  themeIcon.textContent = isDarkMode ? "◐" : "☀";
  themeLabel.textContent = isDarkMode ? "dark mode" : "light mode";
}

// Event Listeners
document.querySelectorAll("[data-command]").forEach((button) => {
  button.addEventListener("click", () => { execute(button.dataset.command); input.focus(); });
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  execute(input.value);
  input.value = "";
});

input.addEventListener("keydown", (event) => {
  if (event.key === "ArrowUp") {
    event.preventDefault();
    if (commandHistory.length && historyIndex < commandHistory.length - 1) input.value = commandHistory[++historyIndex];
  }
  if (event.key === "ArrowDown") {
    event.preventDefault();
    if (historyIndex > -1) input.value = commandHistory[--historyIndex] || "";
  }
  if (event.key === "Tab") {
    event.preventDefault();
    const matches = commandNames.filter((command) => command.startsWith(input.value.toLowerCase().trim()));
    if (matches.length === 1) input.value = matches[0];
    else if (matches.length > 1) showToast(`Found ${matches.length} matches: ${matches.join(", ")}`);
  }
});

// Safe event listener attachment
if (clearButton) {
  clearButton.addEventListener("click", () => { output.innerHTML = ""; input.focus(); });
}

themeButton.addEventListener("click", () => { 
  isDarkMode = !isDarkMode; 
  writeStorage("isDarkMode", isDarkMode); 
  applyTheme(); 
  showToast(`${isDarkMode ? "Dark" : "Light"} mode activated`); 
});

// Initialize
applyTheme();
updateLocalDateTime();
window.setInterval(updateLocalDateTime, 1000);
