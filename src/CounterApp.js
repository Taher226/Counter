import React, { useState } from 'react';
import './CounterApp.css'; // Import the CSS file for CounterApp

function CounterApp() {
  const [count, setCount] = useState(0);
  const [showCount, setShowCount] = useState(false);

  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleToggleCount = () => {
    setShowCount(!showCount);
  };

  return (
    <div className="counter-app">
      <h1>My App</h1>
      <button className="increment-button" onClick={handleIncrement}>
        +
      </button>
      <button className="increment-button" onClick={handleDecrement}>
        -
      </button>
      <button className="toggle-button" onClick={handleToggleCount}>
        {showCount ? 'Hide' : 'Show'}
      </button>
      {showCount && <p className="count-text">Count: {count}</p>}
    </div>
  );
}

export default CounterApp;