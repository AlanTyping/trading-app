import React from 'react'

export default function Footer() {
  return (
    <div className='bg-[#061539] border-t-[1px] border-[orange] h-[12vh] w-full text-[white] flex justify-center items-center mt-[2.5%]'>
        <div className='w-[90%] h-[90%] relative'>
            <span>©2023 BlueTrading</span><br/>
            <span>Created with ❤️ by <a className='text-[orange] border-b-[1px] border-blue-600' href='https://www.instagram.com/alan_anr/' target='_blank'>Alan</a></span><br/>
            <a className='absolute right-0 top-0 border-b-[1px] border-blue-600' href='https://cafecito.app/alantyping' target='_blank'>Buy me a coffe :D</a>
        </div>
    </div>
  )
}
