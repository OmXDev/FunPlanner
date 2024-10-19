import React, { useState } from 'react';

const BudgetTracker = ({ onClose }) => {
  const [totalBudget, setTotalBudget] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');
  const [expenses, setExpenses] = useState([]);

  // Function to add a budget category
  const addCategory = () => {
    if (category && amount) {
      const newExpense = { category, amount: parseFloat(amount) };
      setExpenses([...expenses, newExpense]);
      setCategory('');
      setAmount('');
    }
  };

  // Calculate total expenses
  const totalExpenses = expenses.reduce((acc, curr) => acc + curr.amount, 0);

  return (
    <div className="fixed inset-0 bg-gray-700 bg-opacity-70 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-6xl min-h-[80vh] relative">
        <h2 className="text-2xl font-bold mb-6 text-center">Budget Tracker</h2>

        {/* Total Budget Input */}
        <div className="mb-6">
          <input
            type="number"
            value={totalBudget}
            onChange={(e) => setTotalBudget(e.target.value)}
            placeholder="Enter total budget"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 mb-4"
          />
        </div>

        {/* Budget Category Input */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
          <div>
            <input
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              placeholder="Expense Category (e.g., Decoration, Food)"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 mb-4"
            />
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Amount"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 mb-4"
            />
            <button
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 w-full"
              onClick={addCategory}
              disabled={!category || !amount}
            >
              Add Expense
            </button>
          </div>

          {/* Expense List */}
          <div className="bg-gray-100 p-4 rounded-lg h-[500px] overflow-y-auto">
            <h3 className="font-medium text-lg mb-4">Expenses</h3>
            {expenses.length > 0 ? (
              <ul className="space-y-3">
                {expenses.map((expense, index) => (
                  <li
                    key={index}
                    className="flex justify-between items-center p-2 bg-white rounded-lg shadow-sm"
                  >
                    <div>
                      <p className="text-lg font-semibold">{expense.category}</p>
                      <p className="text-sm text-gray-500">Amount: Rs.{expense.amount}</p>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-600">No expenses added yet.</p>
            )}
          </div>
        </div>

        {/* Total Expenses and Remaining Budget */}
        <div className="flex justify-between items-center mt-6">
          <p className="text-lg font-bold">Total Expenses: Rs.{totalExpenses}</p>
          <p className="text-lg font-bold">
            Remaining Budget: Rs.{totalBudget ? totalBudget - totalExpenses : 0}
          </p>
        </div>

        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
          onClick={onClose}
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default BudgetTracker;
