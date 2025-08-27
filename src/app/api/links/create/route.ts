import { checkLink, createLink } from "@/db/actions/links";
import { getUniqueUser } from "@/db/actions/users";
import { nanoid } from "nanoid";
import { NextRequest, NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";

export async function POST(req: NextRequest) {
  const { link, email } = await req.json();

  try {
    if (!link) {
      return { error: "Link is required", CODE: "NO_LINK" };
    }

    const user = await getUniqueUser(email);

    let shortId;
    let existingLink;

    do {
      shortId = nanoid(7);
      existingLink = await checkLink(shortId);
    } while (existingLink.length !== 0);

    await createLink(uuidv4(), shortId, link, user[0].id);
    console.log(shortId);

    return NextResponse.json({
      message: "Link created successfully",
      CODE: "SUCCESS",
      shortId,
    });
  } catch (err) {
    return NextResponse.json({ error: "Internal Server Error", status: 500 });
  }
}
