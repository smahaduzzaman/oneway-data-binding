import { createContext, useState } from 'react';
import './App.css';
import Parent from './Components/Parent/Parent';

export const CounterContext = createContext();

function App() {
  const [count, setCount] = useState(0);

  const value = {
    count,
    setCount
  }

  return (
    <div className="App">
      <CounterContext.Provider value={value}>
      <Parent></Parent>
      </CounterContext.Provider>
    </div>
  );
}

export default App;
