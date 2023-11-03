import React from 'react'

const Mine = ({mine, handleClick}) => {
  return (
    <div
        className='bg-gray-100 rounded p-5 aspect-square
        hover:bg-gray-300 cursor-pointer'
        onClick={handleClick}
    >
        {mine===''?'':'x'}
</div>
  )
}

export default Mine
