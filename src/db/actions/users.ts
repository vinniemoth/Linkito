import { db } from "../db";
import { eq, and } from "drizzle-orm";
import { usersTable } from "../schema/user";

export const createUser = async (
  id: string,
  name: string,
  email: string,
  password: string
) => {
  const result = await db
    .insert(usersTable)
    .values({ id, name, email, password })
    .returning({
      id: usersTable.id,
      name: usersTable.name,
      email: usersTable.email,
      password: usersTable.password,
    });
  return result;
};

export const getUniqueUser = async (email: string) => {
  const result = await db
    .select()
    .from(usersTable)
    .where(and(eq(usersTable.email, email)));
  return result;
};
