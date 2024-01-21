import React from 'react'
import Mine from './Mine'
import Flag from './Flag'
import { TILE_COLORS } from '../constants/colors'

const Tile = ({ tile, handleClick }) => {
  return (
    <div
      className={`flex justify-center items-center
        bg-gray-100 rounded p-5 h-16 aspect-square cursor-pointer
        font-bold text-2xl ${TILE_COLORS[tile.value]}
        ${tile.isCovered && 'hover:bg-gray-500'}
        ${tile.isCovered && 'bg-gray-300'}`}
      onClick={handleClick}
      onContextMenu={handleClick}
    >
      {tile.isCovered && tile.isMarked && <Flag />}
      {!tile.isCovered && tile.hasMine && <Mine />}
      {!tile.isCovered && !tile.hasMine && tile.value > 0 && tile.value}
    </div>
  )
}

export default Tile
