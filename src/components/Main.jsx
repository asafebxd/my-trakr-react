import React, { useState, useEffect } from 'react';
import Account from './Account';
import Transaction from './Transaction';
import AccountSummary from './AccountSummary';
import Table from './Table';
import Filter from './Filter';

import axios from 'axios';

export default function Main() {
  const [accounts, setAccounts] = useState([]);
  const [transactions, setTransactions] = useState([]);
  useEffect(() => {
    axios.get('/accounts').then((res) => {
      console.log('get accounts data', res.data);
      setAccounts(res.data);
    });
  }, []);
  // run useEffect only when transactions state is changed
  // useEffect(() => {
  //   axios.get('https://my-trakr-api.herokuapp.com/accounts').then((res) => {
  //     console.log('res', res.data);
  //     setAccounts(res.data);
  //   });
  // }, [transactions]);
  useEffect(() => {
    axios.get('/transactions').then((res) => {
      console.log('get transactions data', res.data);
      setTransactions(res.data);
    });
  }, []);
  return (
    <main style={{ width: '70%', margin: '80px auto' }}>
      <section style={{ display: 'flex', gap: '100px' }}>
        <Transaction
          transactions={transactions}
          setTransactions={setTransactions}
          accounts={accounts}
        />
        <article style={{ width: '100%' }}>
          <Account accounts={accounts} setAccounts={setAccounts} />
          <AccountSummary />
        </article>
      </section>
      <section>
        <Filter />
        <Table />
      </section>
    </main>
  );
}
