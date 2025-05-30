"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Nav } from "@/components/navigation/Nav";
import { Button } from "@/components/ui/button";
import {
	Trello,
	Shield,
	Brain,
	BarChart,
	Users,
	Calendar,
	Zap,
	GitBranch,
	FileText,
	MessageSquare,
	Briefcase,
	Award,
	LineChart,
	Lock,
	Cloud,
	Plug,
	UserPlus,
	FileBarChart,
	ShieldCheck,
	ChartPie,
	Workflow,
	FileSignature,
	CheckCircle,
	ChevronDown,
	ChevronUp,
} from "lucide-react";
import { Footer } from "@/components/footer/Footer";
import { DottedGrid } from "@/components/pattern/DottedGrid";
import Hero from "@/components/landing/Hero";

export default function Home() {
	const [showAllFeatures, setShowAllFeatures] = React.useState(false);

	const features = [
		{
			name: "Kanban Board",
			description:
				"Visualize your workflow with customizable Kanban boards for efficient task management.",
			icon: Trello,
		},
		{
			name: "RBAC Security",
			description:
				"Ensure data security with Role-Based Access Control for granular permissions management.",
			icon: Shield,
		},
		{
			name: "AI-Powered Insights (In the Future Updates)",
			description:
				"Leverage artificial intelligence for predictive analytics and automated task assignment.",
			icon: Brain,
		},
		{
			name: "Comprehensive Reporting",
			description:
				"Generate detailed reports on project progress, employee performance, and organizational insights.",
			icon: BarChart,
		},
		{
			name: "Employee Management",
			description:
				"Streamline HR processes with employee database management and automated onboarding.",
			icon: Users,
		},
		{
			name: "Project Planning",
			description:
				"Plan projects with Gantt charts, resource allocation, and agile sprint planning.",
			icon: Calendar,
		},
		{
			name: "Automation & Integration",
			description:
				"Automate workflows and integrate with popular tools to enhance productivity.",
			icon: Zap,
		},
		{
			name: "DevOps Integration",
			description:
				"Seamlessly integrate with DevOps tools for continuous integration and delivery.",
			icon: GitBranch,
		},
		{
			name: "Document Management",
			description:
				"Centralize and organize all project-related documents and files.",
			icon: FileText,
		},
		{
			name: "Team Collaboration",
			description:
				"Foster team communication with real-time commenting and @mentioning features.",
			icon: MessageSquare,
		},
		{
			name: "Client Management",
			description:
				"Manage client relationships with a secure portal for updates and file sharing.",
			icon: Briefcase,
		},
		{
			name: "Performance Recognition",
			description:
				"Recognize and reward top performers with integrated certificate generation.",
			icon: Award,
		},
		{
			name: "Organization Insights",
			description:
				"Gain valuable insights into organizational performance with customizable dashboards.",
			icon: LineChart,
		},
		{
			name: "Data Encryption",
			description:
				"Ensure data security with end-to-end encryption and automated backups.",
			icon: Lock,
		},
		{
			name: "Cloud Integration",
			description:
				"Seamlessly integrate with cloud storage providers for scalable data management.",
			icon: Cloud,
		},
		{
			name: "API & Marketplace",
			description:
				"Extend functionality with our API and marketplace for third-party integrations.",
			icon: Plug,
		},
	];

	const visibleFeatures = showAllFeatures ? features : features.slice(0, 8);

	const orgManagementFeatures = [
		{
			name: "Employee Database",
			description:
				"Maintain a comprehensive employee database with customizable fields and filters.",
			icon: Users,
		},
		{
			name: "Automated Onboarding",
			description:
				"Streamline the onboarding process with automated workflows and task assignments.",
			icon: UserPlus,
		},
		{
			name: "Performance Tracking",
			description:
				"Monitor employee performance with customizable KPIs and metrics.",
			icon: FileBarChart,
		},
		{
			name: "Certificate Generation",
			description:
				"Automatically generate certificates and awards for employee recognition.",
			icon: ShieldCheck,
		},
	];

	const extendedOrgFeatures = [
		{
			name: "Organization Performance Charts",
			description:
				"Visualize your organization's performance with interactive and customizable charts.",
			icon: ChartPie,
			image:
				"https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
		},
		{
			name: "Workflow Management",
			description:
				"Design and implement custom workflows for various organizational processes.",
			icon: Workflow,
			image:
				"https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
		},
		{
			name: "Document Generation",
			description:
				"Automatically generate offer letters, LORs, and other important documents.",
			icon: FileSignature,
			image:
				"https://images.unsplash.com/photo-1618044733300-9472054094ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
		},
	];

	return (
		<div className="min-h-screen bg-gray-50 dark:bg-gray-900 relative">
			<Nav />
			<DottedGrid className="absolute inset-0 z-0 opacity-100" />
			<main className="relative z-10">
				{/* Hero Section */}
				<Hero />

				{/* Features Section */}
				<section className="relative py-12 bg-gray-200/50 dark:bg-gray-800/60">
					<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
						<div className="text-center">
							<h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
								Features
							</h2>
							<p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
								A comprehensive solution for project management
							</p>
							<p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-300 lg:mx-auto">
								Synerga Apexion offers a suite of powerful features to enhance
								your project management and organizational operations.
							</p>
						</div>

						<div className="mt-10">
							<dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-x-8 md:gap-y-10">
								{visibleFeatures.map((feature) => (
									<div key={feature.name} className="relative">
										<dt>
											<div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
												<feature.icon className="h-6 w-6" aria-hidden="true" />
											</div>
											<p className="ml-16 text-lg leading-6 font-medium text-gray-900 dark:text-white">
												{feature.name}
											</p>
										</dt>
										<dd className="mt-2 ml-16 text-base text-gray-500 dark:text-gray-300">
											{feature.description}
										</dd>
									</div>
								))}
							</dl>
						</div>

						{features.length > 8 && (
							<div className="mt-10 text-center">
								<div className="inline-block relative">
									<div className="absolute inset-0 bg-indigo-300 blur-xl opacity-50 rounded-lg"></div>
									<Button
										onClick={() => setShowAllFeatures(!showAllFeatures)}
										variant="outline"
										size="lg"
										className="relative bg-indigo-600 text-white hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 transition-all duration-300 ease-in-out">
										{showAllFeatures ? (
											<>
												Show Less <ChevronUp className="ml-2 h-4 w-4" />
											</>
										) : (
											<>
												Show More <ChevronDown className="ml-2 h-4 w-4" />
											</>
										)}
									</Button>
								</div>
							</div>
						)}
					</div>
				</section>

				{/* Organization Management Section */}
				<section className="relative py-16 bg-gray-300/10 dark:bg-gray-800/50">
					<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
						<div className="text-center mb-12">
							<h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
								Organization Management
							</h2>
							<p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
								Empower Your Organization
							</p>
							<p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-300 lg:mx-auto">
								Synerga Apexion provides powerful tools to manage your
								organization efficiently, from employee onboarding to
								performance tracking.
							</p>
						</div>

						<div className="mt-10">
							<dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-x-8 md:gap-y-10">
								{orgManagementFeatures.map((feature) => (
									<div
										key={feature.name}
										className="relative bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md">
										<dt>
											<div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
												<feature.icon className="h-6 w-6" aria-hidden="true" />
											</div>
											<p className="ml-16 text-lg leading-6 font-medium text-gray-900 dark:text-white">
												{feature.name}
											</p>
										</dt>
										<dd className="mt-2 ml-16 text-base text-gray-500 dark:text-gray-300">
											{feature.description}
										</dd>
									</div>
								))}
							</dl>
						</div>

						{/* Extended Organization Management Features */}
						<div className="mt-20">
							<h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
								Advanced Organization Management Features
							</h3>
							<div className="space-y-12">
								{extendedOrgFeatures.map((feature, index) => (
									<div
										key={feature.name}
										className={`flex flex-col lg:flex-row items-center ${
											index % 2 === 1 ? "lg:flex-row-reverse" : ""
										}`}>
										<div className="lg:w-1/2">
											<Image
												src={feature.image}
												alt={feature.name}
												width={500}
												height={300}
												className="rounded-lg shadow-md"
											/>
										</div>
										<div className="lg:w-1/2 mt-6 lg:mt-0 lg:px-8">
											<div className="flex items-center mb-4">
												<feature.icon className="h-8 w-8 text-indigo-500 mr-4" />
												<h4 className="text-xl font-bold text-gray-900 dark:text-white">
													{feature.name}
												</h4>
											</div>
											<p className="text-gray-600 dark:text-gray-300">
												{feature.description}
											</p>
											<ul className="mt-4 space-y-2">
												<li className="flex items-center text-gray-600 dark:text-gray-300">
													<CheckCircle className="h-5 w-5 text-green-500 mr-2" />
													Customizable and interactive
												</li>
												<li className="flex items-center text-gray-600 dark:text-gray-300">
													<CheckCircle className="h-5 w-5 text-green-500 mr-2" />
													Real-time data updates
												</li>
												<li className="flex items-center text-gray-600 dark:text-gray-300">
													<CheckCircle className="h-5 w-5 text-green-500 mr-2" />
													Integration with other modules
												</li>
											</ul>
										</div>
									</div>
								))}
							</div>
						</div>

						<div className="mt-16 bg-gray-50 dark:bg-gray-700 p-8 rounded-lg shadow-md">
							<h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
								How It Works
							</h3>
							<div className="flex flex-col md:flex-row items-center">
								<div className="md:w-1/2 pr-4">
									<p className="text-gray-600 dark:text-gray-300 mb-4">
										The Organization Management module in Synerga Apexion
										operates as a central hub for all your HR and employee
										management needs. It seamlessly integrates with the project
										management features, allowing you to:
									</p>
									<ul className="list-disc pl-5 mb-4 text-gray-600 dark:text-gray-300">
										<li>
											Manage employee data and generate unique Employee IDs
										</li>
										<li>
											Monitor organization and employee performance with
											customizable charts and metrics
										</li>
										<li>
											Automate the employee onboarding and offboarding processes
										</li>
										<li>
											Generate insightful reports on organizational performance
										</li>
										<li>
											Create and manage offer letters, certificates, and letters
											of recommendation
										</li>
										<li>
											Track employee performance through integrated workflow
											charts
										</li>
									</ul>
									<p className="text-gray-600 dark:text-gray-300">
										By centralizing these functions, Synerga Apexion enables
										your organization to operate more efficiently, make
										data-driven decisions, and foster a culture of recognition
										and continuous improvement.
									</p>
								</div>
								<div className="md:w-1/2 mt-6 md:mt-0">
									<Image
										src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
										alt="Organization Management"
										width={500}
										height={300}
										className="w-full h-auto rounded-lg shadow-md"
									/>
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>
			<Footer />
		</div>
	);
}
