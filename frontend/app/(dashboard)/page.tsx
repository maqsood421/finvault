"use client";

import { useUser } from "@clerk/nextjs";
import Image from "next/image";

const DashboardPage = () => {
  const { user } = useUser();

  return (
    <main className="max-w-6xl mx-auto px-4 py-10 pt-35 pb-10">
      {/* Greeting */}
      <h1 className="text-3xl font-bold mb-6">
        Welcome back,{" "}
        <span className="text-indigo-600">{user?.firstName || "User"}</span> 👋
      </h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        <div className="bg-white shadow-md rounded-xl p-6">
          <p className="text-gray-500 text-sm">Total Balance</p>
          <h2 className="text-2xl font-semibold mt-2">$12,450.00</h2>
        </div>
        <div className="bg-white shadow-md rounded-xl p-6">
          <p className="text-gray-500 text-sm">Monthly Expenses</p>
          <h2 className="text-2xl font-semibold mt-2">$2,140.00</h2>
        </div>
        <div className="bg-white shadow-md rounded-xl p-6">
          <p className="text-gray-500 text-sm">Upcoming Bills</p>
          <h2 className="text-2xl font-semibold mt-2">$480.00</h2>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="bg-white shadow-md rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-4">Recent Transactions</h2>
        <ul className="divide-y">
          <li className="flex justify-between py-3">
            <span>Netflix Subscription</span>
            <span className="text-red-500">- $13.99</span>
          </li>
          <li className="flex justify-between py-3">
            <span>Salary</span>
            <span className="text-green-500">+ $3000.00</span>
          </li>
          <li className="flex justify-between py-3">
            <span>Electricity Bill</span>
            <span className="text-red-500">- $120.50</span>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default DashboardPage;
