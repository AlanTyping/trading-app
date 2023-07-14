import React from 'react'

export default function Footer() {
  return (
    <div className='bg-[#061539] border-t-[1px] border-[orange] h-[12vh] w-full text-[white] flex justify-center items-center mt-[2.5%]'>
        <div className='w-[85%] h-[70%] relative'>
            <span>Created with ❤️ by <a className='text-[orange] border-b-[1px] border-blue-600' href='https://www.instagram.com/alan_anr/' target='_blank'>Alan</a></span><br/>
            <a id='cafecito' className='absolute top-0 right-0 border-b-[1px] border-blue-600' href='https://cafecito.app/alantyping' target='_blank'>Buy me a coffe :D</a>
        </div>
    </div>
  )
}
