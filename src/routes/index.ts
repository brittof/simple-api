import type { Context, Hono } from "hono";
import * as v from "valibot";

import * as controllers from "#/controllers";
import { UserSchema, type User } from "#/models";

export default function Router(Route: Hono) {
	Route.get("/", async (c: Context) => {
		try {
			const users = await controllers.all();

			return c.json(users);
		} catch (error) {
			return c.body((error as Error).message, 400);
		}
	});

	Route.post("/", async (c: Context) => {
		try {
			const body = (await c.req.json()) as User;
			const user = v.parse(UserSchema, body);

			await controllers.create(user);

			return c.body(null, 204);
		} catch (error) {
			return c.body((error as Error).message, 400);
		}
	});

	return Route;
}
