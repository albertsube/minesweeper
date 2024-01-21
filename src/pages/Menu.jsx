import React from 'react'
import { Link } from 'react-router-dom'
import PlayIcon from '../components/Icons/PlayIcon'
import ToolsIcon from '../components/Icons/ToolsIcon'
import Title from '../components/Title'

export default function Menu() {
  const linkClass =
    'w-24 h-24 rounded-lg bg-slate-300 p-4 hover:p-2 transition-all'

  return (
    <div className="absolute inset-0">
      <Title />
      <div className="flex justify-center items-center gap-10">
        <Link to="/play">
          <PlayIcon className={linkClass} />
        </Link>
        <Link to="/settings">
          <ToolsIcon className={linkClass} />
        </Link>
      </div>
    </div>
  )
}
