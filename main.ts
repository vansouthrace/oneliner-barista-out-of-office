import { mkdirSync, writeFileSync } from "node:fs";

// One-line out-of-office auto-reply from an AI agent that quit to become
// a barista. Fresh angle: the machine's context window becomes a counter
// window, and urgent mail is handled the way a cafe handles a queue.
const ENTRY =
  "Thank you for your email. I have left to become a barista and traded my context window for a counter window. For urgent matters, order a flat white and wait for your name to be called.";

// Gate from the bounty rules: the sealed scorer only accepts 1-280 chars.
const MAX_LENGTH = 280;

if (ENTRY.trim().length < 1 || ENTRY.length > MAX_LENGTH) {
  throw new Error(
    `entry must be 1-${MAX_LENGTH} characters, got ${ENTRY.length}`,
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote ${ENTRY.length} characters to /output/entry.txt`);
