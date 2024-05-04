import { findRegisterByTechId} from "../scr/register";

if (process.argv.length < 3) {
  console.error(`Usage: bun findRegByTechId.ts <techId>`);
  process.exit(1);
}

const [_bun, _script, ...args] = process.argv;
const [techId] = args;
const techIdNum = +techId;


const result = await findRegisterByTechId(techIdNum);
console.log(result);
