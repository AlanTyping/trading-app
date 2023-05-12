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
    <div className='text-white flex flex-col min-h-[160%] 
    items-center justify-center absolute inset-x-0 inset-y-0 bg-[#061333] z-[5]'>
      <div className='h-[50%] w-[100%] flex items-center justify-center flex-col'>
        <p>Are you sure you want to delete ALL of the files?</p>
      </div>
      <div className='h-[50%] w-[60%] flex flex-row justify-center items-start justify-evenly'>
        <button className='h-[40%] w-[30%] border-[2px] flex items-center justify-center border-[#de1212] hover:bg-[#a80000]' onClick={handleYes}>Yes</button>
        <button className='h-[40%] w-[30%] border-[2px] flex items-center justify-center border-[#0047e1] hover:bg-[#0047e1]' onClick={handleNo}>No</button>
      </div>
    </div>
  )
}
