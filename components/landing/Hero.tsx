import React from "react";
import { DottedGrid } from "@/components/pattern/DottedGrid";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const Hero: React.FC = () => {
	return (
		<main>
			<section className="relative bg-white/80 dark:bg-[#1F2937] overflow-hidden">
				<DottedGrid className="absolute inset-0 z-0 opacity-100" />
				<div className="max-w-7xl mx-auto">
					<div className="relative z-10 pb-8 bg-white dark:bg-gray-800 dark:bg-opacity-100 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
						<DottedGrid className="absolute inset-0 z-0 opacity-100" />
						<svg
							className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white dark:text-gray-800 transform translate-x-1/2"
							fill="currentColor"
							viewBox="0 0 100 100"
							preserveAspectRatio="none"
							aria-hidden="true">
							<polygon points="50,0 100,0 50,100 0,100" />
						</svg>
						<div className="relative px-4 sm:px-6 lg:px-8 pt-24 sm:pt-24 lg:pt-32">
							<div className="text-center sm:text-left md:text-center lg:text-left">
								<h1 className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
									<span className="block xl:inline">Revolutionize Your</span>{" "}
									<span className="block text-indigo-600 xl:inline">
										Project Management
									</span>
								</h1>
								<p className="mt-3 text-base text-gray-500 dark:text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
									Synerga Apexion is a comprehensive project management tool
									that combines Kanban-based task management, RBAC, and
									AI-powered insights to streamline your workflow and boost
									productivity.
								</p>
								<div className="mt-5 sm:mt-8 sm:flex sm:justify-start md:justify-center lg:justify-start">
									<div className="rounded-md lg:shadow-xl">
										<Button asChild size="lg" className={`shadow-xl`}>
											<Link href="/auth/login">Get Started</Link>
										</Button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
					<Image
						className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
						src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
						alt="Project Management"
						width={2070}
						height={1380}
					/>
				</div>
			</section>
		</main>
	);
};

export default Hero;
