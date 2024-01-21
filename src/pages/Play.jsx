import { useEffect, useState } from 'react'
import Minefield from '../components/Minefield'
import Tools from '../components/Tools'
import useGameConfig from '../hooks/useGameConfig'
import Header from '../components/Header'
import { GAME_STATE } from '../constants/gameState'

export default function Play() {
  const [gameState, setGameState] = useState(GAME_STATE.PAUSED)
  const { gameConfig, changeMines, changeRows, changeCols } = useGameConfig(
    10,
    10,
    10,
  )
  const [remainingMines, setRemainingMines] = useState(gameConfig.numMines)

  useEffect(() => {
    setRemainingMines(gameConfig.numMines)
  }, [gameConfig.numMines])

  return (
    <div className="flex flex-col justify-center items-center m-5">
      <h1 className="font-bold text-5xl font">Minesweeper</h1>

      <Header
        gameState={gameState}
        setGameState={setGameState}
        remainingMines={remainingMines}
      />

      <Minefield
        gameConfig={gameConfig}
        gameState={gameState}
        setGameState={setGameState}
        remainingMines={remainingMines}
        setRemainingMines={setRemainingMines}
      />

      {gameState === GAME_STATE.PAUSED && (
        <div className="fixed top-4 left-4 hidden">
          <Tools
            gameConfig={gameConfig}
            changeMines={changeMines}
            changeRows={changeRows}
            changeCols={changeCols}
          />
        </div>
      )}
    </div>
  )
}
