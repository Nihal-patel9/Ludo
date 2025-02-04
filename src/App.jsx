import { useState } from 'react'
import './App.css'

function App() {

  let [moves, setMoves] = useState({ blue: 0, yellow: 0, green: 0, red: 0 })

  let handleBlue = () => {
    setMoves((prevMoves) => {
      return { ...prevMoves, blue: prevMoves.blue + 1 }
    })
  }

  let handleYellow = () => {
    setMoves((prevMoves) => {
      return { ...prevMoves, yellow: prevMoves.yellow + 1 }
    })
  }

  let handleGreen = () => {
    setMoves((prevMoves) => {
      return { ...prevMoves, green: prevMoves.green + 1 }
    })
  }

  let handleRed = () => {
    setMoves((prevMoves) => {
      return { ...prevMoves, red: prevMoves.red + 1 }
    })
  }


  return (
    <>
      <div>
        <p>Game Begins!</p>
        <div>
          <p>Blue Move = {moves.blue} </p>
          <button style={{ backgroundColor: "blue" }} onClick={handleBlue}>+1</button>

          <p>Yellow Move = {moves.yellow} </p>
          <button style={{ backgroundColor: "yellow", color: "black" }} onClick={handleYellow}>+1</button>

          <p>Green Move = {moves.green} </p>
          <button style={{ backgroundColor: "green" }} onClick={handleGreen}>+1</button>

          <p>Red Move = {moves.red} </p>
          <button style={{ backgroundColor: "red" }} onClick={handleRed}>+1</button>

        </div>
      </div>
    </>
  )
}

export default App
