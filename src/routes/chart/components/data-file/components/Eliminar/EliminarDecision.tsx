import eliminar from '../../../../media/eliminar.png';
import { deleteFileDecision } from '../../../../../../zustand/deleteFileDecision';

interface Prop {
    number: number
}

export default function EliminarDecision({number}: Prop) {
    const decisionTotrue = deleteFileDecision(item => item.deleteToTrue);

    return (
        <div 
        onClick={decisionTotrue}
        className='hover:cursor-pointer w-full h-[4.5%] min-h-[23px] bg-orange-800 hover:bg-orange-600 rounded-b-lg flex items-center justify-center'>
            <img src={eliminar} className='h-full' />
        </div>
        
    )
}
