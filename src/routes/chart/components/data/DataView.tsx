import DataFile from './DataFile';
import { className } from '../../className/className';
import Eliminar from '../data-file/components/Eliminar/Eliminar';
import { deleteFileDecision } from '../../../../zustand/deleteFileDecision';
import { chartStore } from '../../../../zustand/chartStore';
import { EditSvg } from '../data-file/components/EditSvg';
import './data.css';

const DataView = (): JSX.Element => {
  const chart = chartStore(item => item.files);
  const decision = deleteFileDecision(item => item.deleteDecision);

  return (
    <div id='data-container'
      className='w-[60%] h-[93vh] flex justify-start items-center flex-col bg-[#061333] text-white'>
      <div id='operations-indication' className='w-full h-[50px] 2xl:h-[60px] justify-evenly rounded-t-lg bg-[#041333] border-solid border-b-[2px] border-blue-600 flex items-center'>
        <p className={`${className}`}>Capital</p>
        <p className={`${className}`}>$</p>
        <p className={`${className}`}>%</p>
        <div className={`${className}`}>
          <p className='relative'>Date</p>
        </div>
        <p className={`${className} mr-[5px]`}>Op</p>
      </div>
      <div className='w-full h-[auto] relative'>
        <div id='files-container' className='w-full bg-[#003099] rounded-b-lg'>
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
