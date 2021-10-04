import React from 'react'
import Counter from './Counter.jsx'

function App() {
    return (
        <>
        <Counter start={17} interval={1000}/>
        <Counter start={0} interval={100}/>
        <Counter start={100} interval={2000}/>
        </>
    )
}

export default App
