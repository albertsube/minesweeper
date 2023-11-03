import { useState } from 'react'
import Mine from './Mine'

const Minefield = () => {

    const createField = (numMines, x, y=x) => {
        const fieldSize = x*y
        let field = [...Array(fieldSize)].map(x=>'')

        for(let i=0; i<numMines; i++){
            const minePos = Math.floor(Math.random()*fieldSize)
            if(field[minePos] === '') field[minePos]='x' 
            else i--
        }

        console.log(field);
        return field
    }

    const initialField = createField(3,5)

    const [ mineField, setMinefield ] = useState(initialField.map(x=>''))

    const handleClick = iMine => {
        setMinefield(currentField => currentField.map( (currentMine, currentI) =>
            currentI===iMine ? initialField[iMine] : currentMine
        ))
    }

    return (
        <div
            className='grid grid-cols-5 gap-3 text-xl'
        >
            {mineField.map( (mine,i) => (
                <Mine
                    key={i}
                    mine={mine}
                    handleClick={()=>handleClick(i)}
                />
            ))}
        </div>
    )
}

export default Minefield

