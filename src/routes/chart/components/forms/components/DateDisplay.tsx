import { dateStore } from "../../../../../zustand/dateStore"

export default function DateDisplay() {
    const { date, setDate, dateState, changeDateState } = dateStore();
    const changeStateFunction = () => {
        changeDateState(true)
    }
    return (
        <p
            onClick={changeStateFunction}
            id='date'
            className='w-[45%] h-[140%] hover:bg-blue-600 text-white text-[1.04rem] border-b-[1px] 
                    border-blue-600 hover:cursor-pointer text-center hover:rounded'>
            {date.slice(0, -5)}
        </p>
    )
}
