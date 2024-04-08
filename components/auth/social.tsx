"use client";

import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { Button } from "@/components/ui/button";

export function Social() {
	function onClick(provider: "google" | "github") {
		signIn(provider, { callbackUrl: DEFAULT_LOGIN_REDIRECT });
	}

	return (
		<div className="flex w-full items-center gap-x-2">
			{/* Google button */}
			<Button
				variant="outline"
				size="lg"
				className="w-full"
				onClick={() => onClick("google")}
			>
				<FcGoogle className="size-5" />
			</Button>

			{/* Github button */}
			<Button
				variant="outline"
				size="lg"
				className="w-full"
				onClick={() => onClick("github")}
			>
				<FaGithub className="size-5" />
			</Button>
		</div>
	);
}
