import { useEffect, useState } from 'react'
import Tile from './Tile'
import { DIRECTIONS } from '../constants/directions'

const Minefield = ({numMines, numRows, numCols=numRows}) => {

    const [ mineField, setMinefield ] = useState([])

    const createField = (n, x, y=x) => {
        let field = []

        for(let i=0; i<x; i++){
            field[i]=[]
            for(let j=0; j<y; j++){
                field[i][j]={
                    hasMine: false,
                    isCovered: true,
                    isMarked: false,
                    value: 0,
                }
            }
        }

        for(let i=0; i<n; i++){
            const mineX = Math.floor(Math.random()*x)
            const mineY = Math.floor(Math.random()*y)
            if(!field[mineX][mineY].hasMine) field[mineX][mineY].hasMine = true
            else i--
        }

        for(let i=0; i<x; i++){
            for(let j=0; j<y; j++){
                if(!field[i][j].hasMine){
                    let value = 0
                    DIRECTIONS.forEach( d => {
                        const newX = d.x + i
                        const newY = d.y + j
                        if(newX>=0 && newY>=0 && newX<numRows && newY<numCols && field[newX][newY].hasMine) value++
                    })
                    field[i][j].value = value
                }
            }
        }

        return field
    }

    useEffect(()=>{
        setMinefield(createField(numMines, numRows, numCols))
    },[])

    const uncoverTile = (field, i, j) => {
        field[i][j].isCovered = false
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
        let newField = [...mineField]
        if(e.type == 'click' && !newField[i][j].isMarked) uncoverTile(newField,i,j)
        else if(e.type == 'contextmenu') newField[i][j].isMarked = !newField[i][j].isMarked
        setMinefield(newField)
    }

    return (
        <div
            className={`grid grid-cols-10 gap-3 text-xl`}
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

