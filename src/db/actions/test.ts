import { db } from "../db";
import { usersTable } from "../schema/user.ts";

async function deleteUsers() {
  await db.delete(usersTable).execute();
}

deleteUsers();
