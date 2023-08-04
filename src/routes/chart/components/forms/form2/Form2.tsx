import { useState, useEffect } from 'react';
import { chartStore } from '../../../../../zustand/chartStore';
import DataPush from '../../chart-data-management/data-push';
import DateDisplay from '../components/DateDisplay';
import { dateStore } from '../../../../../zustand/dateStore';
import './form2.css';

export default function Form2() {
  const chart = chartStore(i => i.files);
  const addFile = chartStore(i => i.addFile);
  const [capital, setCapital] = useState<number>(0);
  const { date } = dateStore();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCapital(Number(event.target.value));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const item = {
      capital: capital,
      percentage: 0,
      dolar: 0,
      number: 0,
      date: date
    }

    addFile(item);
    localStorage.setItem('chartData', JSON.stringify([item]));
  }

  return (
    <form onSubmit={handleSubmit} id='initial-form' className='w-full h-full barlow rounded flex items-center justify-center text-white relative'>
      <div id='first-form-container' className='absolute bottom-0 z-[3] w-[40%] h-[450%] min-w-[300px] bg-[#00113c] border-[1px] border-[orange] rounded-[3%] flex flex-col justify-center items-center'>

        <div className='h-[15%] min-h-[32px] w-full flex justify-end items-center'>
          <div className='h-[50%] w-[33%] mr-[4.5%] bg-[#1f58d5] hover:rounded hover:bg-[#0047e1]
        flex justify-center border-b-[1px] rounded relative border-[#0047e1] items-center'
            id='data-push'>
            <h4 id='attach-data' className='text-[0.8rem]'>Or Attach data</h4>
            <DataPush />
          </div>
        </div>

        <div className='h-[35%] w-full flex items-center justify-center justify-evenly flex-col justify-evenly'>
          <p id='initial-capital-title'>initial capital</p>

          <input id='capital-form' type='number' name='numberInput' step="any" onChange={handleInputChange}
            className='bg-[#00174d] border-[1px] border-blue-600 rounded text-[#bfd3ff] 
            text-center h-[25%] w-[65%]'
            placeholder='${ input }'
            required />
        </div>

        <div className='w-full h-[25%] flex flex-col items-center justify-center justify-evenly'>
          <p id='starting-date-title' >starting date</p>
          <DateDisplay
            Class={
              'h-[27%] w-[22%] second-form-date text-white text-[1.35rem] border-b-[1px] border-blue-600 hover:cursor-pointer text-center'
            } />
        </div>

        <div className='w-full h-[25%] flex items-center justify-center'>
          <button
            id='chart-capital-push'
            className='w-[50%] h-[40%] min-h-[35px] 
            border-[1px] border-[#0047e1] rounded bg-[#002e93] hover:bg-[#0047e1]'>
                Submit
          </button>
        </div>

      </div>
    </form>
  )
}
