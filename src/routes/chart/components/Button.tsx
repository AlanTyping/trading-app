import React from 'react'

interface Prop {
    function: () => {}
}

export default function Button(handleFunction: any, title: string): JSX.Element {
  return (
    <button onClick={handleFunction} className='h-[40px] w-[80px] bg-blue-900 text-white text-center'>
        {title}
    </button>
  )
}
