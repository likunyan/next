import Link from 'next/link';

const linkStyle = {
  marginRight: 15
};

const Header = () => (
  <div>
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href="/about">
      <a style={linkStyle}>About</a>
    </Link>
    <Link href='/useragent'>
      <a style={linkStyle}>UserAgent</a>
    </Link>
    <Link href='/blog'>
      <a style={linkStyle}>Blog</a>
    </Link>
    <Link href='/tv'>
      <a style={linkStyle}>TV</a>
    </Link>
    <Link href='/quotes'>
      <a style={linkStyle}>Quotes</a>
    </Link>
  </div>
);

export default Header;
