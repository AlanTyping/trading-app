import './eliminar.css'
import { deleteAllFilesDecision } from '../../../../../../zustand/deleteAllFilesDecision';


export default function EliminarTodoDecision() {
    const handleDecision = deleteAllFilesDecision(item => item.deleteToTrue)

    return (
        <div 
        id='delete-files'
        className='h-[40%] mb-[10px] celu-button-width celu-font-size w-[60%] min-w-[100px] text-[1.25rem] hover:cursor-pointer bg-[#ff000069] rounded hover:bg-[#ff00007d] border-[1px] border-red-600 flex justify-center 
        items-center flex-col' onClick={handleDecision}>
            Delete files
        </div>
    )
}
