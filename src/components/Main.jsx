import React, { useState, useEffect } from 'react';
import Account from './Account';
import Transaction from './Transaction';
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
