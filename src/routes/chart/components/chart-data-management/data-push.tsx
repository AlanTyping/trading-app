import React from 'react';
import { File } from '../../interface';
import { chartStore } from '../../../../zustand/chartStore';

export default function DataPush() {
  const { addFiles } = chartStore();

  function areAllMyType(arr: unknown[]): arr is File[] {
    return arr.every((item) => {
      if (typeof item !== 'object' || item === null) {
        return false;
      }
      const obj = item as Record<string, unknown>;
      return (
        typeof obj.capital === 'number' &&
        typeof obj.percentage === 'number' &&
        typeof obj.dolar === 'number' &&
        typeof obj.number === 'number' &&
        typeof obj.date === 'string'
      );
    });
  }


  const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    const reader = new FileReader();
    reader.onload = () => {
      try {
        const fileContent = reader.result?.toString();
        const parsedContent = fileContent ? JSON.parse(fileContent) : null;

        if (Array.isArray(parsedContent)) {
          if (areAllMyType(parsedContent)) {
            addFiles(parsedContent);
            localStorage.setItem('chartData', JSON.stringify(parsedContent));
          }
        }
      } catch {
        alert("the file content doesn't match.")
      }

    };
    reader.readAsText(file as Blob);
  }

  return (
    <input type="file" /*id="myFileInput"*/ onChange={handleUpload} accept="text/plain"
      className='h-full hover:bg-[#007480] w-full absolute top-0 bottom-0 right-0 left-0 opacity-[0] hover:cursor-pointer' />
  )
}
