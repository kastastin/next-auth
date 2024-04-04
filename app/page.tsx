import { Button } from "@/components/ui/button";
import { LoginButton } from "@/components/auth/login-button";

export default function HomePage() {
	return (
		<main className="bg-custom-gradient flex h-full flex-col items-center justify-center">
			<div className="space-y-6 text-center">
				<h1 className="text-6xl font-bold text-white drop-shadow-md">
					🔐 Auth
				</h1>

				<p className="text-lg text-white">A simple authentication service</p>

				<div>
					<LoginButton asChild>
						<Button variant="secondary" size="lg">
							Sign in
						</Button>
					</LoginButton>
				</div>
			</div>
		</main>
	);
}
