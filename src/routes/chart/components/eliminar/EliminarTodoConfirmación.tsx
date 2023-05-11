import { chartStore } from "../../../../zustand/chartStore";
import { deleteAllFilesDecision } from "../../../../zustand/deleteAllFilesDecision";
import { chartFunctionsStore } from "../../../../zustand/chartFunctionsStore";

export default function EliminarTodoConfirmación() {
  const chart = chartStore(item => item.files);
  const deleteEveryFile = chartStore(item => item.removeFiles);
  const deleteAllFilesToFalse = deleteAllFilesDecision(item => item.deleteToFalse);
  const setChartFunctionsToFalse = chartFunctionsStore(i => i.deleteToFalse)

  const handleYes = (e: any) => {
    e.preventDefault();
    deleteEveryFile();
    deleteAllFilesToFalse();
    setChartFunctionsToFalse();
    localStorage.setItem('chartData', JSON.stringify([]));
  }

  const handleNo = (e: any) => {
    e.preventDefault();
    deleteAllFilesToFalse();
  }

  return (
    <div className='text-white flex flex-col items-center justify-center absolute inset-x-0 inset-y-0 bg-[#111827] z-[5]'>
      <div className='h-[50%] w-[100%] flex items-center justify-center flex-col'>
        <p>Are you sure you want to delete all of the files?</p><br />
        <p>This action cannot be undone</p>
      </div>
      <div className='h-[50%] w-[60%] flex flex-row justify-center items-start justify-evenly'>
        <button className='h-[40%] w-[30%] border-[2px] flex items-center justify-center border-[#de1212] hover:bg-red-900' onClick={handleYes}>Yes</button>
        <button className='h-[40%] w-[30%] border-[2px] flex items-center justify-center border-blue-700 hover:bg-blue-900' onClick={handleNo}>No</button>
      </div>
    </div>
  )
}
