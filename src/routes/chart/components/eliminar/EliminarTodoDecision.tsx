import eliminarTodo from '../../media/eliminarTodo.png';
import { deleteAllFilesDecision } from '../../../../zustand/deleteAllFilesDecision';


export default function EliminarTodoDecision() {
    const handleDecision = deleteAllFilesDecision(item => item.deleteToTrue)

    return (
        <div className='h-[40%] w-[65%] hover:cursor-pointer border-[1px] border-red-600 flex justify-center 
        items-center flex-col' onClick={handleDecision}>
            <img className='h-[80%]' src={eliminarTodo} />
        </div>
    )
}
