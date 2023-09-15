import Head from "next/head";
import { Inter } from "next/font/google";
import { Main } from "@/src/components/Main";
import { Header } from "@/src/components/Header";
import { useCounter } from "../hooks/useCounter";
import { useInputArray } from "../hooks/useInputArray";
import { useBgLightBlue } from "../hooks/useBgColor";

const inter = Inter({ subsets: ["latin"] });

export default function Home(props) {
  console.log(props);
  const {
    count,
    isShow,
    handleClick,
    handleDisplay,
    text,
    array,
    handleChange,
    handleAdd,
  } = props;

  return (
    <>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />

      {isShow ? <h1>{count}</h1> : null}
      <button onClick={handleClick}>ボタン</button>
      <button onClick={handleDisplay}>{isShow ? "非表示" : "表示"}</button>

      <input type="text" value={text} onChange={handleChange} />
      <button onClick={handleAdd}>追加</button>
      <ul>
        {array.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>

      <Main page="index" />
    </>
  );
}
