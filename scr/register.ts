import { db } from "./db";

export const newRegister = async (
  day: string,
  hours: number,
  techId: number,
  labId: number,
  projectId: number
) => {
  const result = await db.hoursRegister.create({
    data: {
      day,
      hours,
      techId,
      labId,
      projectId,
    },
  });
  return result;
};
