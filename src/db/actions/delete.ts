import { db } from "../db";
import { linksTable } from "../schema/links";

async function deleteLinks() {
  await db.delete(linksTable).execute();
}

deleteLinks();
