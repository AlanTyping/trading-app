import { StaticDatePicker } from "@mui/x-date-pickers";
import { ThemeProvider, createTheme, Typography } from "@mui/material";
import { transformExistingDate } from '../../../functions/functions';
import { dateStore } from '../../../../../zustand/dateStore';
import dayjs from 'dayjs';

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
            <div className='absolute flex items-center justify-center z-[4]' >
                <Typography style={{ color: '#ffa500', zIndex: 400}}>
                    <ThemeProvider theme={theme}>
                        <StaticDatePicker
                            maxDate={today}
                            sx={{ backgroundColor: '#001548', borderRadius: '1rem', border: '1px solid orange' }}
                            onAccept={handleAccept}
                            onClose={changeDateStateFunction}
                        />
                    </ThemeProvider>
                </Typography>
            </div>
        )
    } else {
        return (
            <div className='hidden'></div>
        )
    }


}
