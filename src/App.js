import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import AlertContainer from './components/AlertContainer';
import { GlobalStyles } from './components/styles/GlobalStyles.styles';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Home from './components/router-examples/Home';
import About from './components/router-examples/About';
import Contact from './components/router-examples/Contact';
import Profile from './components/router-examples/Profile';
import UserProfile from './components/router-examples/UserProfile';

function App() {
  const [alert, setAlert] = useState({
    status: '',
    message: '',
  });
  return (
    // <>
    //   <GlobalStyles />
    //   <Header />
    //   {alert.message && <AlertContainer alert={alert} />}
    //   <Main setAlert={setAlert} />
    // </>
    <BrowserRouter>
      <nav>
        <h2>App name</h2>
        <Link to='/'>Home</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/about'>About</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/profile/:id' element={<UserProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

/*
4 routes
/posts - show all the posts
/posts/id - show only one post based on the id
/users - show all the users
/users/id - show only one user based on the id

as bonus:
you can combine data, like showing posts in the user page
comments on posts page

npm install axios react-router-dom
*/
