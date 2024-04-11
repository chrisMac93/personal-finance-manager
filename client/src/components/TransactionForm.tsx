import React, { useState } from 'react';

const TransactionForm = ({ onSubmit }: { onSubmit: (transaction: any) => void }) => {
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        onSubmit({ amount, date, description, category });
        setAmount('');
        setDate('');
        setDescription('');
        setCategory('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="number" value={amount} onChange={e => setAmount(e.target.value)} placeholder="Amount" required />
            <input type="date" value={date} onChange={e => setDate(e.target.value)} placeholder="Date" required />
            <input type="text" value={description} onChange={e => setDescription(e.target.value)} placeholder="Description" required />
            <input type="text" value={category} onChange={e => setCategory(e.target.value)} placeholder="Category" required />
            <button type="submit">Add Transaction</button>
        </form>
    );
};

export default TransactionForm;
