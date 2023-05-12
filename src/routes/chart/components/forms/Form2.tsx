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
    <form onSubmit={handleSubmit} className='w-full h-full bg-[#001440] flex items-center justify-center text-white relative flex-col border-r-[2px] border-l-[2px] border-[#0047e1]'>
      <div className='h-[100%] w-full flex items-center justify-center justify-evenly flex-row flex-col justify-evenly'>
        <input id='capital-form' type='number' name='numberInput' onChange={handleInputChange}
          className='bg-gray-900 border-[1px] border-[#0047e1] rounded text-center h-[30%] w-[30%] text-[105%]'
          placeholder='${ Initial Capital }' />
        <button
          id='chart-capital-push'
          className='min-w-[100px] w-[20%] h-[35%] min-h-[35px] 
          border-[1px] border-[#0047e1] rounded bg-[#002e93] hover:bg-[#0047e1]'>Submit</button>
      </div>
      <div className='h-[25%] min-h-[30px] w-[15%] bg-[#002e93] hover:bg-[#0047e1] rounded 
      flex justify-center border-[1px] border-[#0047e1] items-center absolute top-0 right-2'
        id='data-push'>
        <h4>Attach data</h4>
        <DataPush />
      </div>
    </form>
  )
}
