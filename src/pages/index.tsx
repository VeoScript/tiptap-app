import { Inter } from "next/font/google";
import clsx from "clsx";
import TipTap from "~/components/TipTap";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={clsx("flex flex-grow items-center justify-center w-full h-full p-10", inter.className)}>
      <div className="flex justify-center w-full max-w-3xl">
        <TipTap />
      </div>
    </div>
  );
}
