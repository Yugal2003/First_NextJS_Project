// app/page.js
import Link from 'next/link';

const HomePage = () => {
  return (
    <>
      <div>Welcome to Next.js!</div>
      <Link  href="/posts">First Post</Link>
    </>
  );
};

export default HomePage;
