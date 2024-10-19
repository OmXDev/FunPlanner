import React, { useState } from 'react';
import Modal from 'react-modal';

const BudgetCalculatorPopup = ({ isOpen, onRequestClose, onAddExpense, totalExpenses }) => {
  const [expenseName, setExpenseName] = useState('');
  const [amount, setAmount] = useState('');

  const handleAddExpense = () => {
    if (expenseName && amount) {
      onAddExpense({ name: expenseName, amount: parseFloat(amount) });
      setExpenseName('');
      setAmount('');
    }
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <h2 className="text-2xl font-semibold">Budget Calculator</h2>
      <input
        type="text"
        value={expenseName}
        onChange={(e) => setExpenseName(e.target.value)}
        placeholder="Expense Name"
        className="border rounded p-2 mt-4 w-full"
      />
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount"
        className="border rounded p-2 mt-4 w-full"
      />
      <button 
        onClick={handleAddExpense} 
        className="bg-blue-600 text-white py-2 px-4 rounded-lg mt-2"
      >
        Add Expense
      </button>
      <h3 className="mt-4">Total Expenses: ${totalExpenses()}</h3>
      <button onClick={onRequestClose} className="mt-4 bg-red-600 text-white py-2 px-4 rounded-lg">Close</button>
    </Modal>
  );
};

export default BudgetCalculatorPopup;
