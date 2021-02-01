import Link from "next/link";
import { useEffect } from "react";
import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Layout from "../components/Layout";
import Page from "../components/Page";
import { addCount } from "../store/count/action";
import { wrapper } from "../store/store";
import { serverRenderClock, startClock } from "../store/tick/action";

const Index = (props) => {
  useEffect(() => {
    const timer = props.startClock();

    return () => {
      clearInterval(timer);
    };
  }, [props]);

  return (
    <Layout>
      <Page title="Index Page" linkTo="/other" />
      <main>
        <h2>Nav</h2>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="about">
          <a>About</a>
        </Link>
        <Link href="/useragent">
          <a>UserAgent</a>
        </Link>
        <Link href="/blog">
          <a>Blog</a>
        </Link>
        <Link href="/tv">
          <a>TV</a>
        </Link>
        <Link href="/quotes">
          <a>Quotes</a>
        </Link>
      </main>
      <footer className="footer">
        <div>
          <h2>Power by</h2>
          <ol>
            <li>
              <a
                href="https://zh-hans.reactjs.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                React
              </a>
            </li>
            <li>
              <a
                href="https://material-ui.com/zh/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Material-UI
              </a>
            </li>
            <li>
              <a
                href="https://www.nextjs.cn/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Next.js
              </a>
            </li>
            <li>
              <a
                href="https://laravel.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Laravel
              </a>
            </li>
          </ol>
        </div>
      </footer>
      <style jsx>{`
        main {
          margin: 10px;
        }

        main > a {
          padding: 10px;
        }

        footer {
          margin: 10px;
        }
      `}</style>
    </Layout>
  );
};

export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {
  store.dispatch(serverRenderClock(true));
  store.dispatch(addCount());
});

const mapDispatchToProps = (dispatch) => {
  return {
    addCount: bindActionCreators(addCount, dispatch),
    startClock: bindActionCreators(startClock, dispatch),
  };
};

export default connect(null, mapDispatchToProps)(Index);
