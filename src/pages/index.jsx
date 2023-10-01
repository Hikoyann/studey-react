import Head from "next/head";
import { Inter } from "next/font/google";
import { Header } from "@/src/components/Header";

const inter = Inter({ subsets: ["latin"] });

const About = (props) => {
  return (
    <>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      <h1>Next.jsでReactの学習</h1>
      <p>JsonPlaceholderのAPIを叩いて学習</p>
    </>
  );
};

export default About;
