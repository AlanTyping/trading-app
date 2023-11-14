import { useState, useEffect } from 'react';
import { chartStore } from '../../../../../zustand/chartStore';
import DataPush from '../../chart-data-management/data-push';
import DateDisplay from '../components/DateDisplay';
import { dateStore } from '../../../../../zustand/dateStore';
import FormSubTitle from './components/FormSubTitle';
import DateSelector from '../components/date-selector/DateSelector';
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
    <form id='initial-form-container' onSubmit={handleSubmit} className='w-[80%] max-w-[325px] h-[auto] barlow bg-[#051a4ed5] rounded flex flex-col items-center justify-center text-white relative'>

      <div id='form-header' className='w-full p-2 flex items-center justify-center py-4 border-b-[6px] border-b-[#0047e1] bg-[#00113c]'>
        <h1 className='text-[2rem]'>trading progress</h1>
      </div>


      <div id='initial-form' className='p-2 items-center justify-center flex flex-col w-full relative'>
        <DateSelector />

        <div id='push-chart-data-container' className='w-full mt-1 px-1 flex items-center justify-end'>
          <div className='relative flex flex-center text-[0.85rem] items-center px-4 py-[0.3rem] mr-2 rounded bg-[#0047e1] hover:rounded hover:bg-[#0047e1]'>
            <span>Or attach data</span>
            <DataPush />
          </div>
        </div>


        <FormSubTitle title={'initial capital'} />
        <input type='number' name='numberInput' step="any" onChange={handleInputChange}
          className='bg-[#00174d] 2xl:text-[1.25vw] 2xl:mt-[1vw] border-[1px] border-blue-600 rounded text-[#bfd3ff] text-center py-1 mt-4 w-[60%] text-[1.3rem]'
          placeholder='${ input }'
          required />


        <FormSubTitle title={'starting date'} />
        <DateDisplay Class={'text-white text-[1.35rem] 2xl:text-[1.3vw] border-b-[1px] border-[#ffa500] hover:cursor-pointer text-center mt-3'} />


        <div className='w-full flex items-center justify-center my-[1.8rem] 2xl:mt-[3.5vw] 2xl:mb-[2vw] mt-14'>
          <button className='w-[50%] 2xl:text-[1.3vw] p-[0.35rem] text-[1.2rem] border-[1px] border-[#0047e1] rounded bg-[#002e93] hover:bg-[#0047e1]'>
            Submit
          </button>
        </div>
      </div>
    </form>
  )
}
