import { prisma } from "~/db.server";

export const createUser = async (email: string, password: string) => {
  const user = await prisma.user.create({
    data: {
      email,
      password,
    },
  });
  return user;
};

export const getUser = async (email: string) => {
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });
  return user;
};
