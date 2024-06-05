import { create } from "@/models/meeting.model";

export async function POST(req: Request) {
  const meeting = await req.json();

  try {
    await create({
      ...meeting,
    });

    return Response.json({ success: true }, { status: 201 });
  } catch (error) {
    console.error(error);
    return Response.json({ message: "Create meeting failed" }, { status: 500 });
  }
}
