import LineChart from "./components/LineChart";
import DataView from "./components/DataView";
import FormChange from './components/forms/FormChange';
import { StaticDatePicker } from "@mui/x-date-pickers";
import { ThemeProvider, createTheme, Typography, Box } from "@mui/material";
import { blue, orange, grey } from '@mui/material/colors';
import '../../App.css';


export default function Chart() {
  
const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: blue[700],
    }
  },
});

  return (
    <div className="w-full h-[auto] min-h-screen bg-[#061333] flex items-center flex-col relative">
      <LineChart />
      <FormChange />
      <Box sx={{ backgroundColor: 'blue' }}>
        <ThemeProvider theme={theme}>
        <Typography style={{ color: '#ffa500' }}>
          <StaticDatePicker />
        </Typography>
      </ThemeProvider>
      </Box>
      
      <DataView />
     </div>
  )
};

