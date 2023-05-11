import { DownloadSvg } from "./DownloadSvg";

export default function DataDownload() {
    const handleDownload = () => {
        const data = localStorage.getItem('chartData');

        const a = document.createElement('a');
        a.href = 'data:text/plain;charset=utf-8,' + data;
        a.download = 'chartData.txt';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }


    return (
        <button className='h-[40%] w-[65%] border-[1px] border-blue-600' onClick={handleDownload}>
            Download
        </button>
    )
}
