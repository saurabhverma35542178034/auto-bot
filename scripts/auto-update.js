// scripts/auto-update.js
const fs = require("fs");

const path = "AUTO_UPDATE.md";
const now = new Date().toISOString();

const content = `# Auto Update\n\nLast update: ${now}\n`;
fs.writeFileSync(path, content, "utf8");

console.log("Updated", path);
