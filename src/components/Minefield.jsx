import Tile from './Tile'
import { DIRECTIONS } from '../constants/directions'
import useMineField from '../hooks/useMineField'

const Minefield = ({gameConfig, setWin, setLose, gameState, remainingMines, setRemainingMines}) => {

    const {mineField, setMinefield} = useMineField({
        gameState,
        gameConfig,
        setWin,
    })
    const {numRows, numCols} = gameConfig

    const uncoverTile = (field, i, j) => {
        field[i][j].isCovered = false
        if(field[i][j].hasMine){
            setLose()
            return
        }
        if(field[i][j].value === 0){
            DIRECTIONS.forEach( d => {
                const newX = d.x + i
                const newY = d.y + j
                if(newX>=0 && newY>=0 && newX<numRows && newY<numCols && field[newX][newY].isCovered) uncoverTile(field, newX, newY)
            })
        }
    }

    const handleClick = (e,i,j) => {
        e.preventDefault()
        if(gameState!==0) return
        let newField = [...mineField]
        if(e.type == 'click' && !newField[i][j].isMarked) uncoverTile(newField,i,j)
        else if(e.type == 'contextmenu'){
            if(newField[i][j].isMarked){
                newField[i][j].isMarked = false
                setRemainingMines(m=>m+1)
            }else if(remainingMines > 0){
                newField[i][j].isMarked = true
                setRemainingMines(m=>m-1)
            }
        }
        setMinefield(newField)
    }

    return (
        <div
            className={`grid gap-3 text-xl`}
            style={{ gridTemplateColumns: `repeat(${numCols},1fr)` }}
        >
            {mineField.map( (row,i) => {
                return row.map( (tile,j) => {
                    return <Tile
                        key={`row${i}tile${j}`}
                        tile={tile}
                        handleClick={(e)=>handleClick(e,i,j)}
                    />
                })
            })}
        </div>
    )
}

export default Minefield

