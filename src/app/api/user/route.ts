import { create } from "@/models/user.model";

export async function POST(req: Request) {
  const user = await req.json();

  try {
    await create({
      ...user,
    });

    return Response.json({ success: true }, { status: 201 });
  } catch (error) {
    console.error(error);
    return Response.json({ message: "Registration failed" }, { status: 500 });
  }
}
