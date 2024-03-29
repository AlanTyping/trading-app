import { className } from '../../className/className';
import EliminarDecision from '../data-file/components/Eliminar/EliminarDecision';
import Eliminar from '../data-file/components/Eliminar/Eliminar';
import { deleteFileDecision } from '../../../../zustand/deleteFileDecision';
import { chartStore } from '../../../../zustand/chartStore';
import { motion } from 'framer-motion';
import './data.css';

interface Prop {
  capital: number,
  number: number,
  percentage: number,
  date: string,
  dolar: number,
  i: number
}

export default function DataFile({ capital, number, percentage, date, dolar, i }: Prop) {
  const chart = chartStore((item) => item.files);
  const { deleteDecision } = deleteFileDecision()

  return (
    <>
      <motion.div
        // whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 1.1 }}

        id='data-file' className='w-[100%] select-none bg-[#061539] text-[95%] text h-[15%] min-h-[60px] relative border-b-[2px] border-[#122484] flex items-center justify-center justify-evenly'>
        <p className={`${className} ${Math.sign(capital) === 1 ? `text-green-600` : Math.sign(capital) === 0 ? `` : `text-[orange]`}`}>
          {Math.sign(capital) === 1 ? `$${capital}` : Math.sign(capital) === 0 ? `$${capital}` : `-$${Math.abs(capital)}`}
        </p>
        <p className={`${className} ${Math.sign(dolar) === 1 ? `text-[#00afff]` : `text-[orange]`}`}>
          {Math.sign(dolar) === 1 ? `+$${dolar.toFixed()}` : `-$${Math.abs(dolar).toFixed()}`}
        </p>
        <p className={`${className} ${Math.sign(percentage) === 1 ? `text-[#00afff]` : `text-[orange]`}`}>
          {Math.sign(percentage) === 1 ? `+${percentage}%` : `-${Math.abs(percentage)}%`}
        </p>
        <p className={`${className}`}>{date.slice(0, -5)}</p>
        <p className={`${className}`}>N° {number}</p>
      </motion.div>

      {i === (chart.length - 1) && (<EliminarDecision />)}
    </>
  )
}
