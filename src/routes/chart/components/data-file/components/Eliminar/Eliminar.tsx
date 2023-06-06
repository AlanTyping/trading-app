import { File } from '../../../../interface';
import { chartStore } from '../../../../../../zustand/chartStore';
import { deleteFileDecision } from '../../../../../../zustand/deleteFileDecision';

export default function Eliminar() {
  const decisionToFalse = deleteFileDecision(item => item.deleteToFalse);
  const chart = chartStore((item) => item.files);
  const deleteFile = chartStore((item) => item.removeFile);

  const handleYes = (e: any) => {
    e.preventDefault();

    const array = chart.filter((e: File) => e.number !== chart.length - 1);

    localStorage.setItem('chartData', JSON.stringify(array));
    deleteFile(array);
    decisionToFalse();
  };

  const handleNo = () => {
    decisionToFalse();
  }

  return (
    <div className='w-[100%] montserrat flex flex-col items-center justify-center z-2 absolute inset-x-0 top-[-5rem] bottom-28'>
      <div id='delete-last-file' className='flex w-[60%] min-w-[300px] bg-[#07103e] min-h-[140px] h-[30%] flex-col justify-center items-center'>
        <div className='h-[50%] w-[100%] text-[1.5rem] flex items-start justify-center p-6'>
          <p id='delete-last-file-question' className='text-center'>Delete the last file in the list?</p>
        </div>
        <div className='h-[50%] w-[60%] flex flex-row justify-center items-center justify-between'>
          <button className='h-[50%] w-[40%] border-[1px] flex items-center justify-center border-[orange] hover:bg-orange-900' onClick={handleYes}>Yes</button>
          <button className='h-[50%] w-[40%] border-[1px] flex items-center justify-center border-blue-700 hover:bg-blue-900' onClick={handleNo}>No</button>
        </div>
      </div>
    </div>
  )
}

