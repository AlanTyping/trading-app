import { DownloadSvg } from "./DownloadSvg";

export default function DataDownload() {
    const handleDownload = (e: any) => {
        e.preventDefault();
        const data = localStorage.getItem('chartData');

        const a = document.createElement('a');
        a.href = 'data:text/plain;charset=utf-8,' + data;
        a.download = 'chartData.txt';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }


    return (
        <button className='h-[40%] w-[55%] min-w-[100px] border-blue-600 border-[1px] rounded bg-[#002e93] hover:bg-[#0047e1]' onClick={handleDownload}>
            Download
        </button>
    )
}
