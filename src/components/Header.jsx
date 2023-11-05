import Face from './Face'
import Display from './Display'
import Flag from './Flag'
import Clock from './Clock'
import { GAME_STATE } from '../constants/gameState'
import { useEffect, useState } from 'react'

export default function Header({gameState, setGameState, remainingMines}) {

    const [playTime, setPlayTime] = useState(0)

    useEffect(()=>{
        const playTimer = setInterval(()=>{
            if(gameState === GAME_STATE.PLAY){
                setPlayTime(t=>t+1)
            }
        }, 1000)

        return () => {
            clearInterval(playTimer)
            if(gameState !== GAME_STATE.PLAY){
                setPlayTime(0)
            }
        }
    },[gameState])

    return (
        <div
            className='flex justify-center items-center gap-10 m-5'
        >

            <div className='flex items-center gap-2'>
                <Flag />
                <Display value={remainingMines}/>
            </div>

            <Face gameState={gameState} handleClick={() => setGameState(GAME_STATE.PAUSED)} />

            <div className='flex items-center gap-2'>
                <Display value={playTime}/>
                <Clock />
            </div>

        </div>
    )
}