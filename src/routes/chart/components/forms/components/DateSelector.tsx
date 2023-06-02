import { useState, useEffect } from 'react';
import { StaticDatePicker } from "@mui/x-date-pickers";
import { ThemeProvider, createTheme, Typography } from "@mui/material";
import { transformExistingDate, getDate } from '../../../functions/functions';
import { dateStore } from '../../../../../zustand/dateStore';

export default function DateSelector() {
    const { date, setDate } = dateStore();
    const [selectedDate, setSelectedDate] = useState<any>(null);
    const [open, setOpen] = useState(false);

    const handleAccept = (date: any) => {
        if (date) {
            setOpen(false);
            setDate(transformExistingDate(date.$d));
        }
    };

    const handleClose = () => {
        setOpen(false);
    };

    const theme = createTheme({
        palette: {
            mode: 'dark',
            primary: {
                main: '#2563eb',
            }
        },
    });

    if (open) {
        return (
            <Typography style={{ color: '#ffa500', zIndex: 400, position: 'absolute', top: '-250%' }}>
                <ThemeProvider theme={theme}>
                    <StaticDatePicker
                        sx={{ backgroundColor: '#001548', borderRadius: '2rem' }}
                        onAccept={handleAccept}
                        onClose={handleClose}
                    />
                </ThemeProvider>
            </Typography>
        ) 
    } else {
            return (
                <p
                    onClick={() => setOpen(true)}
                    className='absolute top-[-35%] hover:bg-blue-600 left-4 text-white text-[1.04rem] border-b-[1px] 
                    border-blue-600 hover:cursor-pointer w-[8%] text-center hover:rounded'>
                    {date.slice(0, -5)}
                </p>
            )
    }
}
