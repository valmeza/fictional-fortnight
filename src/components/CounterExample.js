import React, { useState } from 'react';

// functional component
function CounterExample() {
    const [count, setCount] = useState(0) // useState is a react function


    return (
        <div>
            <h1>
                You clicked {count} times!
            </h1>
            <h1 onClick={() => setCount(count + 1)}>
                Plus
            </h1>

            <h1 onClick={() => setCount(count - 1)}>
                Minus
            </h1>
        </div>
    )
}

export default CounterExample