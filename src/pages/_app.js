import "../styles/globals.css";
import { AppWrapper } from "../context/AppContext";
import Layout from "@components/Layout";
/*
  Las páginas que empiecen con _ no se veran, ya que son
  para configuración
*/
function MyApp({ Component, pageProps }) {
  return (
    <AppWrapper>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppWrapper>
  );
}

export default MyApp;
