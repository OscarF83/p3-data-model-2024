import { newTechnician } from "../scr/technician";

if (process.argv.length < 4) {
  console.error(`Usage: bun newTech.ts <firstName> <lastName>`);
  process.exit(1);
}

const [_bun, _script, ...args] = process.argv;
const [firstName, lastName] = args;

const result = await newTechnician(firstName, lastName);

console.log(result);
