import { db } from "./db";

export const newProject = async (projectName: string) => {
  const result = await db.projects.create({
    data: {
      projectName,
    },
  });
  return result;
};
