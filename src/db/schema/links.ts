import { sqliteTable, text } from "drizzle-orm/sqlite-core";
import { usersTable } from "./user";

export const linksTable = sqliteTable("links", {
  id: text().primaryKey().unique(),
  shortId: text().notNull().unique(),
  originalUrl: text().notNull(),
  authorId: text()
    .notNull()
    .references(() => usersTable.id),
});
