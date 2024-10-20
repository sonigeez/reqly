import { defineConfig } from "drizzle-kit";

export default defineConfig({
	dialect: "sqlite",
	driver: "d1-http",
	out: "drizzle",
	schema: "./src/db/schema.ts",
	dbCredentials: {
		accountId: "Xpxnc9s67p",
		databaseId: "befe3e1c-16fc-4106-b4ab-1c21b4a8b778",
		token: "0m5IB2WggiU_XMbveKOTLQtmdu4sWEf2_VKANJvy",
	},
});
