import { db } from "../db";
import { eq } from "drizzle-orm";
import { linksTable } from "../schema/links";

export const createLink = async (
  id: string,
  shortId: string,
  originalUrl: string,
  authorId: string
) => {
  const result = await db
    .insert(linksTable)
    .values({ id, shortId, originalUrl, authorId })
    .returning({
      id: linksTable.id,
      shortId: linksTable.shortId,
      originalUrl: linksTable.originalUrl,
      authorId: linksTable.authorId,
    });
  return result;
};

export const fetchLink = async (id: string) => {
  const result = await db
    .select()
    .from(linksTable)
    .where(eq(linksTable.authorId, id));
  return result;
};
