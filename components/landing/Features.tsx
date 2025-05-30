import React from "react";
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
import { Button } from "@/components/ui/button";

const Features: React.FC = () => {
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

	return (
		<main>
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
		</main>
	);
};

export default Features;
