import Head from "next/head";
import Link from "next/link";
import styles from "./layout.module.css";

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Home of food critics" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <nav>
        <Link href="/">
          <a>
            <span>Fritic</span>
          </a>
        </Link>
        <div>
          <div>
            <Link href="/">
              <a>Discover</a>
            </Link>
          </div>
          <div>
            <Link href="/">
              <a>Following</a>
            </Link>
          </div>
          <div>
            <Link href="/">
              <button></button>
            </Link>
          </div>
          <div>
            <Link href="/">
              <button></button>
            </Link>
          </div>
        </div>
      </nav>
      <main>{children}</main>
    </div>
  );
}
