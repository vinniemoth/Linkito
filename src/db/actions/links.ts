import { db } from "../db";
import { eq } from "drizzle-orm";
import { linksTable } from "../schema/links";

export const createLink = async (
  id: string,
  alias: string,
  shortId: string,
  originalUrl: string,
  authorId: string
) => {
  const result = await db
    .insert(linksTable)
    .values({ id, alias, shortId, originalUrl, authorId })
    .returning({
      id: linksTable.id,
      alias: linksTable.alias,
      shortId: linksTable.shortId,
      originalUrl: linksTable.originalUrl,
      authorId: linksTable.authorId,
    });
  return result;
};

export const checkLink = async (shortId: string) => {
  const result = await db
    .select()
    .from(linksTable)
    .where(eq(linksTable.shortId, shortId));
  return result;
};

export const fetchLink = async (id: string) => {
  const result = await db
    .select()
    .from(linksTable)
    .where(eq(linksTable.authorId, id));
  return result;
};

export const deleteLink = async (id: string) => {
  const result = await db.delete(linksTable).where(eq(linksTable.id, id));
  return result;
};

export const getOriginalLink = async (shortId: string) => {
  const result = await db
    .select()
    .from(linksTable)
    .where(eq(linksTable.shortId, shortId));
  return result[0];
};
