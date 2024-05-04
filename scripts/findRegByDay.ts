import { findRegisterByDay } from "../scr/register";

if (process.argv.length < 3) {
  console.error(`Usage: bun findRegByDay.ts <day> as <DD-MM-YYYY>`);
  process.exit(1);
}

const [_bun, _script, ...args] = process.argv;
const [day] = args;
console.log(day);

if (day.length < 10){
    console.error(`Error: Format data must be like -> <DD-MM-YYYY>. Ex: 01-01-2024`);
    process.exit(1);   
}

const result = await findRegisterByDay(day);
console.log(result);