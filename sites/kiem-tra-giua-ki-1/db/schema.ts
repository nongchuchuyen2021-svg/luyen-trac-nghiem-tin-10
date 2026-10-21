// Intentionally empty by default.
// Add Drizzle tables here when the site actually needs a database.
// See examples/d1/db/schema.ts for an opt-in example.
import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";
export const examDocuments = sqliteTable("exam_documents", { key: text("key").primaryKey(), payload: text("payload").notNull() });
export const examMeta = sqliteTable("exam_meta", { id: text("id").primaryKey(), revision: integer("revision").notNull().default(0), token: text("token").notNull().default(""), audit: text("audit").notNull().default("[]") });
