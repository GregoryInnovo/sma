import Head from 'next/head'
import Link from 'next/link'
import styles from '@styles/Home.module.css'
import YouTube from "react-youtube";
import {useState, useEffect, useContext } from 'react';
import {AppContext} from '@context/AppContext';
/*
  Video del contexto 2 donde el usuario podrá escoger
  entre 2 opciones
*/

export default function Video2() {

 const [isEnd, setIsEnd] = useState(false);
 const [seconds, setSeconds] = useState(0);
 const {sharedState} = useContext(AppContext);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Video 2
        </h1>
        <YouTube 
          videoId="l-aS0XSmShM" 
          opts={{
            height: "390",
            width: "640",
            playerVars: {
              autoplay: 1,
              start: sharedState,
          }}}
          onEnd={() => setIsEnd(true)}
        />
       
        {
          isEnd &&

          (
            <div className={styles.containerOptions}>
              <h3 className={styles.titleOptions}>
                ¿Qué deberias hacer?
              </h3>
             <Link className={styles.options} href="/correct1">
              Opción 1
             </Link> 
             <Link className={styles.options} href="/incorrect1">
              Opción 2
             </Link> 
            </div>
            
          )
        }
      </main>
    </div>
  )
}


