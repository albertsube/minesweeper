import { useState } from 'react'
import Minefield from './components/Minefield'
import Face from './components/Face'
import Display from './components/Display'
import Tools from './components/Tools'

function App() {

  const [gameState, setGameState] = useState(0)
  const [gameConfig, setGameConfig] = useState({
    numMines: 10,
    numRows: 10,
    numCols: 10,
  })

  const setWin = () => setGameState(1)
  const setLose = () => setGameState(-1)
  const restartGame = () => setGameState(0)

  const changeMines = num => {
    setGameConfig(currentConfig => {
      const numTiles = currentConfig.numRows * currentConfig.numCols
      const newMines = Math.min(Math.max(currentConfig.numMines + num, 0), numTiles)
      return{ ...currentConfig, numMines: newMines }
    })
  }

  const changeRows = num => {
    setGameConfig(currentConfig => {
      const newRows = Math.max(currentConfig.numRows + num, 0)
      return{ ...currentConfig, numRows: newRows }
    })
  }

  const changeCols = num => {
    setGameConfig(currentConfig => {
      const newCols = Math.max(currentConfig.numCols + num, 0)
      return{ ...currentConfig, numCols: newCols }
    })
  }

  return (
    <div
      className='flex flex-col justify-center items-center m-5'
    >

      <h1
        className='font-bold text-5xl font m-5'
      >
        Minesweeper
      </h1>

      <div
        className='flex justify-between items-center'
      >
        <Display />
        <Face gameState={gameState} handleClick={restartGame} />
        <Display />
      </div>

      <Minefield
        // numMines={gameConfig.numMines}
        // numRows={gameConfig.numRows}
        // numCols={gameConfig.numCols}
        {...gameConfig}
        setWin={setWin}
        setLose={setLose}
        gameState={gameState}
      />

      <div
        className='fixed top-4 left-4'
      >
        <Tools
          {...gameConfig}
          changeMines={changeMines}
          changeRows={changeRows}
          changeCols={changeCols}
        />
      </div>

    </div>
  )
}

export default App
