import { createLink } from "@/db/actions/links";
import { getUniqueUser } from "@/db/actions/users";
import { NextRequest, NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";

export async function POST(req: NextRequest) {
  const { link, shortId, email } = await req.json();

  try {
    if (!link) {
      return { error: "Link is required", CODE: "NO_LINK" };
    }
    const user = await getUniqueUser(email);

    await createLink(uuidv4(), shortId, link, user[0].id);

    return NextResponse.json({
      message: "Link created successfully",
      CODE: "SUCCESS",
    });
  } catch (err) {
    return NextResponse.json({ error: "Internal Server Error", status: 500 });
  }
}
