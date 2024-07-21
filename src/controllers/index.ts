import { db } from "#/config/client";
import type { User } from "#/models";

export const all = () => {
	return db.user.findMany();
};

export const create = async (user: User) => {
	return db.user.create({ data: user });
};
