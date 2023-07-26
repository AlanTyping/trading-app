import React, { useState } from 'react';
import { getDolar, getPercentage, getDate, changeTrade, getCapitalByPercentage, getCapitalByDolar } from '../../../functions';
import { chartStore } from '../../../../../zustand/chartStore';
import ChartFunctions from '../../chart-functions/ChartFunctions';
import { chartFunctionsStore } from '../../../../../zustand/chartFunctionsStore';
import { deleteAllFilesDecision } from '../../../../../zustand/deleteAllFilesDecision';
import EliminarTodoConfirmación from '../../chart-functions/eliminar/EliminarConfirmacion/EliminarTodoConfirmación';
import { summaryFileDecision } from '../../../../../zustand/summaryDecision';
import { dateStore } from '../../../../../zustand/dateStore';
import Carousel from '../components/carousel/Carousel';
import './form.css';

const Form = (): JSX.Element => {
  const { date, setDate } = dateStore();
  const [loss, setLoss] = useState<number>(0);
  const [profit, setProfit] = useState<number>(0);
  const [tokenizeValue, setTokenizeValue] = useState<string>("")
  let capital: number = 0;
  let dolar: number = 0;
  let percentage: number = 0;
  const deleteDecision = deleteAllFilesDecision(i => i.deleteDecision)
  const decision = summaryFileDecision(i => i.summaryDecision);

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

    if (!decision) {
      dolar = Math.abs(profit);
      capital = getCapitalByDolar(chart[chart.length - 1].capital, dolar);
      percentage = getPercentage(chart[chart.length - 1].capital, dolar);
    } else {
      percentage = Math.abs(profit);
      capital = getCapitalByPercentage(chart[chart.length - 1].capital, profit);
      dolar = getDolar(chart[chart.length - 1].capital, profit);
    }

    const file = {
      capital: capital,
      percentage: percentage,
      dolar: dolar,
      number: chart[chart.length - 1].number + 1,
      date: date
    }

    addFile(file);
    const newData = [...chart, file];
    localStorage.setItem('chartData', JSON.stringify(newData));
  };

  const HandleLoss = (e: any) => {
    e.preventDefault();

    if (!decision) {
      dolar = (loss < 0 ? loss : -loss);
      capital = getCapitalByDolar(chart[chart.length - 1].capital, dolar);
      percentage = getPercentage(chart[chart.length - 1].capital, dolar);
    } else {
      percentage = -loss;
      capital = getCapitalByPercentage(chart[chart.length - 1].capital, percentage);
      dolar = getDolar(chart[chart.length - 1].capital, percentage);
    }

    const file = {
      capital: capital,
      percentage: percentage,
      dolar: dolar,
      number: chart[chart.length - 1].number + 1,
      date: date
    }

    addFile(file);
    const newData = [...chart, file];
    localStorage.setItem('chartData', JSON.stringify(newData));
  }

  return (
    <div className='w-full h-[70%] min-h-[90px] form flex items-center justify-center relative 
    border-r-[1px] border-l-[1px] border-r-[#0050ff] border-l-[orange]' id='chart-second-form'>
      <div id='push-form-container' className='min-w-[360px] h-full flex items-center justify-center justify-evenly flex-row w-[100%]'>
        <form onSubmit={HandleLoss} className='flex flex-col items-center w-full min-h-[100px] justify-evenly
        rounded-[10px] bg-[#061333]'>
          <button id='loss-button' className='chart-submit text-white w-[80%] rounded-md
          min-w-[120px] min-h-[38px] border-[1px] border-solid border-[orange]'>
            Submit loss
          </button>
          <input step="any" type='number' onChange={lossChange}
          id='chart-input-loss'
            className='chart-input w-[30%] min-w-[120px] border-b-[1px] text-white border-solid bg-[#061333] border-[orange] text-center'
            placeholder={decision ? '-%{ input }' : '-${ input }'}
            required />
        </form>
        <div id='chart-options' className='chart-options h-[95px] w-[15%] relative min-w-[40px] flex items-center justify-center '>
          <Carousel />
        </div>
        <form className='flex flex-col items-center w-full min-h-[100px] justify-evenly bg-[#061333] rounded-[10px]' onSubmit={HandleProfit}>
          <button id='profit-button' className='chart-submit text-white w-[80%] rounded-md min-w-[120px] min-h-[38px] 
          border-[1px] border-solid border-[#0050ff]'>
            Submit profit
          </button>
          <input step="any" type='number' onChange={profitChange}
            id='chart-input-gain'
            className='chart-input w-[30%] min-w-[120px] border-b-[1px] text-white bg-[#061333]
            border-[#0050ff] text-center'
            placeholder={decision ? '+%{ input }' : '+${ input }'}
            required />
        </form>
      </div>
      {chartOprionsAviable ? <ChartFunctions /> : ''}
      {deleteDecision ? <EliminarTodoConfirmación /> : ''}
    </div>
  )
}
export default Form;

