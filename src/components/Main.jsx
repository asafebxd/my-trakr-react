import React from 'react'
import Account from './Account'
import AccountSummary from './AccountSummary'
import Transaction from './Transaction.jsx'
import TransactionsList from './TransactionsList'

export default function Main() {
  return (
    <main>
      <Account />
      <Transaction/>
      {/* <AccountSummary /> */}
      {/* <TransactionsList /> */}
    </main>
  )
}
