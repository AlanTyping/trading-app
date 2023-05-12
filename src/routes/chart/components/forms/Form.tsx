import React, { useState } from 'react';
import { getDolar, getPercentage, getDate, changeTrade, getCapitalByPercentage, getCapitalByDolar } from '../../functions/functions';
import { chartStore } from '../../../../zustand/chartStore';
import ChartFunctionsButton from '../chart-functions/ChartFunctionsButton';
import ChartFunctions from '../chart-functions/ChartFunctions';
import { chartFunctionsStore } from '../../../../zustand/chartFunctionsStore';
import { deleteAllFilesDecision } from '../../../../zustand/deleteAllFilesDecision';
import EliminarTodoConfirmación from '../eliminar/EliminarTodoConfirmación';

const Form = (): JSX.Element => {
  const percentageString = 'percentage'
  const [decision, setDecision] = useState<string>(percentageString);
  const [loss, setLoss] = useState<number>(0);
  const [profit, setProfit] = useState<number>(0);
  let capital: number = 0;
  let dolar: number = 0;
  let percentage: number = 0;
  const deleteDecision = deleteAllFilesDecision(i => i.deleteDecision)

  const chart = chartStore(item => item.files);
  const addFile = chartStore(item => item.addFile);
  const chartOprionsAviable = chartFunctionsStore(i => i.chartFunctions);

  const profitChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setProfit(Number(value));
  };

  const lossChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setLoss(Number(value));
  };

  const HandleProfit = (e: any) => {
    e.preventDefault();

    if (decision === percentageString) {
      percentage = profit;
      capital = getCapitalByPercentage(chart[chart.length - 1].capital, profit);
      dolar = getDolar(chart[chart.length - 1].capital, profit);
    } else {
      dolar = profit;
      capital = getCapitalByDolar(chart[chart.length - 1].capital, dolar);
      percentage = getPercentage(chart[chart.length - 1].capital, dolar);
    }

    const file = {
      capital: capital,
      percentage: percentage,
      dolar: dolar,
      number: chart[chart.length - 1].number + 1,
      date: getDate()
    }

    addFile(file);
    const newData = [...chart, file];
    localStorage.setItem('chartData', JSON.stringify(newData));
  };

  const HandleLoss = (e: any) => {
    e.preventDefault();

    if (decision === percentageString) {
      percentage = -loss;
      capital = getCapitalByPercentage(chart[chart.length - 1].capital, percentage);
      dolar = getDolar(chart[chart.length - 1].capital, percentage);
    } else {
      dolar = -loss;
      capital = getCapitalByDolar(chart[chart.length - 1].capital, dolar);
      percentage = getPercentage(chart[chart.length - 1].capital, dolar);
    }

    const file = {
      capital: capital,
      percentage: percentage,
      dolar: dolar,
      number: chart[chart.length - 1].number + 1,
      date: getDate()
    }

    addFile(file);
    const newData = [...chart, file];
    localStorage.setItem('chartData', JSON.stringify(newData));
  }

  return (
    <form className='w-full h-[70%] min-h-[90px] form flex items-center justify-center relative 
    border-r-[1px] border-l-[1px] border-r-[#0050ff] border-l-[orange]' id='chart-second-form'>
      <div className='min-w-[360px] h-full flex items-center justify-center justify-evenly flex-row w-[100%]'>
        <div className='flex flex-col items-center w-full min-h-[100px] justify-evenly
        rounded-[10px] bg-[#061333]'>
          <button className='chart-submit text-white w-[80%] rounded-md 
          min-w-[120px] min-h-[40px] border-[1px] border-solid border-[orange] hover:bg-[#da8d00]'
            onClick={HandleLoss}>
            Submit loss
          </button>
          <input type='number' onChange={lossChange}
            className='chart-input w-[30%] min-w-[120px] border-b-[1px] text-white border-solid bg-[#061333] border-[orange] text-center'
            placeholder='-${input}' />
        </div>
        <div className='chart-options h-[95px] w-[15%] min-w-[40px] flex items-center justify-center flex-col justify-evenly'>
          <select name='select' id='chart-form-select' className='hover:cursor-pointer bg-[#061333] border-[1px] rounded-md border-blue-800
           text-white h-[40%] w-[73%] p-[5px] min-w-[40px]' defaultValue='porcentaje' onChange={(event) => setDecision(event.target.value)}>
            <option value='porcentaje' className='text-center'>%</option>
            <option value='dolar' className='text-center'>$</option>
          </select>
          <ChartFunctionsButton />
        </div>
        <div className='flex flex-col items-center w-full min-h-[100px] justify-evenly bg-[#061333] rounded-[10px]'>
          <button className='chart-submit text-white w-[80%] rounded-md min-w-[120px] min-h-[40px] 
          border-[1px] border-solid border-[#0050ff] hover:bg-blue-600'
            onClick={HandleProfit}>
            Submit profit
          </button>
          <input type='number' onChange={profitChange}
            className='chart-input w-[30%] min-w-[120px] border-b-[1px] text-white bg-[#061333]
            border-[#0050ff] text-center'
            placeholder='+${input}' />
        </div>
      </div>
      {chartOprionsAviable ? <ChartFunctions /> : ''}
      {deleteDecision ? <EliminarTodoConfirmación /> : ''}
    </form>
  )
}
export default Form;

