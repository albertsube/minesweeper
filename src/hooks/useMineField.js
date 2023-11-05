import { useState, useEffect } from "react"
import { DIRECTIONS } from '../constants/directions'

export default function useMineField({
    gameState,
    gameConfig,
    setWin,
}) {

    const [ mineField, setMinefield ] = useState([])
    
    const {numMines, numRows, numCols} = gameConfig

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
        if(gameState===0){
            setMinefield(createField(numMines, numRows, numCols))
        }
    },[gameState, numMines, numRows, numCols])

    useEffect( () => {
        let isWin = true
        if(mineField.length===0) return
        for(let i=0; i<numRows; i++){
            for(let j=0; j<numCols; j++){
                if(mineField[i][j].isCovered && !mineField[i][j].hasMine){
                    isWin = false
                    break
                }
            }
        }
        if(isWin) setWin()
    },[mineField])

    return {mineField, setMinefield}
}
