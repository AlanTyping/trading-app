import LineChart from "./components/chart/LineChart";
import DataView from "./components/data/DataView";
import FormChange from './components/forms/FormChange';
import Dashboard from "./components/dashboard/Dashboard";
import { chartStore } from "../../zustand/chartStore";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Form from "./components/forms/form/Form";
import Form2 from "./components/forms/form2/Form2";
import '../../App.css';

export default function Chart() {
  const { files } = chartStore();


  return (
    <div className="w-full h-[auto] min-h-screen bg-[#061333] flex items-center justify-center flex-col relative">
      {files.length > 0 ? '' : <div className="background">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>}
      
      {/* {files.length > 0 && <Header />} */}
      {files.length > 0 && <LineChart />}
      {files.length > 0 && <Dashboard />}
      {files.length > 0 ? <Form /> : <Form2 />}
      {files.length > 0 && <DataView />}
      {files.length > 0 && <Footer />}
    </div>
  )
};

