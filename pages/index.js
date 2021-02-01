import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Link from "next/link";
import { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Layout from "../components/Layout";
import Page from "../components/Page";
import Copyright from "../src/Copyright";
import MuiLink from "../src/Link";
import ProTip from "../src/ProTip";
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
      <Container maxWidth="sm">
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Next.js v5-alpha example
          </Typography>
          <MuiLink href="/about" color="secondary">
            Go to the about page
          </MuiLink>
          <ProTip />
          <Copyright />
        </Box>
      </Container>
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
