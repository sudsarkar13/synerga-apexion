"use client";

import RegisterForm from "@/components/auth/RegisterForm";
import { DarkModeToggle } from "@/components/themes/DarkModeToggle";
import Image from "next/image";

export default function RegisterPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 p-4">
      <div className="w-full max-w-md flex flex-col items-center mb-8">
        <Image
          src="/favicon.ico"
          alt="Dr. Reach Insights Logo"
          width={60}
          height={60}
          className="mb-4"
        />
        <div className="w-full flex justify-end">
          <DarkModeToggle />
        </div>
      </div>
      <RegisterForm />
    </div>
  );
}
