import "~/styles/globals.css";
import type { AppProps } from "next/app";

import { Inter, Roboto_Mono } from "next/font/google";

const inter = Inter({ subsets: ["latin"], preload: true });

const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["300", "400", "700"],
  preload: true,
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>
        {`
          :root {
            --inter-font: ${inter.style.fontFamily};
            --roboto-mono-font: ${roboto_mono.style.fontFamily};
          }
        `}
      </style>
      <Component {...pageProps} />
    </>
  );
}
