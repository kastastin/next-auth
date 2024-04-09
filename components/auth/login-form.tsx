"use client";

import { useState, useTransition } from "react";
import { useSearchParams } from "next/navigation";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { LoginSchema } from "@/schemas";
import { login } from "@/actions/login";

import {
	Form,
	FormItem,
	FormLabel,
	FormControl,
	FormMessage,
	FormField,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FormError } from "@/components/form-error";
import { CardWrapper } from "@/components/auth/card-wrapper";
import { FormSuccess } from "@/components/form-success";

export function LoginForm() {
	const searchParams = useSearchParams();
	const urlError =
		searchParams.get("error") === "OAuthAccountNotLinked"
			? "Email already in use with different provider"
			: "";

	const [error, setError] = useState<string | undefined>("");
	const [success, setSuccess] = useState<string | undefined>("");
	const [isPending, startTransition] = useTransition();

	const form = useForm<z.infer<typeof LoginSchema>>({
		resolver: zodResolver(LoginSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	});

	function onSubmit(values: z.infer<typeof LoginSchema>) {
		// Clear states
		setError("");
		setSuccess("");

		startTransition(() => {
			login(values).then((data) => {
				setError(data?.error);
				setSuccess(data?.success);
			});
		});
	}

	return (
		<CardWrapper
			headerLabel="Welcome back"
			backButtonLabel="Don't have an account?"
			backButtonHref="/auth/register"
			showSocial
		>
			<Form {...form}>
				<form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
					<div className="space-y-4">
						{/* Email input */}
						<FormField
							name="email"
							control={form.control}
							render={({ field }) => (
								<FormItem>
									<FormLabel>Email</FormLabel>

									<FormControl>
										<Input
											{...field}
											type="email"
											placeholder="kastastin@dev.com"
											disabled={isPending}
										/>
									</FormControl>

									<FormMessage />
								</FormItem>
							)}
						/>

						{/* Password input */}
						<FormField
							name="password"
							control={form.control}
							render={({ field }) => (
								<FormItem>
									<FormLabel>Password</FormLabel>

									<FormControl>
										<Input
											{...field}
											type="password"
											placeholder="********"
											disabled={isPending}
										/>
									</FormControl>

									<FormMessage />
								</FormItem>
							)}
						/>
					</div>

					<FormError message={error || urlError} />
					<FormSuccess message={success} />

					{/* Submit button */}
					<Button type="submit" className="w-full" disabled={isPending}>
						Login
					</Button>
				</form>
			</Form>
		</CardWrapper>
	);
}
