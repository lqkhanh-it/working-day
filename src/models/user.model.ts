import { PrismaClient, User } from "@prisma/client";

const prisma = new PrismaClient();

export async function create(user: Omit<User, "created_at">): Promise<User> {
  return await prisma.user.create({ data: user });
}

export async function get(id: number): Promise<User | null> {
  return await prisma.user.findUnique({ where: { id } });
}

export async function index(
  startAfter: number,
  limit: number
): Promise<User[] | null> {
  return await prisma.user.findMany({
    where: {
      id: {
        gt: startAfter,
      },
    },
    include: {
      meeting: {
        orderBy: {
          start_day: "asc",
        }
      },
    },
    orderBy: {
      id: "asc",
    },
    take: limit,
  });
}

export async function getByEmail(email: string): Promise<User | null> {
  return await prisma.user.findFirst({ where: { email } });
}
