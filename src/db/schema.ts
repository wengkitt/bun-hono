import { integer, pgTable, varchar } from 'drizzle-orm/pg-core'

// Example table: replace or extend this with your application's actual schema.
export const users = pgTable('users', {
  id: integer('id').primaryKey().generatedAlwaysAsIdentity(),
  name: varchar('name', { length: 255 }).notNull(),
})
