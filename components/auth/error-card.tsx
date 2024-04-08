import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

import { CardWrapper } from "@/components/auth/card-wrapper";

export function ErrorCard() {
	return (
		<CardWrapper
			headerLabel="Oops! Something went wrong!"
			backButtonLabel="Back to login"
			backButtonHref="/auth/login"
		>
			<div className="flex w-full items-center justify-center">
				<ExclamationTriangleIcon className="size-10 text-destructive" />
			</div>
		</CardWrapper>
	);
}
