import { newRegister } from "../scr/register";

if (process.argv.length < 3) {
  console.error(`Usage: bun newReg.ts <day> <hours> <techId> <labId> <projectId>`);
  process.exit(1);
}

const [_bun, _script, ...args] = process.argv;
const [day, hours, techId, labId, projectId] = args;
const hoursNum = +hours;
const techIdNum = +techId;
const labIdNum = +labId;
const projectIdNum = +projectId;

const result = await newRegister(day, hoursNum, techIdNum, labIdNum, projectIdNum);
console.log(result);
