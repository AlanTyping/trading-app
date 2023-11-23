import { StaticDatePicker } from "@mui/x-date-pickers";
import { ThemeProvider, createTheme, Typography } from "@mui/material";
import { transformExistingDate } from '../../../../functions';
import { dateStore } from '../../../../../../zustand/dateStore';
import { motion } from "framer-motion";
import dayjs from 'dayjs';
import './date.css'

export default function DateSelector() {
  const { date, setDate, dateState, changeDateState } = dateStore();

  function isValidDateObject(obj: any) {
    // Verificar las propiedades necesarias y sus tipos de datos
    return (
      typeof obj === 'object' &&
      obj.hasOwnProperty('$L') && typeof obj['$L'] === 'string' &&
      obj.hasOwnProperty('$u') && obj['$u'] === undefined &&
      obj.hasOwnProperty('$d') && obj['$d'] instanceof Date &&
      obj.hasOwnProperty('$x') && typeof obj['$x'] === 'object' &&
      obj.hasOwnProperty('$y') && typeof obj['$y'] === 'number' &&
      obj.hasOwnProperty('$M') && typeof obj['$M'] === 'number' &&
      obj.hasOwnProperty('$D') && typeof obj['$D'] === 'number' &&
      obj.hasOwnProperty('$W') && typeof obj['$W'] === 'number' &&
      obj.hasOwnProperty('$H') && typeof obj['$H'] === 'number' &&
      obj.hasOwnProperty('$m') && typeof obj['$m'] === 'number' &&
      obj.hasOwnProperty('$ms') && typeof obj['$ms'] === 'number' &&
      obj.hasOwnProperty('$s') && typeof obj['$s'] === 'number'
    );
  }

  const handleAccept = (date: any) => {
    try {
      if (isValidDateObject(date)) {
        setDate(transformExistingDate(date.$d));
        changeDateState(false);
      }
    } catch (error) {
      
    }
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
