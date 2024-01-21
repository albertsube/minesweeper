import { useState } from 'react'

export default function useGameConfig(
  numMines = 10,
  numRows = 10,
  numCols = 10,
) {
  const [gameConfig, setGameConfig] = useState({
    numMines,
    numRows,
    numCols,
  })

  const changeMines = (num) => {
    setGameConfig((currentConfig) => {
      const numTiles = currentConfig.numRows * currentConfig.numCols
      const newMines = Math.min(
        Math.max(currentConfig.numMines + num, 0),
        numTiles,
      )
      return { ...currentConfig, numMines: newMines }
    })
  }

  const changeRows = (num) => {
    setGameConfig((currentConfig) => {
      const newRows = Math.max(currentConfig.numRows + num, 0)
      return { ...currentConfig, numRows: newRows }
    })
  }

  const changeCols = (num) => {
    setGameConfig((currentConfig) => {
      const newCols = Math.max(currentConfig.numCols + num, 0)
      return { ...currentConfig, numCols: newCols }
    })
  }

  return {
    gameConfig,
    changeMines,
    changeRows,
    changeCols,
  }
}
