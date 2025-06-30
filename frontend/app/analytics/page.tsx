"use client";

import { useUser } from "@clerk/nextjs";

const AnalyticsPage = () => {
  const { user } = useUser();

  return (
    <main className="max-w-6xl mx-auto px-4 py-10 pt-30 pb-10">
      <h1 className="text-3xl font-bold mb-6 text-indigo-600">Analytics</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white shadow-md rounded-xl p-6">
          <h2 className="text-lg font-semibold mb-2">Spending Overview</h2>
          <p className="text-gray-600">This month you spent $654.75</p>
        </div>

        <div className="bg-white shadow-md rounded-xl p-6">
          <h2 className="text-lg font-semibold mb-2">Income vs Expenses</h2>
          <p className="text-gray-600">Income: $3,200 | Expenses: $1,820</p>
        </div>

        <div className="bg-white shadow-md rounded-xl p-6 md:col-span-2">
          <h2 className="text-lg font-semibold mb-2">Suggestions</h2>
          <ul className="list-disc list-inside text-gray-600">
            <li>Reduce subscriptions to save $45/mo</li>
            <li>Consider consolidating credit card payments</li>
            <li>Invest 10% of monthly income for long-term growth</li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default AnalyticsPage;
