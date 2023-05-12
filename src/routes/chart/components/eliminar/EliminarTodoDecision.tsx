import eliminarTodo from '../../media/eliminarTodo.png';
import { deleteAllFilesDecision } from '../../../../zustand/deleteAllFilesDecision';


export default function EliminarTodoDecision() {
    const handleDecision = deleteAllFilesDecision(item => item.deleteToTrue)

    return (
        <div 
        className='h-[40%] w-[55%] min-w-[100px] hover:cursor-pointer hover:bg-[#a80000] bg-[#5b0000] border-[1px] border-red-600 flex justify-center 
        items-center flex-col' onClick={handleDecision}>
            Delete files
        </div>
    )
}
