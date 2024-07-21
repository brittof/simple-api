import chalk from "chalk";
import { App } from "#/main";

Bun.serve({
	port: 3333,
	fetch: App.fetch
});

console.log(
	chalk.bgHex("#a6e3a1").hex("").bold(" Observable: "),
	chalk.bold("http://localhost:3333")
);
