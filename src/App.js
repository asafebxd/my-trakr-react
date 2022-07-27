import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import AlertContainer from './components/AlertContainer';
import { GlobalStyles } from './components/styles/GlobalStyles.styles';

function App() {
  const [alert, setAlert] = useState({
    status: '',
    message: '',
  });
  return (
    <GlobalStyles>
      <div className='App'>
        <h1>Heading 1</h1>
        <Header />
        {alert.message && <AlertContainer alert={alert} />}
        <Main setAlert={setAlert} />
      </div>
    </GlobalStyles>
  );
}

export default App;
