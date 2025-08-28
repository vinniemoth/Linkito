import { getOriginalLink } from "@/db/actions/links";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  context: { params: { id: string } }
) {
  const params = await context.params;

  const link = await getOriginalLink(params.id);
  if (!link || !link.originalUrl) {
    return NextResponse.json({ error: "Link not found", CODE: "NOT_FOUND" });
  } else {
    return NextResponse.json({ link, CODE: "SUCESS" });
  }
}
