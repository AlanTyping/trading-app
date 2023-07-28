import Form from './form/Form'
import Form2 from './form2/Form2'
import { useEffect, useState } from 'react';
import { chartStore } from '../../../../zustand/chartStore';
import { dateStore } from '../../../../zustand/dateStore';
import DateSelector from './components/date-selector/DateSelector';


export default function FormChange() {
    const chart = chartStore(item => item.files);
    const setChart = chartStore(item => item.addFiles);
    const { dateState, changeDateState } = dateStore();

    useEffect(() => {
        const data: string | null = localStorage.getItem('chartData');
        if (data) {
            const parsedArray = JSON.parse(data);
            setChart(parsedArray);
        }
    }, [])

    return (
        <div 
        id='chart-form-container'
        className='h-[17vh] barlow min-h-[100px] flex items-center justify-center justify-evenly flex-row w-[60%] relative'>
            <DateSelector />
            {dateState ? '' : ''}
            {chart.length >= 1 ? <Form /> : <Form2 />}
        </div>
    )
}
