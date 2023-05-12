import Head from "next/head";
import Image from "next/image";
import Nav from "../components/Nav";
import Wheater from "../components/Wheater";
import Tweets from "../components/Tweets";
import styles from "../styles/Home.module.css";
import NewsComponent from "../components/news";
export default function Home() {
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
      </Head>
      <Nav/>
      <main className={styles.main}>
      <NewsComponent/>
      <Wheater/>
      <Tweets/>
  

      </main>
    </div>
  );
}
