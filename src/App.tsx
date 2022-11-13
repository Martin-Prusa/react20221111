import React from 'react';
//import logo from './logo.svg';
import './App.css';
import UserCard from './UserCard';
import BookCard from './BookCard';
import UserCardProps from './UserCardProps';
import BookCardProps from './BookCardProps';

const users: UserCardProps[] = [
  {
    name: 'Petr Rychlý',
    age: 18,
    books: 4,
    level: 3,
    img: 'https://placem.at/people?w=200'
  },
  {
    name: 'Josef Pomalý',
    age: 17,
    books: 3,
    level: 2,
    img: 'https://placem.at/people?w=200'
  },
]
const books: BookCardProps[] = [
  {
    title: 'Moje kniha 1',
    icon: '📘'
  },
  {
    title: 'Moje kniha 2',
    icon: '📗'
  },
  {
    title: 'Moje kniha 3',
    icon: '📙'
  },
]

function App() {
  return (
    <>
    {users.map(user => (<UserCard name={user.name} age={user.age} books={user.books} level={user.level} img={user.img}/>))}
    {books.map(book => (<BookCard {...book}/>))}
    </>
  );
}

export default App;
