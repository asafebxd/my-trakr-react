import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import { GlobalStyles } from './components/styles/GlobalStyles.styles';

function App() {
  return (
    <GlobalStyles>
      <div className='App'>
        <Header />
        <Main />
      </div>
    </GlobalStyles>
  );
}

export default App;
