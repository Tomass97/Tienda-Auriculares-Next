import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={'true'}/>
                <link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700;900&family=Roboto:wght@400;700;900&display=swap" rel="stylesheet" />
                <meta name="description"  content="TMS-AUDIO -  Venta de auriculares de diadema"/>
                <link rel="stylesheet" href="https://necolas.github.io/normalize.css/8.0.1/normalize.css" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}