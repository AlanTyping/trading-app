import { create } from "zustand";

interface tokenized {
    tokenizedValue: string,
    detokenizedValue: string;
    setTokenizedValue: (data: string) => void,
    setDetokenizedValue: (data: string) => void,
}

export const tokenizedStore = create<tokenized>((set) => ({
    tokenizedValue: "",
    detokenizedValue: "",
    setTokenizedValue: (data: string) => set(() => ({tokenizedValue: data})),
    setDetokenizedValue: (data: string) => set(() => ({tokenizedValue: data})),
}))