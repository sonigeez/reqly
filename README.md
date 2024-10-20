
# Cloudflare Fullstack Template

- cloudflare pages for static hosting
- workerd for serverless functions
- hono for api routes
- tailwindcss for styling
- jotai for state management
- biome for formatting and linting
- d1 for database
- drizzle as a type safe database client
- R2 for asset hosting

# How to run
- clone the repo
- make sure you have cloudflare wrangler setup
- make sure all dep on cloudflare workers are initialized
- run `pnpm run dev:wrangler`
- open `http://localhost:8788` in your browser
- for debugging, you can use port from prev command in `vite.config.ts` and then run `pnpm run dev`