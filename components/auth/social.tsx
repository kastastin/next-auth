"use client";

import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

import { Button } from "@/components/ui/button";

export function Social() {
	return (
		<div className="flex w-full items-center gap-x-2">
			{/* Google button */}
			<Button variant="outline" size="lg" className="w-full" onClick={() => {}}>
				<FcGoogle className="size-5" />
			</Button>

			{/* Github button */}
			<Button variant="outline" size="lg" className="w-full" onClick={() => {}}>
				<FaGithub className="size-5" />
			</Button>
		</div>
	);
}
