import { NextRequest, NextResponse } from "next/server";
import { createUser, getUniqueUser } from "@/db/actions/users";
import { v4 as uuidv4 } from "uuid";
const bcrypt = require("bcrypt");

export async function POST(req: NextRequest) {
  const { name, email, password } = await req.json();

  try {
    if (!name || !email || !password) {
      return NextResponse.json({
        message: "All fields are required",
        CODE: "MISSING_FIELDS",
      });
    }
    const existingUser = await getUniqueUser(email);

    if (existingUser.length === 1) {
      return NextResponse.json({
        message: "Account with this email already exists",
        CODE: "EXISTING_EMAIL",
      });
    }

    const encryptedPassword = await bcrypt.hash(password, 10);
    await createUser(uuidv4(), name, email, encryptedPassword);

    return NextResponse.json({
      message: "User created successfully",
      CODE: "SUCCESS",
    });
  } catch (error) {
    return NextResponse.json({ error: "Internal Server Error", status: 500 });
  }
}
