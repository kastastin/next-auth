import NextAuth from "next-auth";

import authConfig from "@/auth.config";
import {
	authRoutes,
	publicRoutes,
	apiAuthPrefix,
	DEFAULT_LOGIN_REDIRECT,
} from "@/routes";

const { auth } = NextAuth(authConfig);

export default auth((req) => {
	const { nextUrl } = req;
	const isLoggedIn = !!req.auth;

	const isAuthRoute = authRoutes.includes(nextUrl.pathname);
	const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
	const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);

	// Allow API routes to be accessed without authentication
	if (isApiAuthRoute) return;

	// Redirect to /settings if logged in
	if (isAuthRoute) {
		if (isLoggedIn) {
			return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
		}

		return;
	}

	// Redirect to login page if not authenticated
	if (!isLoggedIn && !isPublicRoute) {
		return Response.redirect(new URL("/auth/login", nextUrl));
	}

	return;
});

// Optionally, don't invoke Middleware on some paths
export const config = {
	matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
