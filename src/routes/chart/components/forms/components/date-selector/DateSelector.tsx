import { StaticDatePicker } from "@mui/x-date-pickers";
import { ThemeProvider, createTheme, Typography } from "@mui/material";
import { transformExistingDate } from '../../../../functions';
import { dateStore } from '../../../../../../zustand/dateStore';
import { motion } from "framer-motion";
import dayjs from 'dayjs';
import './date.css'

export default function DateSelector() {
    const { date, setDate, dateState, changeDateState } = dateStore();

    const handleAccept = (date: any) => {
        setDate(transformExistingDate(date.$d));
        changeDateState(false);
    };

    const changeDateStateFunction = () => {
        changeDateState(false);
    };

    const theme = createTheme({
        palette: {
            mode: 'dark',
            primary: {
                main: '#2563eb',
            }
        },
    });

    const today = dayjs();

    if (dateState) {
        return (
            <motion.div
                transition={{ duration: 0.25 }}
                initial={{ scale: 'var(--scale-from)' }}
                animate={{ scale: 'var(--scale-to)' }}

                id="date-selector" className='absolute 2xl:[--scale-from:100%] lg:mb-[8vw] 2xl:[--scale-to:125%] flex items-center justify-center z-[12]' >
                <Typography style={{ color: '#ffa500', zIndex: 400 }}>
                    <ThemeProvider theme={theme}>
                        <StaticDatePicker
                            maxDate={today}
                            sx={{ backgroundColor: '#001548', borderRadius: '1rem', border: '2px solid orange' }}
                            onAccept={handleAccept}
                            onClose={changeDateStateFunction}
                        />
                    </ThemeProvider>
                </Typography>
            </motion.div>
        )
    } else {
        return (
            <div className='hidden'></div>
        )
    }


}
