import Credentials from "next-auth/providers/credentials";
import type { NextAuthConfig } from "next-auth";
import bcrypt from "bcryptjs";

import { LoginSchema } from "@/schemas";
import { getUserByEmail } from "@/data/user";

export default {
	providers: [
		Credentials({
			async authorize(credentials) {
				const validatedfields = LoginSchema.safeParse(credentials);

				if (validatedfields.success) {
					const { email, password } = validatedfields.data;

					const user = await getUserByEmail(email);
					if (!user || !user.password) return null;

					const passwordsMatch = await bcrypt.compare(password, user.password);
					if (passwordsMatch) return user;
				}

				return null;
			},
		}),
	],
} satisfies NextAuthConfig;
