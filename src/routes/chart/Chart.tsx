import LineChart from "./components/LineChart";
import DataView from "./components/DataView";
import FormChange from './components/forms/FormChange';
import Dashboard from "./components/dashboard/Dashboard";
import { chartStore } from "../../zustand/chartStore";
import '../../App.css';

export default function Chart() {
  const {files} = chartStore();
  return (
    <div className="w-full h-[auto] min-h-screen bg-[#061333] flex items-center flex-col relative">
      {files.length > 0 ? <LineChart /> : <div className="h-[70vh] initial-adjustment"></div>}
      {files.length > 0 ? <Dashboard /> : ''}
      <FormChange />
      {files.length > 0 ? <DataView /> : ''}
    </div>
  )
};

