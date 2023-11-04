import Minefield from './components/Minefield'

function App() {

  return (
    <div
      className='flex flex-col justify-center items-center m-5'
    >
      <h1
        className='font-bold text-5xl font m-5'
      >
        Minesweeper
      </h1>
      <Minefield numMines={10} numRows={10} numCols={10}/>
    </div>
  )
}

export default App
