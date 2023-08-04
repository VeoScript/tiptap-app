import { create } from "zustand";

export interface DocumentStoreProps {
  documentValue: string;
  setDocumentValue: (value: string) => void;
}

export interface StoryStoreProps {
  stories: any[];
  setStories: (data: { title: string; value: string }) => void;
  deleteStory: (value: string) => void;
}

export const documentStore = create<DocumentStoreProps>((set) => ({
  documentValue: "",
  setDocumentValue: (value: string) => set({ documentValue: value }),
}));

export const storyStore = create<StoryStoreProps>((set, get) => ({
  stories: [],
  setStories: (data: { title: string; value: string }) =>
    set({
      stories: [...get().stories, data],
    }),
  deleteStory: (value: string) => {
    const currentStories = get().stories;
    const updatedStories = currentStories.filter(
      (story: any) => story.title !== value
    );
    set({
      stories: updatedStories,
    });
  },
}));
