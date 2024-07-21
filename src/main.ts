import { Hono } from "hono";
import Router from "#/routes";

export const App = new Hono();

App.route("/", Router(App));
