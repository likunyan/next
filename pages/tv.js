import React from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';
import fetch from 'isomorphic-unfetch';

const TV = (props) => (
  <Layout>
    <h1>Marvel TV Shows</h1>
    <ul>
      {props.shows.map(({ show }) => {
        return (
          <li key={show.id}>
            <Link as={`/tv/${show.id}`} href={`/tvPost?id=${show.id}`}>
              <a>{show.name}</a>
            </Link>
          </li>
        );
      })}
    </ul>
  </Layout>
);

TV.getInitialProps = async function () {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=marvel');
  const data = await res.json();
  return {
    shows: data
  }
};

export default TV;
