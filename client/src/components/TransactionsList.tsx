import React from 'react';

const TransactionsList = ({ transactions }: { transactions: any[] }) => {
    return (
        <ul>
            {transactions.map(transaction => (
                <li key={transaction.id}>
                    {transaction.date} - {transaction.description}: ${transaction.amount}
                </li>
            ))}
        </ul>
    );
};

export default TransactionsList;
