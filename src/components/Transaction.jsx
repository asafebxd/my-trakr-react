import axios from 'axios';
import React, { useRef, useState } from 'react';
import Category from './Category';

export default function Transaction(props) {
  const { setTransactions, transactions, accounts } = props;
  const [formData, setFormData] = useState({
    type: '',
    amount: 0,
    description: '',
    accountId: 0,
    accountIdFrom: 0,
    accountIdTo: 0,
  });
  const transactionTypeRef = useRef();

  const handleChange = (event) => {
    const name = event.target.name;
    let value;
    if (
      name === 'accountId' ||
      name === 'accountIdFrom' ||
      name === 'accountIdTo' ||
      name === 'amount'
    ) {
      value = Number(event.target.value);
    } else {
      value = event.target.value;
    }
    const newFormData = { ...formData, [name]: value };
    console.log('newFormData', newFormData);
    setFormData(newFormData);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('formData', formData);
    axios
      .post('/transaction', { newTransaction: formData })
      .then((response) => {
        console.log(response.data);
        const newTransactions = [...transactions, ...response.data];
        setTransactions(newTransactions);
      });
    // const newFormData = { ...formData, id: transactions.length + 1 };
  };

  const handleRadioChange = (event) => {
    transactionTypeRef.current = event.target;
    console.log('current ref', transactionTypeRef.current);
    handleChange(event);
  };

  const accountsOptions = accounts.map((account) => (
    <option key={account.id} value={account.id}>
      {account.name}
    </option>
  ));

  const selectAccountId = (
    <div>
      <label htmlFor='accountId'>Account: </label>
      <select name='accountId' onChange={handleChange} defaultValue=''>
        <option value={''} disabled>
          Select an account
        </option>
        {accountsOptions}
      </select>
    </div>
  );

  const selectsTransfer = (
    <>
      <div>
        <label htmlFor='accountIdFrom'>From:</label>
        <select name='accountIdFrom' defaultValue='' onChange={handleChange}>
          <option value={''} disabled>
            Select an account
          </option>
          {accountsOptions}
        </select>
      </div>
      <div>
        <label htmlFor='accountIdTo'>To:</label>
        <select name='accountIdTo' defaultValue='' onChange={handleChange}>
          <option value={''} disabled>
            Select an account
          </option>
          {accountsOptions}
        </select>
      </div>
    </>
  );

  return (
    <section>
      <h2>New Transaction Form</h2>
      <form onSubmit={handleSubmit}>
        <div onChange={handleRadioChange}>
          <input type='radio' name='type' value={'Deposit'} /> Deposit
          <input type='radio' name='type' value={'Withdrawal'} /> Withdrawal
          <input type='radio' name='type' value={'Transfer'} /> Transfer
        </div>
        {/* {
          //check if selected transaction type === 'Transfer'
          transactionTypeRef.current &&
          transactionTypeRef.current.value === 'Transfer'
            ? selectsTransfer //true case
            : selectAccountId //false case
        } */}
        {
          //check if selected transaction type === 'Transfer'
          formData.type === 'Transfer'
            ? selectsTransfer //true case
            : selectAccountId //false case
        }

        <Category handleChange={handleChange} />
        <div>
          <label htmlFor='description'>Description:</label>
          <input type='text' name='description' onChange={handleChange} />
        </div>
        <div>
          <label htmlFor='amount'>Amount:</label>
          <input type='number' name='amount' onChange={handleChange} required />
        </div>
        <button>Add Transaction</button>
      </form>
    </section>
  );
}
