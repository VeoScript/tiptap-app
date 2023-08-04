import Head from "next/head";
import TipTap from "~/components/TipTap";

import { documentStore, storyStore } from "~/store";

export default function Home() {
  const { documentValue, setDocumentValue } = documentStore();
  const { stories, setStories, deleteStory } = storyStore();

  return (
    <>
      <Head>
        <title>TipTap Richtext Editor</title>
      </Head>
      <div className="flex flex-col items-center justify-center w-full h-full p-10 gap-y-3 font-roboto-mono">
        <div className="flex flex-row items-start justify-center w-full space-x-3">
          <div className="flex w-full max-w-3xl">
            <TipTap />
          </div>
          <div className="flex flex-col w-full h-full min-h-[20rem] overflow-hidden rounded-xl border-2 border-black">
            <h1 className="w-full p-3 font-bold text-base text-white bg-black">
              Document Story Result
            </h1>
            <article
              className="prose w-full max-w-full h-full min-h-[19.4rem] p-3"
              dangerouslySetInnerHTML={{ __html: documentValue }}
            />
            <div className="flex flex-row items-center justify-end w-full p-2 bg-black">
              <button
                type="button"
                className="outline-none w-auto px-3 py-2 rounded-xl text-xs text-white bg-neutral-800 hover:opacity-50"
                onClick={() => {
                  setStories({
                    title: `Story Title ${stories.length + 1}`,
                    value: documentValue,
                  });
                  setDocumentValue("");
                }}
              >
                Save Story
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-full max-w-3xl gap-y-2">
          {stories.map((story: { title: string; value: string }, i: number) => (
            <div
              key={i}
              className="flex flex-row items-start justify-between w-full p-3 rounded-xl text-white bg-black"
            >
              <div className="flex flex-col w-full gap-y-1">
                <h2 className="font-bold text-base">{story.title}</h2>
                <div
                  className="prose-sm text-sm line-clamp-3"
                  dangerouslySetInnerHTML={{ __html: story.value }}
                />
              </div>
              <div className="flex items-center gap-x-2">
                <button
                  type="button"
                  className="outline-none w-auto px-3 py-2 rounded-xl text-xs text-white bg-neutral-800 hover:opacity-50"
                  onClick={() => setDocumentValue(story.value)}
                >
                  View
                </button>
                <button
                  type="button"
                  className="outline-none w-auto px-3 py-2 rounded-xl text-xs text-white bg-red-600 hover:opacity-50"
                  onClick={() => deleteStory(story.title)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
