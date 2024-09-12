import './globals.css'; // Import global styles if you have any
import Link from 'next/link';

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
            <div className="layout-container">
              <Link href="/"><button>Home</button></Link>
              <Link href="/about"><button>About</button></Link>
              
              <main>{children}</main>
              
              <p>© 2024 My Next.js App</p>
            </div>
      </body>
    </html>
  );
}

export default RootLayout;