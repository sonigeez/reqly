import { Env, Hono } from "hono";
import { testRoute } from "./test/test";
import { type DbInstance, initDbConnect } from "./db";

type Environment = Env & {
	Bindings: {
		DB: D1Database;
		BUCKET: R2Bucket;
		ENV_TYPE: "dev" | "prod" | "stage";
	};
};

export const apiRoute = new Hono<Environment>({
	strict: false,
});

let db: DbInstance;

apiRoute.use(async (c, next) => {
	try {
		db = initDbConnect(c.env.DB);
	} catch (error) {
		console.error("Failed to initialize services:", error);
		throw error;
	}
	await next();
});

apiRoute.get("/", (c) => c.json({ message: "Hello world", initial_count: 10 }));

apiRoute.route("/test", testRoute);
