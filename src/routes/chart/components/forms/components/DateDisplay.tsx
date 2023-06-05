import { dateStore } from "../../../../../zustand/dateStore"

export default function DateDisplay({Class}: any) {
    const { date, setDate, dateState, changeDateState } = dateStore();
    const changeStateFunction = () => {
        changeDateState(true)
    }
    return (
        <p
            onClick={changeStateFunction}
            id='date'
            className={`${Class}`}>
            {date.slice(0, -5)}
        </p>
    )
}
