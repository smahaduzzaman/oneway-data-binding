import React, { useContext } from 'react';
import { CounterContext } from '../../App';
import Child from '../Child/Child';

const Parent = () => {
    const {count, setCount} = useContext(CounterContext);

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => setCount(count - 1)}>Decrease</button>
            <button onClick={() => setCount((prvState) => prvState + 1)}>Increase</button>

            <Child></Child>

        </div>
    );
};

export default Parent;