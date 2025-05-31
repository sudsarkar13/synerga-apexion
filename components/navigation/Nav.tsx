import Link from "next/link";
import { DarkModeToggle } from "@/components/themes/DarkModeToggle";
import { Button } from "@/components/ui/button";

export function Nav() {
  return (
    <nav className="fixed w-full bg-white dark:bg-gray-900 shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="text-2xl font-bold text-indigo-600 dark:text-indigo-400"
            >
              Synerga Apexion
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <DarkModeToggle />
            <Button asChild>
              <Link href="/auth/login">Get Started</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
