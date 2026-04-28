// Atomic block replacement in curriculum.js
// Usage: node replace.js <topic_id>
const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const CURRICULUM = path.join(ROOT, "src", "data", "curriculum.js");
const EDITS = __dirname;

const tid = process.argv[2];
if (!tid) {
  console.error("usage: node replace.js <id>");
  process.exit(2);
}

const old = fs.readFileSync(path.join(EDITS, `old_${tid}.txt`), "utf8");
const fresh = fs.readFileSync(path.join(EDITS, `new_${tid}.txt`), "utf8");

const content = fs.readFileSync(CURRICULUM, "utf8");

let idx = content.indexOf(old);
if (idx === -1) {
  console.error(`ERROR: old block for ${tid} not found`);
  process.exit(1);
}
const idx2 = content.indexOf(old, idx + 1);
if (idx2 !== -1) {
  console.error(`ERROR: old block for ${tid} matches more than once`);
  process.exit(1);
}

const updated = content.slice(0, idx) + fresh + content.slice(idx + old.length);

const dir = path.dirname(CURRICULUM);
const tmp = path.join(dir, `.curriculum.${process.pid}.${Date.now()}.tmp`);
fs.writeFileSync(tmp, updated, "utf8");
fs.renameSync(tmp, CURRICULUM);

console.log(`OK: ${tid} replaced (${old.length} -> ${fresh.length} chars)`);
