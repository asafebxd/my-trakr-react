import React, { useState } from 'react';
import Account from './Account';
import Transaction from './Transaction';

export default function Main() {
  const [accounts, setAccounts] = useState([]);
  const [transactions, setTransactions] = useState([]);
  return (
    <main>
      <Account accounts={accounts} setAccounts={setAccounts} />
      <Transaction
        transactions={transactions}
        setTransactions={setTransactions}
        accounts={accounts}
      />
    </main>
  );
}
