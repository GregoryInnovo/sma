import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "@styles/Home.module.css";
import { useState, useEffect, useContext } from "react";

import { AppContext } from "@context/AppContext";
/*
  Página donde se muestra el contexto 2 con video con las 2 
  opciones
*/
import imgs from "@assets/img/imgs.js";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function Context4() {
  const [open, setOpen] = useState(false);
  const { secVideo } = useContext(AppContext);
  const [sharedState] = secVideo;
  const [visible, setIsVisible] = useState(false);

  useEffect(() => {
    let vid = document.getElementById("myVideo");
    vid.currentTime = sharedState;
    vid.webkitRequestFullScreen();

    vid.addEventListener("timeupdate", function () {
      //currentTime use second, if you want min *60
      if (vid.currentTime >= 23) {
        setIsVisible(true);
      }
    });
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Contexto 4</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <video
          id="myVideo"
          src="https://res.cloudinary.com/gregoryinnovo/video/upload/v1652886858/4_m61sro.mp4"
          width="100%"
          height="780"
          controls
          autoPlay
        >
          <source src="movie.mp4" type="video/mp4" />
        </video>
        {visible && (
          <div className="containerOptions">
            <Typography
              sx={{
                mt: 2,
                backgroundColor: "primary.dark",
                color: "white",
                fontWeight: "bold",
                fontSize: 18,
                textAlign: "center",
                p: 1,
              }}
            >
              ¿Qué obras publicó?
            </Typography>
            <Button variant="contained" sx={{ mt: 1, mb: 1 }}>
              {/* <img
                src={imgs[2]}
                alt="imagen de la opcion 1"
                width="150"
                height="150"
              /> */}
              <Link sx={{ mt: 2 }} href="/context4/opcion1">
                Medellín, del Miedo a la Esperanza y el libro Teoría Modelos de
                Procesos Estocásticos.
              </Link>
            </Button>
            <Button variant="contained" sx={{ mt: 1, mb: 1 }}>
              {/* <img
                src={imgs[3]}
                alt="imagen de la opcion 2"
                width="250"
                height="150"
              /> */}
              <Link sx={{ mt: 2 }} href="/context4/opcion2">
                En proyectos de energía sostenible como eólica.
              </Link>
            </Button>
          </div>
        )}
      </main>
    </div>
  );
}
