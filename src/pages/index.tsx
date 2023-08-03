import Head from "next/head";
import TipTap from "~/components/TipTap";

export default function Home() {
  return (
    <>
      <Head>
        <title>TipTap Richtext Editor</title>
      </Head>
      <div className="flex flex-grow items-center justify-center w-full h-full p-10 font-roboto-mono">
        <div className="flex justify-center w-full max-w-3xl">
          <TipTap />
        </div>
      </div>
    </>
  );
}
