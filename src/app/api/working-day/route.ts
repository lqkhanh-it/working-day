import { index } from "@/models/user.model";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const limit = parseInt(searchParams.get("limit") || "");
  const after = parseInt(searchParams.get("after") || "");

  const payload = await index(after, limit);

  return Response.json(payload);
}
