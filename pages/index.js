import React from 'react';
import Layout from '../components/Layout';
import Link from 'next/link'

export default function Index() {
  return (
    <Layout>
      <div className="project">
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href='/useragent'>
          <a>UserAgent</a>
        </Link>
        <Link href='/blog'>
          <a>Blog</a>
        </Link>
        <Link href='/tv'>
          <a>TV</a>
        </Link>
        <Link href='/quotes'>
          <a>Quotes</a>
        </Link>
      </div>
      <style jsx>{`
        .project > a {
          padding: 10px;
        }
      `}</style>
    </Layout>
  );
}
