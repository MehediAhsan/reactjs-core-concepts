import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

const players = [
  {name: 'Sakib Al Hasan', role: 'All-rounder'},
  {name: 'Tamim', role: 'Batsman'},
  {name: 'Mustafiz', role: 'Bowler'}
]
const persons = [
  {name: 'Rahim', job: 'Web developer'},
  {name: 'Karim', job: 'Web developer'},
  {name: 'Miraz', job: 'Web developer'}
]

function App() {
  return (
    <div className="App">
      {
        players.map(player => <Player name={player.name} role={player.role}></Player>)
      }
      <h1>New Component</h1>
      {
        persons.map(person => <Person name={person.name} job={person.job}></Person>)
      }
      <h1>Counter</h1>
      <Counter></Counter>
      <h1>External Data Load</h1>
      <Users></Users>
      {/* <Person name="Rahim" job="Web developer"></Person>
      <Person name="Karim" job="Web developer"></Person>
      <Person name="Miraz" job="Web developer"></Person> */}
    </div>
  );
}

function Player(props) {
  return (
    <div className='player'>
      <h1>{props.name}</h1>
      <p>Role: {props.role}</p>
    </div>
  )
}

function Person(props) {
  return (
    <div className='container'>
      <h1>{props.name}</h1>
      <p>{props.job}</p>
    </div>
  )
}

function Counter() {
  const [count, setCount] = useState(0);

  const increaseCount = () => setCount(count+1);
  const decreaseCount = () => setCount(count-1);

  return (
    <div style={{padding:'20px', border:'1px solid gray', margin:'5px', backgroundColor:'skyblue'}}>
      <h1>Count : {count}</h1>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
    </div>
  )
}

function Users() {
  const [users, setUser] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUser(data))
  }, [])

  return (
    <div>
      <h1>{users.length} Users Here</h1>
      {
        users.map(user => <User name={user.name} email={user.email}></User>)
      }
    </div>
  )
}

function User(props) {
  return (
    <div className='user'>
      <h4>Name: {props.name}</h4>
      <p>Email: {props.email}</p>
    </div>
  )
}

export default App;
