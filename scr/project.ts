import { db } from "./db";

export const newProject = async (projectName: string) => {
  try {
  const result = await db.projects.create({
    data: {
      projectName,
    },
  });
  return result;
} catch (e) {
  return "Error with database. Remember that It is not possible create more than one project with the same name"
}
};
