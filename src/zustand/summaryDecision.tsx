import { create } from "zustand";

interface decision {
    summaryDecision: boolean,
    changeDecision: (item: boolean) => void,
}

export const summaryFileDecision = create<decision>((set) => ({
    summaryDecision: false,
    changeDecision: (item) => set(() => ({summaryDecision: item}))
}))