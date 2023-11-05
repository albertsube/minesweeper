import React from 'react'

export default function Display({value=0, setValue}) {
    return (
        <input
            className='rounded text-center text-2xl font-bold w-12 border-solid border-2 border-gray-300'
            readOnly
            value={value}
        />
    )
}
