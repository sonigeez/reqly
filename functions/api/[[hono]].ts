import { Hono } from "hono";
import { handle } from "hono/cloudflare-pages";
import { apiRoute } from "../../backend";

const app = new Hono({
	strict: false,
});

app.route("/api", apiRoute);

app.get("/api/*", (c) => {
	return c.text("UNKNOWN ROUTE!");
});

export const onRequest = handle(app);
