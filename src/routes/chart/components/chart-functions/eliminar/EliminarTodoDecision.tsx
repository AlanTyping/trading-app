import '../eliminar.css'
import { deleteAllFilesDecision } from '../../../../../zustand/deleteAllFilesDecision';


export default function EliminarTodoDecision() {
    const handleDecision = deleteAllFilesDecision(item => item.deleteToTrue)

    return (
        <div 
        id='delete-files'
        className='h-[40%] celu-button-width celu-font-size w-[60%] min-w-[100px] text-[1.15rem] hover:cursor-pointer rounded hover:bg-[#ff00007d] bg-[#ff000069] border-[1px] border-red-600 flex justify-center 
        items-center flex-col' onClick={handleDecision}>
            Delete files
        </div>
    )
}
