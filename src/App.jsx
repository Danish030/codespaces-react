import React, { useState } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <p className='counter'>
          counter
        </p>
        <p>Count: {count}</p>
        <button className="increment-button" onClick={increment}>
          <FontAwesomeIcon icon={faPlus} />
        </button>
        <button className="decrement-button" onClick={decrement}>
          <FontAwesomeIcon icon={faMinus} />
        </button>
      </header>
    </div>
  );
}

export default App;