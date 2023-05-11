import Form from './Form'
import Form2 from './Form2'
import { useEffect, useState } from 'react';
import { chartStore } from '../../../../zustand/chartStore';


export default function FormChange() {
    const chart = chartStore(item => item.files);
    const setChart = chartStore(item => item.addFiles);


    useEffect(() => {
        const array = localStorage.getItem('chartData');
        if (array !== null) {
            const parsedArray = JSON.parse(array);
            setChart(parsedArray);
        }
    }, [])



    return (
        <div 
        id='chart-form-container'
        className='h-[22vh] min-h-[100px] flex items-center justify-center justify-evenly flex-row w-[60%] min-w-[360px] mb-2'>
            {chart.length >= 1 ? <Form /> : <Form2 />}
        </div>
    )
}
