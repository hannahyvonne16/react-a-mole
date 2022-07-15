import React from 'react'
import { useState } from 'react'
import MoleContainer from './MoleContainer.js'
import './App.css'

function App(){
    let [score, setScore] = useState(0)

    const createMoleHill = () => {
        let hills = []
        for (let i = 0; i < 9; i++) {
            hills.push(
                <MoleContainer
                key={i}
                setScore={setScore}
                score={score} />
            )
        }
    
        return (
            <div>
                {hills}
            </div>
        )
    }

    return (
        <div className="App">
            <h1>Smash the Moles!</h1>
            {score}
            {createMoleHill()}
        </div>
    )
}

export default App
