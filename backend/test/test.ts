import { Hono } from "hono";

export const testRoute = new Hono();

testRoute.get("/", (c) => c.text("Test route"));
