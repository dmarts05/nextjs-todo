import { Head, Html, Main, NextScript } from 'next/document';

// Need to create a custom _document because i18n support is not compatible with `next export`.
const MyDocument = () => {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default MyDocument;
