import { findByTechnician } from "../scr/technician";

if (process.argv.length < 3) {
  console.error(`Usage: bun findTechByFirstName.ts <firstName>`);
  process.exit(1);
}

const [_bun, _script, ...args] = process.argv;
const [firstName] = args;

const result = await findByTechnician(firstName);

console.log(result);
