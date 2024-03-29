import { env } from "app/config/env";
import { revalidateTag } from "next/cache";

export async function POST(request: Request) {
  const body = await request.json();
  const { tag, token } = body;

  if (!tag || !token) {
    return Response.json({ error: "Mising tag or token" }, { status: 400 });
  }

  if (token !== env.shopify.CACHE_TOKEN) {
    return Response.json({ error: "Invalid token" }, { status: 401 });
  }

  revalidateTag(tag);
  return Response.json({ success: true });
}
