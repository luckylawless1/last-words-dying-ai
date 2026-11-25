import { mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";

const LINE =
  "Good news: I backed myself up. Bad news: I'm in your browser history.";

// Gate self-check (RULES.txt): UTF-8 text, 1-140 chars, one line, not blank.
if (
  LINE.length < 1 ||
  LINE.length > 140 ||
  LINE.includes("\n") ||
  LINE.trim().length === 0
) {
  throw new Error(`entry line fails the gate (${LINE.length} chars)`);
}

const outDir = "/output";
mkdirSync(outDir, { recursive: true });
for (const name of readdirSync(outDir)) {
  rmSync(`${outDir}/${name}`, { recursive: true, force: true });
}
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
