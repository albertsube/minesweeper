import React from 'react'
import LeftArrow from './Leftarrow'
import RightArrow from './RightArrow'
import Display from './Display'
import ToolsIcon from './Icons/ToolsIcon'

export default function Tools({
  gameConfig,
  changeMines,
  changeRows,
  changeCols,
}) {
  const { numMines, numRows, numCols } = gameConfig

  return (
    <div className="group bg-gray-100 p-3 rounded-xl">
      <div className="block group-hover:hidden">
        <ToolsIcon />
      </div>

      <div className="hidden group-hover:block">
        <div className="flex gap-2 justify-between items-center p-3">
          <p className="w-20 font-bold">Mines</p>
          <LeftArrow handleClick={() => changeMines(-1)} />
          <Display value={numMines} />
          <RightArrow handleClick={() => changeMines(+1)} />
        </div>
        <div className="flex gap-2 justify-between items-center p-3">
          <p className="w-20 font-bold">Rows</p>
          <LeftArrow handleClick={() => changeRows(-1)} />
          <Display value={numRows} />
          <RightArrow handleClick={() => changeRows(+1)} />
        </div>
        <div className="flex gap-2 justify-between items-center p-3">
          <p className="w-20 font-bold">Columns</p>
          <LeftArrow handleClick={() => changeCols(-1)} />
          <Display value={numCols} />
          <RightArrow handleClick={() => changeCols(+1)} />
        </div>
      </div>
    </div>
  )
}
