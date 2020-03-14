import React from 'react';
import Layout from '../components/Layout';
import Link from 'next/link'

export default function Index() {
  return (
    <Layout>
      <main>
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
      </main>
      <footer className="footer">
        <div>
          <h2>Power by</h2>
          <ol>
            <li><a href="https://zh-hans.reactjs.org/" target="_blank" rel="noopener noreferrer">React</a></li>
            <li><a href="https://material-ui.com/zh/" target="_blank" rel="noopener noreferrer">Material-UI</a></li>
            <li><a href="https://www.nextjs.cn/" target="_blank" rel="noopener noreferrer">Next.js</a></li>
            <li><a href="https://laravel.com" target="_blank" rel="noopener noreferrer">Laravel</a></li>
          </ol>
        </div>
      </footer>
      <style jsx>{`
        main {
          margin-top: 10px;
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
}
