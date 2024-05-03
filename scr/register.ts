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
export const findRegisterByTechId = async (
  techId: number,
) => {
  try {
    const result = await db.hoursRegister.findMany({
      where: {
        techId,
      },
    });
    return result;
  } catch (e) {
    return "Error: techId no válido no existe";
  }
};