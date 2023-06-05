import { useState } from 'react';
import { chartStore } from '../../../../../zustand/chartStore';
import DataPush from '../../chart-data-management/data-push';
import DateDisplay from '../components/DateDisplay';
import './form2.css';

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
    <form onSubmit={handleSubmit} id='initial-form' className='w-full h-full flex items-center justify-center text-white relative flex-col border-r-[1px] border-l-[1px] border-[#0047e1]'>
      <div className='si absolute flex top-[-16%] justify-evenly left-[2%] h-[30%] w-[20%] items-center flex-row justify-center'>
        <p>Capital date:</p>
        <DateDisplay
          Class={
            'h-[80%] w-[28%] second-form-date hover:bg-blue-600 text-white text-[1.04rem] border-b-[1px] border-blue-600 hover:cursor-pointer text-center hover:rounded'
          } />
      </div>

      <div className='h-[100%] w-full flex items-center justify-center justify-evenly flex-row flex-col justify-evenly'>
        <input id='capital-form' type='number' name='numberInput' step="any" onChange={handleInputChange}
          className='border-[1px] bg-[#061333] rounded border-[#0050ff] text-[#bfd3ff] text-center h-[30%] w-[30%] text-[1.1rem]'
          placeholder='${ Initial Capital }' />
        <button
          id='chart-capital-push'
          className='min-w-[100px] w-[20%] h-[35%] min-h-[35px] 
          border-[1px] border-[#0047e1] rounded bg-[#002e93] hover:bg-[#0047e1]'>Submit</button>
      </div>
      <div className='h-[25%] min-h-[30px] w-[15%] hover:rounded hover:bg-[#0047e1]
      flex justify-center border-b-[1px] border-[#0047e1] items-center absolute top-[-25%] right-4'
        id='data-push'>
        <h4>Or Attach data</h4>
        <DataPush />
      </div>
    </form>
  )
}
