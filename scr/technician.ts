import { db } from "./db";

export const newTechnician = async (firstName: string, lastName: string) => {
  try {
  const result = await db.technicians.create({
    data: {
      firstName,
      lastName,
    },
  });
  return result;
} catch (e) {
  return "Error with database"
}
};
export const findByTechnician = async (firstName: string) => {
  try {
  const result = await db.technicians.findMany({
    select:{
      firstName: true,
      lastName: true,
      hoursRegister:{
        select:{
          day: true,
          hours: true,
          labId: true,
          projectId: true
        }
      }
    },
    where: {
      firstName,
    },
  });
  return result;
} catch (e) {
  return "Error with data base"
}
};
