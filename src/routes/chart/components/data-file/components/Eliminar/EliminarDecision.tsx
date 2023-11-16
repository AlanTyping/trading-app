import eliminar from '../../../../media/eliminar.png';
import Eliminar from '../Eliminar/Eliminar'
import { deleteFileDecision } from '../../../../../../zustand/deleteFileDecision';

export default function EliminarDecision() {
    const { deleteToTrue } = deleteFileDecision();

    return (
        <div onClick={deleteToTrue}
            className='hover:cursor-pointer w-full h-[5%] min-h-[23px] rounded-b-lg flex items-center justify-center'>
            <img src={eliminar} className='h-full' />
        </div>

    )
}
