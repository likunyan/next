import NextApp from 'next/app'
import React from 'react'
import Head from 'next/head';
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { ThemeProvider as MaterialThemeProvider } from '@material-ui/core/styles';
import {CssBaseline} from '@material-ui/core';
import theme from '../src/theme';

export default class App extends NextApp {
  componentDidMount() {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentNode)
      jssStyles.parentNode.removeChild(jssStyles)
  }

  render() {
    const {Component, pageProps} = this.props;

    return (
      <>
        <Head>
          <title>antic</title>
          <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width"/>
        </Head>
        <StyledThemeProvider theme={theme}>
          <MaterialThemeProvider theme={theme}>
            <CssBaseline/>
            <Component {...pageProps} />
          </MaterialThemeProvider>
        </StyledThemeProvider>
      </>
    )
  }
}
