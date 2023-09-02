import Head from "next/head";
import { Inter } from "next/font/google";
import { Main } from "@/src/components/Main";
import { Header } from "@/src/components/Header";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

// const handleClick = (e) => {
//   console.log(e.target.href);
//   e.preventDefault();
// };

export default function Home() {
  const [count, setFoo] = useState(1);
  // let count = 1;

  const handleClick = (e) => {
    setFoo((count) => count + 1);
    setFoo((count) => count + 1);
    // count = count + 1;
  };

  useEffect(() => {
    document.body.style.backgroundColor = "lightblue";

    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  return (
    <>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      <h1>{count}</h1>
      <button onClick={handleClick}>ボタン</button>
      <Main page="index" />
    </>
  );
}
