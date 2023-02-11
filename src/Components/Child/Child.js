import React, { useContext } from 'react';
import { CounterContext } from '../../App';

const Child = () => {
    const {count, setCount} = useContext(CounterContext);

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => setCount(count - 1)}>Decrease</button>
            <button onClick={() => setCount((prvState) => prvState + 1)}>Increase</button>
        </div>
    );
};

export default Child;