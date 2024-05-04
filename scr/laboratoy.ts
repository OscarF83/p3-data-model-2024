import { db } from "./db";

export const newLaboratory = async (labName: string) => {
  try {
  const result = await db.laboratories.create({
    data: {
      labName,
    },
  });
  return result;
} catch {
  return "Error with database. Remember that It is not possible create more than one laboratory with the same name"
}
};
