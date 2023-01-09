import { useRouter } from "next/router";
import Layout from "../components/Layout";
import "../styles/globals.css";
import styles from "../styles/Home.module.css";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <div className={styles.main}>
      {/* {router?.asPath === "/" ? (
        <Component {...pageProps} />
      ) : ( */}
      <Layout>
        <Component {...pageProps} />
      </Layout>
      {/* )} */}
    </div>
  );
}
