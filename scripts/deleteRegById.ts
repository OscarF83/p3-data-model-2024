import { deleteRegisterById } from "../scr/register";

if (process.argv.length < 3) {
  console.error(`Usage: bun deleteRegById <Id>`);
  process.exit(1);
}

const [_bun, _script, ...args] = process.argv;
const [Id] = args;
const IdNum = +Id;


const result = await deleteRegisterById(IdNum);
console.log(result);
