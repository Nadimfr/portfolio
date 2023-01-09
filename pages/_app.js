import clsx from "clsx";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Footer from "../components/Footer";
import Layout from "../components/Layout";
import "../styles/globals.css";
import styles from "../styles/Home.module.css";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  return (
    <div className={styles.main}>
      <div
        className={clsx(
          styles.submain,
          "bg-[rgb(0,0,0,0.3)] p-[4rem] pb-[2rem] min-h-[100vh] min-w-[100wh]"
        )}
      >
        <Component {...pageProps} />
        <Footer />
      </div>
    </div>
  );
}
