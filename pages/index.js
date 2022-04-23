import React from "react";
import Head from "next/head";

import { initGA, logPageView } from "../helpers/googleAnalytics";
import Sec1 from "../components/Sec1/Sec1";
import Sec2 from "../components/Sec2/Sec2";

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
        <title>Zubair</title>
        <meta
          name="description"
          content="A software developer and aspiring entrepreneur, created Browser Stories"
        />
        <meta name="google-site-verification" content="VHBliz1D6fZ5GxgWIzxU4IdbHnBPVKmWLDDQC94ZunU" />
        <script
          data-ad-client="ca-pub-9876319634376967"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        ></script>
                  <script data-name="BMC-Widget" data-cfasync="false" src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js" data-id="zubairself" data-description="Support me on Buy me a coffee!" data-message="" data-color="#5F7FFF" data-position="Right" data-x_margin="18" data-y_margin="18"></script>

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Sec1 />
      <Sec2 />
    </div>
  );
}
