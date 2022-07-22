import React, { useState } from 'react'

export default function Transaction() {
    const [transactions, setTransactions] = useState([]);
    const [formData, setFormData] = useState({});
    const handleChange = (e) => {
        console.log('name',e.target.name)

        console.log('value',e.target.value)
        const newFormData = {...formData, [e.target.name]:e.target.value}
        setFormData(newFormData)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        
        
    }
  return (
    <section>
           <h2>New Transaction Form</h2>
           <form onSubmit={handleSubmit}>
            <div>
                <input type="radio" name="type" value={'Deposit'} /> Deposit
                <input type="radio" name="type" /> Withdrawal
                <input type="radio" name="type" /> Transfer
            </div>
            <select onChange={handleChange} name="accountId" >
                <option value="1">1</option>
                <option value="2">2</option>

            </select>
            <select name="accountIdFrom" ></select>
            <select name="accountIdTo" ></select>
            <select name="category" ></select>
             <input type="text" name='description' />
             <input type="number" name='amount' />

           </form>
         </section>
  )
}
