import { Nunito } from "next/font/google";

import type { Metadata } from "next";
import "./globals.css";

const fontFamily = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Next Auth",
	description:
		"Auth toolkit with reuseable components, hooks and utils to use auth in server & client components, api routes and server actions",
};

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en">
			<body className={fontFamily.className}>{children}</body>
		</html>
	);
}
