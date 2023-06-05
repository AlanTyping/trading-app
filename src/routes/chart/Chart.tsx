import LineChart from "./components/LineChart";
import DataView from "./components/DataView";
import FormChange from './components/forms/FormChange';
import '../../App.css';

export default function Chart() {

  return (
    <div className="w-full h-[auto] min-h-screen bg-[#061333] flex items-center flex-col relative">
      <LineChart />
      <FormChange />
      <DataView />
    </div>
  )
};

