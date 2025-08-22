import { NextRequest, NextResponse } from "next/server";
import { createUser, getUniqueUser } from "@/db/actions/users";
import { v4 as uuidv4 } from "uuid";
const bcrypt = require("bcrypt");

export async function POST(req: NextRequest) {
  const { name, email, password } = await req.json();
  const encryptedPassword = await bcrypt.hash(password, 10);
  const newUser = await createUser(uuidv4(), name, email, encryptedPassword);
  return NextResponse.json("User created successfully");
}
