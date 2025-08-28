import { getOriginalLink } from "@/db/actions/links";
import { notFound } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  context: { params: { id: string } }
) {
  const params = await context.params;

  const link = await getOriginalLink(params.id);
  if (!link || !link.originalUrl) {
    const url = new URL("/not-found", req.url);
    return NextResponse.redirect(url, 302);
  } else {
    return NextResponse.redirect(link.originalUrl, 302);
  }
}
