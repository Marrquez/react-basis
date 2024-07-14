import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Animals from './components/basics/Animals'
import Colors from './components/basics/Colors'
import TicTacToe from './components/basics/TicTacToe'
import Person from './components/basics/Person'
import Dashboard from './components/dashboard/Dashboard'

function Button(props) {
  const styles = {
    color: props.color,
    fontSize: props.fontSize + 'px'
  };
  return <button onClick={props.handleClick} style={styles}>{props.text}</button>;
}

function App() {
  const [count, setCount] = useState(0);

  const onHandleClick = () => setCount((count) => count + 1);

  return (
    <>
      <Dashboard></Dashboard>
      <Person></Person>
      <Animals />
      <div>
        <Colors />
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <Button handleClick={onHandleClick} text={'Count is ' + count} color='purple' fontSize={18} />
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div>
        <TicTacToe></TicTacToe>
      </div>
    </>
  )
}

export default App
