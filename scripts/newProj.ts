import { newProject } from "../scr/project";

if (process.argv.length < 3) {
  console.error(`Usage: bun newProj.ts <projectName>`);
  process.exit(1);
}

const [_bun, _script, ...args] = process.argv;
const [projectName] = args;

const result = await newProject(projectName);

console.log(result);
