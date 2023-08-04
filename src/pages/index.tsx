import Head from "next/head";
import TipTap from "~/components/TipTap";

import { documentStore } from "~/store";

export default function Home() {
  const { documentValue } = documentStore();

  return (
    <>
      <Head>
        <title>TipTap Richtext Editor</title>
      </Head>
      <div className="flex flex-grow items-center justify-center w-full h-full p-10 font-roboto-mono">
        <div className="flex flex-row items-start justify-center w-full space-x-3">
          <div className="flex w-full max-w-3xl">
            <TipTap />
          </div>
          <div className="flex flex-col w-full h-full min-h-[20rem] overflow-hidden rounded-xl border-2 border-black">
            <h1 className="w-full p-3 font-bold text-base text-white bg-black">
              Document Sample Results
            </h1>
            <article
              className="prose w-full max-w-full p-3"
              dangerouslySetInnerHTML={{ __html: documentValue }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
