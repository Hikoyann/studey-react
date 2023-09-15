import { Inter } from "next/font/google";
import Link from "next/link";
import styles from "@/src/components/Header/Header.module.css";

const inter = Inter({ subsets: ["latin"] });

const NAV_ITEMS = [
  { href: "/", label: "Index" },
  { href: "/about", label: "about" },
];

export const Header = () => {
  return (
    <header className={styles.header}>
      {NAV_ITEMS.map((item) => {
        return (
          <Link key={item.href} href={item.href} className={styles.anchor}>
            {item.label}
          </Link>
        );
      })}
    </header>
  );
};
