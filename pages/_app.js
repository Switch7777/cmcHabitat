import "../styles/globals.css";
import { LangProvider } from "../components/context/LangContext";

function MyApp({ Component, pageProps }) {
  return (
    <LangProvider>
      <Component {...pageProps} />
    </LangProvider>
  );
}

export default MyApp;
