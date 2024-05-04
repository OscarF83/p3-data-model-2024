import { db } from "./db";

export const newTechnician = async (firstName: string, lastName: string) => {
  const result = await db.technicians.create({
    data: {
      firstName,
      lastName,
    },
  });
  return result;
};
export const findByTechnician = async (firstName: string) => {
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
};
