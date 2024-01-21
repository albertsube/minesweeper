import React from 'react'

export default function Title() {
  const title = 'Minesweeper'

  return (
    <div className="font-bold text-5xl text-center">
      {title.split('').map((char, i) => (
        <span>{char}</span>
      ))}
    </div>
  )
}
