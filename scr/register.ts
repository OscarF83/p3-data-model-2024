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
    return "Error: techId, labId, projectId do not exist, are invalid";
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
    return "Error: techId entered does not exist";
  }
};
export const findRegisterByDay = async (
  day: string,
) => {
  try {
    const result = await db.hoursRegister.findMany({
      where: {
        day,
      },
    });
    return result;
  } catch (e) {
    return "Error: techId does not exist";
  }
};
export const deleteRegisterById = async (
  hoursRegisterId: number,
) => {
  try {
    const result = await db.hoursRegister.delete({
      where: {
        hoursRegisterId,
      },
    });
    return result;
  } catch (e) {
    return "Error: hoursRegisteredhId does not exist";
  }
};