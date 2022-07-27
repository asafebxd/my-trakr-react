import React, { useState } from 'react';
import axios from 'axios';
import { StyledForm, StyledFormField } from './styles/Form.styles';

export default function Account(props) {
  // const accounts = props.accounts;
  // const setAccounts = props.setAccounts;

  const { accounts, setAccounts } = props;
  const [accountName, setAccountName] = useState('');
  // const [account, setAccount] = useState({
  //   id:accounts.length+1,
  //   transactions:[]
  // })

  // run callback function every render of the component
  // useEffect(() => {
  //   //get request
  //   axios.get('/accounts').then((response) => {
  //     console.log('get acc response', response);
  //     // setAccounts([...response.data]);
  //   });
  // });

  // run once when the component first render
  // useEffect(() => {
  //   //get request
  //   axios.get('/accounts').then((response) => {
  //     console.log('get acc response', response);
  //     setAccounts([...response.data]);
  //   });
  // }, []);

  // run only when the element of dependency array updates / changes
  // useEffect(() => {
  //   //get request
  //   axios.get('/accounts').then((response) => {
  //     console.log('useEffect setAccounts', response);
  //     setAccounts([...response.data]);
  //   });
  // }, [accounts] // dependency array
  //);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('submitted', accountName);
    const newAccount = {
      id: accounts.length + 1,
      name: accountName,
      transactions: [],
    };
    axios
      .post('/accounts', { newAccount })
      .then((res) => {
        console.log('res', res);
        setAccounts([...accounts, { ...res.data }]);
      })
      .catch((err) => console.log('err', err));
    // accounts.push(newAccount); BAD IDEA
    // const updatedAccounts = [...accounts, newAccount];
    // setAccounts(updatedAccounts);
  };
  const handleInputChange = (e) => {
    setAccountName(e.target.value);
  };
  return (
    <section>
      <h2>New Account</h2>
      <StyledForm onSubmit={handleSubmit}>
        <StyledFormField>
          <label htmlFor='accountNameInput'>Account name:</label>
          <input value={accountName} onChange={handleInputChange} />
        </StyledFormField>
        <button>Add new account</button>
      </StyledForm>
    </section>
  );
}
