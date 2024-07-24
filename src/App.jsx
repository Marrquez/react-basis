import { useEffect, useState } from 'react'
import './App.css'
import TicTacToe from './components/basics/TicTacToe'
import Person from './components/basics/Person'
import Product from './components/dashboard/Product'

function Button(props) {
  const styles = {
    color: props.color,
    fontSize: props.fontSize + 'px'
  };
  return <button onClick={props.handleClick} style={styles}>{props.text}</button>;
}

function App() {
  const [count, setCount] = useState(0);
  const [counter, setCounter] = useState(0);
  const [form, setForm] = useState(null);

  const onHandleClick = () => setCount((count) => count + 1);

  useEffect(() => {
    // const key = setInterval(() => {
    //   setCounter(count => count + 1)
    // }, 1000);
 
    // return () => {
    //   clearInterval(key);
    // };
  }, [])

  return (
    <>
      <Person></Person>
      <h1>Vite + React: {counter}</h1>
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
      <div>
        The form: {form}
        <Product></Product>
      </div>
    </>
  )
}

export default App
