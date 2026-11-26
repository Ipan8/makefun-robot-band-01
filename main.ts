import { mkdirSync, writeFileSync } from "node:fs";

// Entry: a robot band name + its hit single. The joke has to land on the
// first read, so the name is a keyboard shortcut every dev knows and the
// song title turns a crash into a break-up ballad.
const entry =
  "Ctrl+Alt+Defeat — hit single 'Blue Screen of Love', a power ballad about a robot who keeps crashing on the first date.";

if (entry.length >= 200) {
  throw new Error(`entry too long: ${entry.length} chars (max 199)`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry);
console.log(entry);
