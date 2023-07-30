import { chartStore } from "../../../../../../zustand/chartStore";
import { deleteAllFilesDecision } from "../../../../../../zustand/deleteAllFilesDecision";
import { chartFunctionsStore } from "../../../../../../zustand/chartFunctionsStore";
import './confirmacion.css'

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
    <div id="delete-all-files" className='barlow text-white flex flex-col min-h-[160%] 
    items-center justify-center absolute inset-x-0 bottom-[0%] top-[-43%] bg-[#061333] z-[5]'>
      <div className='h-[50%] w-[100%] flex items-center text-[1.25rem] justify-center relative'>
        <p className="absolute top-[25%]">Confirm deletion of ALL files?</p>
      </div>
      <div id="delete-all-button-container" className='h-[50%] w-[60%] flex flex-row justify-center items-start justify-around'>
        <button id="confirmation-deletent-button" className='text-[1.10rem] confirmation-button h-[48%] w-[30%] border-[1px]  flex items-center justify-center hover:cursor-pointer bg-[#ff000069] rounded hover:bg-[#ff00007d] border-red-600' onClick={handleYes}>Yes</button>
        <button id="confirmation-delete-button" className='text-[1.10rem] confirmation-button h-[48%] w-[30%] border-[1px]  flex items-center justify-center border-blue-600 rounded bg-[#002e93] hover:bg-[#0047e1]' onClick={handleNo}>No</button>
      </div>
    </div>
  )
}
