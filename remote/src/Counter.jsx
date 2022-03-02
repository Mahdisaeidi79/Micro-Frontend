import React, { useState } from 'react'

export default function Counter() {
    const [counter, setCounter] = useState(0);
    return (
        <div className='bg-green-500'>
            <section>{counter}</section>
            <button onClick={() => setCounter(counter + 1)}>Click Me</button>
        </div>
    )
}