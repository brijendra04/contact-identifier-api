import prisma from "../config/db";

export const identifyContact = async (phone: string, email?: string) => {
  const contacts = await prisma.contact.findMany({
    where: {
      OR: [{ phone }, { email }],
    },
  });

  return contacts;
};
