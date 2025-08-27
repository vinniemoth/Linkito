import { getServerSession } from "next-auth";
import { authOptions as Auth } from "@/app/api/auth/[...nextauth]/route";
import { NextResponse } from "next/server";
import { getUniqueUser } from "@/db/actions/users";
import { fetchLink } from "@/db/actions/links";

export async function GET() {
  const session = await getServerSession(Auth);

  if (!session?.user?.email) {
    return NextResponse.json({ error: "Unauthorized", CODE: "UNAUTHORIZED" });
  }
  const user = await getUniqueUser(session.user.email);

  const links = await fetchLink(user[0].id);

  return NextResponse.json({ JSON: links, CODE: "SUCCESS" });
}
