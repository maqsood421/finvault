"use client";

import { useUser } from "@clerk/nextjs";

const TransactionsPage = () => {
  const { user } = useUser();

  const transactions = [
    { id: 1, name: "Groceries", amount: -52.99, date: "2025-06-25" },
    { id: 2, name: "Freelance Payment", amount: 1500.0, date: "2025-06-24" },
    { id: 3, name: "Spotify", amount: -9.99, date: "2025-06-23" },
  ];

  return (
    <main className="max-w-6xl mx-auto px-4 py-10 pt-30 pb-10">
      <h1 className="text-3xl font-bold mb-6 text-indigo-600">Transactions</h1>
      <div className="bg-white shadow-md rounded-xl overflow-hidden">
        <table className="min-w-full table-auto">
          <thead className="bg-indigo-100 text-indigo-700">
            <tr>
              <th className="text-left px-4 py-3">Description</th>
              <th className="text-left px-4 py-3">Date</th>
              <th className="text-right px-4 py-3">Amount</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((txn) => (
              <tr key={txn.id} className="border-t">
                <td className="px-4 py-3">{txn.name}</td>
                <td className="px-4 py-3">{txn.date}</td>
                <td
                  className={`px-4 py-3 text-right font-medium ${
                    txn.amount < 0 ? "text-red-500" : "text-green-500"
                  }`}
                >
                  {txn.amount < 0 ? "- $" : "+ $"}
                  {Math.abs(txn.amount).toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default TransactionsPage;
