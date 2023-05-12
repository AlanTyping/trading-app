import { useState } from 'react';
import { chartStore } from '../../../../zustand/chartStore';
import DataPush from '../chart-data-management/data-push';

export default function Form2() {
  const chart = chartStore(i => i.files);
  const addFile = chartStore(i => i.addFile);
  const [capital, setCapital] = useState<number>(0)

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCapital(Number(event.target.value));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const item = {
      capital: capital,
      percentage: 0,
      dolar: 0,
      number: 0,
      date: ""
    }

    addFile(item);
    localStorage.setItem('chartData', JSON.stringify([item]));
  }

  return (
    <form onSubmit={handleSubmit} className='w-full h-full bg-[#001e0b] flex items-center justify-center text-white relative flex-col border-r-[2px] border-l-[2px] border-green-800'>
      <div className='h-[100%] w-full flex items-center justify-center justify-evenly flex-row flex-col justify-evenly'>
        <input type='number' name='numberInput' onChange={handleInputChange}
          className='bg-gray-900 border-[1px] border-green-600 rounded text-center h-[30%] w-[30%] text-[120%] text-[lightgreen]'
          placeholder='${ Initial Capital }' />
        <button
          id='chart-capital-push'
          className='min-w-[100px] w-[20%] h-[25%] rounded min-h-[40px] bg-green-800 hover:bg-green-700'>submit</button>
      </div>
      <div className='h-[25%] min-h-[30px] w-[18%]  bg-[#004f57] hover:bg-[#007480] 
      bg-[#004d55] rounded flex justify-center items-center absolute top-0 right-2'
        id='data-push'>
        <h4>Or attach data</h4>
        <DataPush />
      </div>
    </form>
  )
}
