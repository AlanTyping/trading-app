import React from 'react'
import '../form2.css'

interface Props {
  title: string
}

const FormSubTitle = ({ title }: Props) => {
  return (
    <h2 className='text-[1.8rem] 2xl:text-[1.9vw] 2xl:mt-[2.7vw] mt-12'>{title}</h2>
  )
}

export default FormSubTitle