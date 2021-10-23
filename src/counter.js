import React, { useState } from "react";


function Counter() {
    const [counter, setCounter] = useState(0)

    function decreaseByOne() {
        setCounter(prevCounter => prevCounter - 1)
    }
    function increaseByOne() {
        setCounter(prevCounter => prevCounter + 1)
    }

    return (
        <div>
            <span>{counter}</span>
            <button onClick={increaseByOne}>increase by one</button>
            <button onClick={decreaseByOne}>decrease by one</button>
        </div>
    )
}

export default Counter