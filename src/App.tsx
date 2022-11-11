import React from 'react';
//import logo from './logo.svg';
import './App.css';
import UserCard from './UserCard';
import BookCard from './BookCard';

function App() {
  return (
    <>
    <UserCard name='Petr Rychlý' age={18} books={4} level={3} img='https://placem.at/people?w=200'/>
    <BookCard title='Moje kniha 1' icon='📗'/>
    </>
    /*<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>*/
  );
}

export default App;
