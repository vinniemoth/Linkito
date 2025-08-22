import { getUniqueUser } from "@/db/actions/users";
import { NextRequest, NextResponse } from "next/server";
const bcrypt = require("bcrypt");

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();
  const user = await getUniqueUser(email);

  if (!user) {
    return NextResponse.json({ message: "Wrong credentials" });
  }

  const isValid = await bcrypt.compare(password, user[0].password);

  if (!isValid) {
    return NextResponse.json({ message: "Wrong credentials" });
  }

  return NextResponse.json("User logged in successfully.");
}
