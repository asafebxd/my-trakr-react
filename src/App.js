import './App.css';
import Header from './components/Header';
import Main from './components/Main';

function App() {
  return (
    <div className='App'>
      <Header />
      <Main />
    </div>
  );
}

// function App() {
//   return (
//     <div className='App'>
//       <header>
//         <h1>My Trakr React</h1>
//       </header>
//       <main>
//         <section>
//           <h2>New Account Form</h2>
//           <form action=''></form>
//         </section>
//         <section>
//           <h2>New Transaction Form</h2>
//           <form action=''>
//             <form action=''>
//               <h3>New Category</h3>
//             </form>
//           </form>
//         </section>
//         <section>
//           <h2>Account Summary</h2>
//           <ul></ul>
//         </section>
//         <section>
//           <h2>Transactions History</h2>
//           <div>
//             <h3>Filters</h3>
//           </div>
//           <table></table>
//         </section>
//       </main>
//     </div>
//   );
// }

export default App;
