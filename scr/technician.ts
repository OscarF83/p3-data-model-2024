import { db } from "./db";

export const newTechnician = async (firstName: string, lastName: string) => {
  const result = await db.technicians.create({
    data: {
      firstName: "Pepito",
      lastName: "DelosPalotes",
    },
  });
  return result;
};
