import { Inter } from "next/font/google";
import Link from "next/link";
import styles from "@/src/components/Header/Header.module.css";

const inter = Inter({ subsets: ["latin"] });

export function Header() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.anchor}>
        Index
      </Link>
      <Link href="/about" className={styles.anchor}>
        About
      </Link>
    </header>
  );
}
