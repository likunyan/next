import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet as StyledComponentSheets } from 'styled-components'
import { ServerStyleSheets as MaterialUiServerStyleSheets } from '@material-ui/core/styles';
import theme from '../src/theme';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="zh-cmn-Hans">
      <Head>
        <meta name="theme-color" content={theme.palette.primary.main}/>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Head>
      <body>
      <Main/>
      <NextScript/>
      </body>
      </Html>
    );
  }
}

MyDocument.getInitialProps = async ctx => {
  const styledComponentSheet = new StyledComponentSheets();
  const materialUiSheets = new MaterialUiServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  try {
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: App => props =>
          styledComponentSheet.collectStyles(
            materialUiSheets.collect(<App {...props} />),
          ),
      });

    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...initialProps,
      styles: [...React.Children.toArray(initialProps.styles), materialUiSheets.getStyleElement(), styledComponentSheet.getStyleElement()],
    };
  } finally {
    styledComponentSheet.seal();
  }
};
