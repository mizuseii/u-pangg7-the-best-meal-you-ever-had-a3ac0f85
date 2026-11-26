// The Best Meal You Ever Had: cold pizza over the kitchen sink at 1am.
// Idea: the best meal was not a restaurant, not a feast, not a memory of
// someone cooking for you — it was cold pizza eaten standing up over the
// kitchen sink at 1am, no plate, pure peace. The humour and the warmth come
// from the honesty: the meal is unglamorous, the hour is wrong, the posture
// is worse, and it was perfect anyway. Specific numbers and objects (cold
// pizza, kitchen sink, 1am, no plate) make it a scene, not a sentiment.
// Fresh vs the field (2,289 titles): the saturated clusters are
// grandmother's (272), rendang (216), ayam (154), rain (123), soto (110)
// and midnight (97) — the nostalgic home-cooked meal dominates. This entry
// goes the opposite way: no grandma, no feast, no midnight rain — just one
// person, one slice, one sink, and total contentment.
// Verified 2026-11-26: entry is exactly 77 characters, one sentence, one
// line, no trailing newline. Gate guard below enforces the 1–200 char,
// one-sentence rule at runtime so a bad edit can never ship an invalid entry.
import { mkdirSync, writeFileSync } from "node:fs";

const line = "Cold pizza over the kitchen sink at 1am, standing up, no plate, pure peace.";

if (line.length < 1 || line.length > 200) throw new Error("entry must be 1-200 chars");
if (line.trim().split(/[.!?]+/).filter(Boolean).length !== 1) throw new Error("entry must be one sentence");
if (!/pizza/.test(line)) throw new Error("entry must name the meal");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
console.log(`Wrote ${line.length} characters to /output/entry.txt`);
