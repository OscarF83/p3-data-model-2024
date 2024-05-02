import { db } from "./db";

export const newRegister = async (
  day: string,
  hours: number,
  techId: number,
  labId: number,
  projectId: number
) => {
  try {
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
  } catch (e) {
    return "Error: techId, labId, projectId no válidos no existen";
  }
};
