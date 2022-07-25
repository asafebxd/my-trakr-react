import React from 'react';

export default function Transaction() {
  return (
    <section>
      <h2>New Transaction Form</h2>
      <form>
        <div>
          <input type='radio' name='type' /> Deposit
          <input type='radio' name='type' /> Withdrawal
          <input type='radio' name='type' /> Transfer
        </div>
        <select name='accountId'>
          <option value='1'>1</option>
          <option value='2'>2</option>
        </select>
        <select name='accountIdFrom'></select>
        <select name='accountIdTo'></select>
        <select name='category'></select>
        <input type='text' name='description' />
        <input type='number' name='amount' />
      </form>
    </section>
  );
}
