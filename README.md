To install dependencies:
```sh
bun install
```

Set up PostgreSQL and copy `.env.example` to `.env`, then update `DATABASE_URL` with your database credentials. Bun loads `.env` automatically.

The sample `users` table lives in `src/db/schema.ts`; replace or extend it with your own tables. Generate a migration after changing the schema, then apply it to your database:

```sh
bun run db:generate
bun run db:migrate
```

Import `db` from `src/db` in your routes to query PostgreSQL. `bun run db:studio` opens Drizzle Studio; `bun run typecheck` checks TypeScript types. Migrations in `drizzle/` should be committed.

To run the backend:
```sh
bun run dev
```

open http://localhost:3000
