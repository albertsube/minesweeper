import Face from './Face'
import Display from './Display'
import Flag from './Flag'
import Clock from './Clock'

export default function Header({gameState, restartGame, remainingMines}) {
    return (
        <div
            className='flex justify-center items-center gap-10 m-5'
        >

            <div className='flex items-center gap-2'>
                <Flag />
                <Display value={remainingMines}/>
            </div>

            <Face gameState={gameState} handleClick={restartGame} />

            <div className='flex items-center gap-2'>
                <Display value={remainingMines}/>
                <Clock />
            </div>

        </div>
    )
}