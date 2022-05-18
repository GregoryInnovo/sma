import React, { useState, useEffect } from "react";
import Head from "next/head";
import styles from "@styles/Home.module.css";
import Link from "next/link";
import { useContext } from "react";
import { AppContext } from "@context/AppContext";
import YouTube from "react-youtube";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

/*
  Opción incorrecta del contexto 1
*/
export default function OpcionIncorrecta({
  linkUrl,
  videoId,
  medalMessage,
  value,
  secondsReturn,
}) {
  const [isEnd, setIsEnd] = useState(false);

  const { secVideo, medallaUno, medallaDos, medallaTres, medallaCuatro } =
    useContext(AppContext);
  const [sharedState, setSharedState] = secVideo;
  const [medalla1, setMedalla1] = medallaUno;
  const [medalla2, setMedalla2] = medallaDos;
  const [medalla3, setMedalla3] = medallaTres;
  const [medalla4, setMedalla4] = medallaCuatro;

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    sharedState = secondsReturn;
    setSharedState(sharedState);
    setOpen(true);
  };

  useEffect(() => {
    handleClick();
    showMedals();
    let vid = document.getElementById("myVideo");
    vid.currentTime = 0;
    vid.webkitRequestFullScreen();

    vid.addEventListener("timeupdate", function () {
      //currentTime use second, if you want min *60
      if (vid.currentTime >= 5) {
        setIsEnd(true);
      }
    });
  }, []);

  const showMedals = () => {
    switch (value) {
      case 1:
        if (medalla1 != 1) {
          setMedalla1(1);
          handleClick();
          console.log("Muestro la medalla obtenida");
        } else {
          console.log("No muestro la medalla", medalla1);
        }
        break;
      case 2:
        if (medalla2 != 1) {
          setMedalla2(1);
          handleClick();
          console.log("Muestro la medalla obtenida");
        } else {
          console.log("No muestro la medalla", medalla2);
        }
        break;
      case 3:
        if (medalla3 != 1) {
          setMedalla3(1);
          handleClick();
          console.log("Muestro la medalla obtenida");
        } else {
          console.log("No muestro la medalla", medalla3);
        }
        break;
      case 4:
        if (medalla4 != 1) {
          setMedalla4(1);
          handleClick();
          console.log("Muestro la medalla obtenida");
        } else {
          console.log("No muestro la medalla", medalla4);
        }
        break;

      default:
        console.log("No envio nada");
        break;
    }
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Incorrrecta</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <video
          id="myVideo"
          src={videoId}
          width="100%"
          height="780"
          controls
          autoPlay
        >
          <source src="movie.mp4" type="video/mp4" />
        </video>
        {/* <YouTube 
          videoId={videoId}
          opts={{
            height: "780",
            width: "100%",
            playerVars: {
              autoplay: 1,
          }}}
          onEnd={() => {
            
            setIsEnd(true)
          }}
        /> */}
      </main>

      {isEnd && (
        <main>
          <Button>
            <Link href={linkUrl}>Regresar</Link>
          </Button>
        </main>
      )}

      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          {medalMessage}
        </Alert>
      </Snackbar>
    </div>
  );
}
