"use client";

import LoginForm from "@/components/auth/LoginForm";
import { DarkModeToggle } from "@/components/themes/DarkModeToggle";
import Image from "next/image";

export default function LoginPage() {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 p-4">
			<div className="w-full max-w-md flex flex-col items-center mb-8">
				<Image
					src="/favicon.ico"
					alt="Synerga Apexion Logo"
					width={60}
					height={60}
					className="mb-4"
				/>
				<div className="w-full flex justify-end">
					<DarkModeToggle />
				</div>
			</div>
			<LoginForm />
		</div>
	);
}
