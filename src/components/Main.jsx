import React, { useState } from 'react';
import Account from './Account';

export default function Main() {
  const [accounts, setAccounts] = useState([]);
  return (
    <main>
      <Account accounts={accounts} setAccounts={setAccounts} />
    </main>
  );
}
