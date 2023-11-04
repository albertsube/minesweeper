import { useState } from 'react'
import Minefield from './components/Minefield'
import Face from './components/Face'

function App() {

  const [gameState, setGameState] = useState(0)

  const setWin = () => setGameState(1)
  const setLose = () => setGameState(-1)
  const restartGame = () => setGameState(0)

  return (
    <div
      className='flex flex-col justify-center items-center m-5'
    >
      <h1
        className='font-bold text-5xl font m-5'
      >
        Minesweeper
      </h1>
      <Face gameState={gameState} handleClick={restartGame} />
      <Minefield
        numMines={10}
        numRows={10}
        numCols={10}
        setWin={setWin}
        setLose={setLose}
        gameState={gameState}
      />
    </div>
  )
}

export default App
