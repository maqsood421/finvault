"use client";

import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import dynamic from "next/dynamic";

// Dynamically import Navbar (because it's a client component)
const Navbar = dynamic(() => import("../components/Navbar"), { ssr: false });

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { userId } = await auth();

  if (!userId) redirect("/sign-in");

  return (
    <>
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 py-10">{children}</main>
    </>
  );
}
