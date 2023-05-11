import { create } from "zustand";

interface decision {
    deleteDecision: boolean,
    deleteToTrue: () => void,
    deleteToFalse: () => void,
}

export const deleteAllFilesDecision = create<decision>((set) => ({
    deleteDecision: false,
    deleteToTrue: () => set(item => ({deleteDecision: true})),
    deleteToFalse: () => set(item => ({deleteDecision: false})),
}))