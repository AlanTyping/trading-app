import { summaryFileDecision } from '../../../../../zustand/summaryDecision';

export default function Switch() {
  const { summaryDecision, changeDecision } = summaryFileDecision()

  return (
    <div className='w-full [23%]'>
      <div className={`h-full w-[100%] transition-all duration-200 rounded flex items-center relative hover:cursor-pointer 
    ${summaryDecision ? 'bg-blue-600 right-0' : 'bg-green-600'}`}
        onClick={() => changeDecision(!summaryDecision)}>
        <div
          className={`h-[100%] w-[60%] select-none flex items-center justify-center text-white rounded transition-all duration-300 
        ${summaryDecision ? 'bg-blue-900 ml-[40%]' : 'bg-green-900'}`} >
          {summaryDecision ? '%' : '$'}
        </div>
      </div>
    </div>
  )
}
