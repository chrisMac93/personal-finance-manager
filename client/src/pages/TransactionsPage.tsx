import React, { useEffect, useState } from "react";
import TransactionForm from "../components/TransactionForm";
import TransactionsList from "../components/TransactionsList";

const TransactionsPage = () => {
  const [transactions, setTransactions] = useState<any[]>([]);

  // Function to fetch existing transactions
  useEffect(() => {
    const fetchTransactions = async () => {
      const response = await fetch("http://localhost:3001/transactions");
      const data = await response.json();
      setTransactions(data);
    };

    fetchTransactions();
  }, []);

  const addTransaction = async (transaction: any) => {
    const response = await fetch("http://localhost:3001/transactions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(transaction),
    });
    const savedTransaction = await response.json();
    setTransactions([...transactions, savedTransaction]);
  };

  return (
    <div>
      <h1>Transaction Manager</h1>
      <TransactionForm onSubmit={addTransaction} />
      <TransactionsList transactions={transactions} />
    </div>
  );
};

export default TransactionsPage;
