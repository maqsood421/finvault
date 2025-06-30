"use client";

import { useUser } from "@clerk/nextjs";
import Navbar from "./Navbar";

export default function NavbarWrapper() {
  const { isSignedIn } = useUser();

  if (!isSignedIn) return null;

  return <Navbar />;
}
