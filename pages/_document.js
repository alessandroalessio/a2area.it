import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="it">
        <Head>
            <meta name="theme-color" content="#1d1d1d" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" rel="stylesheet" />
        </Head>
        <body>
            <Main />
            <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument