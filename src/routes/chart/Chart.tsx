import LinesChart from "./components/LineChart";
import DataView from "./components/DataView";
import FormChange from './components/forms/FormChange';
import Header from "../../components/Header";


export default function Chart() {
  return (
    <div className="w-full h-[auto] min-h-screen bg-gray-900 flex items-center flex-col relative">
      <Header />
      <LinesChart />
      <FormChange />
      <DataView />
    </div>
  )
};

