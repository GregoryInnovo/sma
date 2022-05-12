import '../styles/globals.css'
import { AppWrapper } from '../context/AppContext';

/*
  Las páginas que empiecen con _ no se veran, ya que son
  para configuración
*/
function MyApp({ Component, pageProps }) {
  
  return (
    <AppWrapper>
      <Component {...pageProps} />
    </AppWrapper>
  )
}

export default MyApp
