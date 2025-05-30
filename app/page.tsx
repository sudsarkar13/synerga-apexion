"use client";

import React from "react";
import { Nav } from "@/components/navigation/Nav";
import { Footer } from "@/components/footer/Footer";
import { DottedGrid } from "@/components/pattern/DottedGrid";
import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import OrganizationManagement from "@/components/landing/OrganizationManagement";

export default function Home() {
	return (
		<div className="min-h-screen bg-gray-50 dark:bg-gray-900 relative">
			<Nav />
			<DottedGrid className="absolute inset-0 z-0 opacity-100" />
			<main className="relative z-10">
				{/* Hero Section */}
				<Hero />

				{/* Features Section */}
				<Features />

				{/* Organization Management Section */}
				<OrganizationManagement />
			</main>
			<Footer />
		</div>
	);
}
