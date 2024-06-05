import { Meeting, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function create(
  meeting: Omit<Meeting, "created_at">
): Promise<Meeting> {
  return await prisma.meeting.create({ data: meeting });
}

export async function get(id: number): Promise<Meeting | null> {
  return await prisma.meeting.findUnique({ where: { id } });
}

export async function getByUser(userId: number): Promise<Meeting[] | null> {
  return await prisma.meeting.findMany({ where: { user_id: userId } });
}
