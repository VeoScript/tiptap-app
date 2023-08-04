import { create } from "zustand";

export interface RichTextProps {
  documentValue: string;
  setDocumentValue: (value: string) => void;
}

export const documentStore = create<RichTextProps>((set) => ({
  documentValue: "",
  setDocumentValue: (value: string) => set({ documentValue: value }),
}));
