import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta name="Acapa Ecoturismo" content="Turismo Tumaco" />
        <link rel="icon" href="/acapa.png" />
        
      </Head>
      <body className="font-poppins bg-primary">
        <div className="flex  items-end pb-8  ">
          <div className="circle rounded-lg -rotate-180 "></div>
          <div className="circle rounded-lg -rotate-180 ml-auto"></div>

          <div className="absolute top-0   w-full ">
            <Main />
          </div>
        </div>

        <NextScript />
      </body>
    </Html>
  );
}
