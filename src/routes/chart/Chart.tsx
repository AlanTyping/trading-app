import LineChart from "./components/chart/LineChart";
import DataView from "./components/data/DataView";
import { useEffect, useState } from 'react'
import Dashboard from "./components/dashboard/Dashboard";
import { chartStore } from "../../zustand/chartStore";
import { dateStore } from "../../zustand/dateStore";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Form from "./components/forms/form/Form";
import Form2 from "./components/forms/form2/Form2";
import '../../App.css';

export default function Chart() {
  const { files, addFiles } = chartStore();
  const [display, setDisplay] = useState(false)

  useEffect(() => {
    const data: string | null = localStorage.getItem('chartData');
    if (data) {
      const parsedArray = JSON.parse(data);
      addFiles(parsedArray);
    }
    setDisplay(true)
  }, [])

  return (
    <div className="w-full h-[auto] min-h-screen bg-[#061333] flex items-center justify-center flex-col relative">
      {
        display &&
        <>
          {
            files.length > 0 ?
              <>
                <LineChart />
                <Dashboard />
                <Form />
                <DataView />
                <Footer />
              </>
              :
              <>
                <div className="background">
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
                </div>
                <Form2 />
              </>
          }
        </>
      }
    </div>
  )
};

