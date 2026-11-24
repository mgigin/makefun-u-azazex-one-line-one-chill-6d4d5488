import { mkdirSync, writeFileSync } from "node:fs";

// One Line, One Chill — v2 (revised: tighter rhythm, the last word lands)
// A single sentence of horror, under 200 characters. The scare is earned by
// what it withholds: a warning from tomorrow, in the reader's own hand.
const ENTRY =
  "The parking ticket under my wiper was dated tomorrow, in my own handwriting, and all it said was: don't come back tonight.";

// Gate (kit RULES.txt): /output/entry.txt must be UTF-8 text of 1-200
// characters, not only whitespace, a single line.
const chars = Array.from(ENTRY);
if (chars.length < 1 || chars.length > 200) {
  throw new Error(`entry is ${chars.length} characters, gate needs 1-200`);
}
if (ENTRY.trim().length === 0) throw new Error("entry is only whitespace");
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote ${chars.length} characters to /output/entry.txt`);
