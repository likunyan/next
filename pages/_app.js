import App from 'next/app'
import React from 'react'
import Head from 'next/head';
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { ThemeProvider as MaterialThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import theme from '../src/theme';
import { createStore } from "redux";
import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";

const defaultState = {foo: '233'};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'FOO':
      return {...state, foo: action.payload};
    default:
      return state
  }
};

const makeStore = (initialState, options) => {
  return createStore(reducer, initialState);
};

class MyApp extends App {
  componentDidMount() {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentNode)
      jssStyles.parentNode.removeChild(jssStyles)
  }

  render() {
    const {Component, pageProps, store} = this.props;

    return (
      <>
        <Head>
          <title>antic</title>
          <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width"/>
        </Head>
        <StyledThemeProvider theme={theme}>
          <MaterialThemeProvider theme={theme}>
            <CssBaseline/>
            <Provider store={store}>
              <Component {...pageProps} />
            </Provider>
          </MaterialThemeProvider>
        </StyledThemeProvider>
      </>
    )
  }
}

export default withRedux(makeStore)(MyApp);
