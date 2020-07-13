import React from "react";
import Head from "next/head";

import { initGA, logPageView } from "../helpers/googleAnalytics";
import Sec1 from "../components/Sec1/Sec1";

export default function Home() {
  React.useEffect(() => {
    if (process.env.NODE_ENV !== "development") {
      if (!window.GA_INITIALIZED) {
        initGA();
        window.GA_INITIALIZED = true;
      }
      logPageView();
    }
  }, []);
  return (
    <div className="container">
      <Head>
        <title>Syed Zubair Ahmed</title>
        <meta
          name="description"
          content="Syed Zubair Ahmed is a Full-Stack Developer and entrepreneur from Hyderabad, India. He works with Reactjs,
            Nodejs, ReactNative, Postgres, MongoDb, AWS and many cool
            technologies"
        />
        <meta name="google-site-verification" content="VHBliz1D6fZ5GxgWIzxU4IdbHnBPVKmWLDDQC94ZunU" />
        <script
          data-ad-client="ca-pub-9876319634376967"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        ></script>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Sec1 />
    </div>
  );
}
