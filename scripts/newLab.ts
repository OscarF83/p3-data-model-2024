import { newLaboratory } from "../scr/laboratoy";

if (process.argv.length < 3) {
  console.error(`Usage: bun newLab.ts <labName>`);
  process.exit(1);
}

const [_bun, _script, ...args] = process.argv;
const [labName] = args;

const result = await newLaboratory(labName);

console.log(result);
