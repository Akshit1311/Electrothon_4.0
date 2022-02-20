import "../styles/globals.css";
import Head from "next/head";
import NavBar from "../components/NavBar";
import { auth } from "../firebase";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState(null);
  const [isMetamaskInstalled, setisMetamaskInstalled] = useState(false);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) setUser(user);
      else setUser(null);
    });
    if (window.ethereum) {
      setisMetamaskInstalled(true);
    }
  }, []);
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"
        />
        <script
          defer
          src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"
        ></script>
      </Head>
      <>
        <NavBar user={user} />
        {isMetamaskInstalled ? (
          <Component {...pageProps} user={user} />
        ) : (
          <>
            <img
              src="https://cdn.iconscout.com/icon/free/png-256/metamask-2728406-2261817.png"
              alt="metamask"
              height={30}
              width={30}
            />
            Please install metamask
          </>
        )}
        <Footer />
      </>
    </>
  );
}

export default MyApp;
