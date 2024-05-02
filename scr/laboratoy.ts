import { db } from "./db";

export const newLaboratory = async (labName: string) => {
  const result = await db.laboratories.create({
    data: {
      labName,
    },
  });
  return result;
};
