import DataFile from './data-file/DataFile';
import { className } from '../className/className';
import Eliminar from './data-file/components/Eliminar/Eliminar';
import { deleteFileDecision } from '../../../zustand/deleteFileDecision';
import { chartStore } from '../../../zustand/chartStore';

const DataView = (): JSX.Element => {
  const chart = chartStore(item => item.files);
  const decision = deleteFileDecision(item => item.deleteDecision);

  return (
    <div id='data-container'
     className='w-[60%] h-[auto] flex justify-center items-center flex-col bg-gray-900 text-white'>
      <div className='w-[60%] w-full h-[50px] justify-evenly rounded-t-lg bg-[#041333] border-solid border-b-[1px] border-b-[2px] border-blue-600 flex items-center'>
        <p className={`${className}`}>Capital</p>
        <p className={`${className}`}>$</p>
        <p className={`${className}`}>%</p>
        <p className={`${className}`}>Date</p>
        <p className={`${className}`}>Op</p>
      </div>
      <div className='w-full h-[auto] relative'>
        <div className='file-container w-full bg-gray-800'>
          {chart.map((e, i) => {
            if (e.number !== 0) return (
              <DataFile
                key={i}
                i={i}
                capital={e.capital}
                dolar={e.dolar}
                percentage={e.percentage}
                date={e.date}
                number={e.number}
              />
            )
          }
          )}
          {decision ? (<Eliminar />) : ''}
        </div>
      </div>
    </div>
  )
}

export default DataView;
