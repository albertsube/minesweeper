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
      <Minefield numMines={3} numRows={5} numCols={5}/>
    </div>
  )
}

export default App
