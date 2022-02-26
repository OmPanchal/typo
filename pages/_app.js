import GeneralContextProvider from "../context/GeneralContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <GeneralContextProvider>
      <Component {...pageProps} />
    </GeneralContextProvider>
  );
}

export default MyApp;
