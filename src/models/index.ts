import { ulid } from "ulid";
import * as v from "valibot";

export const UserSchema = v.object({
	id: v.optional(v.string(), ulid()),
	email: v.pipe(v.string(), v.email(), v.endsWith("@actos.com.br")),
	name: v.pipe(v.string(), v.maxLength(30)),
	role: v.picklist(["sales", "support", "delivery", "member"], "member")
});

export type User = v.InferInput<typeof UserSchema>;
