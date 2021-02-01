import fetch from "isomorphic-unfetch";
import Link from "next/link";
import React from "react";

import Layout from "../components/Layout";

const TV = ({ shows }) => (
  <Layout>
    <h1>Marvel TV Shows</h1>
    <ul>
      {shows.map(({ show }) => {
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

TV.getInitialProps = async () => {
  const res = await fetch("https://api.tvmaze.com/search/shows?q=marvel");
  const data = await res.json();

  return {
    shows: data,
  };
};

export default TV;
