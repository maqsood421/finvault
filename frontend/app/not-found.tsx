"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-white to-indigo-50 p-6">
      <motion.div
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, type: "spring" }}
        className="text-center"
      >
        <h1 className="text-7xl font-bold text-indigo-600 animate-bounce">
          404
        </h1>
        <p className="text-2xl mt-4 text-gray-700">Page Not Found</p>
        <p className="text-gray-500 mt-2 mb-6">
          Oops! We couldn’t find the page you were looking for.
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-3 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition"
        >
          Go Back Home
        </Link>
      </motion.div>
    </main>
  );
}
