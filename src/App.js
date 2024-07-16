import { useState } from 'react';
import './App.css';

function CounterButton(props) {
	const changeCounter = () => {
		props.onCounterClick(props.valueIncrement)
	}

	return (
		<button onClick={changeCounter}>{props.text}</button>
	)
}

function App() {
	const [counter, setCounter] = useState(0);
	const stateFunction = (value) => {
		setCounter(parseInt(counter) + value);
	}

  	return (
    	<>
		<CounterButton text="+10" valueIncrement={10} onCounterClick={stateFunction}></CounterButton>
		<CounterButton text="-100" valueIncrement={-100} onCounterClick={stateFunction}></CounterButton>
		<CounterButton text="+25" valueIncrement={25} onCounterClick={stateFunction}></CounterButton>
		<h1>{counter}</h1>
    	</>
  	);
}

export default App;
