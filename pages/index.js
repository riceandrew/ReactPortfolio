import Link from 'next/link';

export default function Index() {
  return (
    <div>
      <Link href="/about">
        <a>About Page</a>
      </Link>
      <br></br>
      <Link href="/contact">
        <a>Contact Page</a>
      </Link>
      <br></br>
      <Link href="/portfolio">
        <a>Portfolio Page</a>
      </Link>
    </div>
  );
}