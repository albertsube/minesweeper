import { useState } from 'react'
import Minefield from './components/Minefield'
import Face from './components/Face'
import Display from './components/Display'
import Tools from './components/Tools'
import useGameConfig from './hooks/useGameConfig'

function App() {

  const [gameState, setGameState] = useState(0)
  const {gameConfig, changeMines, changeRows, changeCols} = useGameConfig(10, 10, 10)

  const setWin = () => setGameState(1)
  const setLose = () => setGameState(-1)
  const restartGame = () => setGameState(0)

  return (
    <div
      className='flex flex-col justify-center items-center m-5'
    >

      <h1
        className='font-bold text-5xl font'
      >
        Minesweeper
      </h1>

      <div
        className='flex justify-center items-center gap-10 m-5'
      >
        <Display />
        <Face gameState={gameState} handleClick={restartGame} />
        <Display />
      </div>

      <Minefield
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
