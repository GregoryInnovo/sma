import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "@styles/Home.module.css";
import YouTube from "react-youtube";
import { useState, useEffect, useContext } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { AppContext } from "@context/AppContext";
import AlertInfo from "@components/AlertInfo";
import medals from "@utils/data";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  justifyContent: "space-around",
  alignItems: "center",
  direction: "column",
};
import {
  FacebookShareButton,
  FacebookIcon,
  WhatsappShareButton,
  WhatsappIcon,
  EmailShareButton,
  EmailIcon,
} from "react-share";

/*
  Página que muestra los resultados de la SMA,
  también puede compartir las medallas que obtuvo en 
  redes sociales
*/

export default function Results() {
  const [isEnd, setIsEnd] = useState(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [seconds, setSeconds] = useState(0);
  const { sharedState } = useContext(AppContext);

  const { medallaUno, medallaDos, medallaTres, medallaCuatro, userName } =
    useContext(AppContext);

  const [medalla1, setMedalla1] = medallaUno;
  const [medalla2, setMedalla2] = medallaDos;
  const [medalla3, setMedalla3] = medallaTres;
  const [medalla4, setMedalla4] = medallaCuatro;
  const [name, setName] = userName;

  const nameUser = () => {
    return name;
  };

  const medalsInfo = () => {
    let med1 = medalla1 === 2 ? medals.uno[0] : medals.uno[1];
    let med2 = medalla2 === 2 ? medals.dos[0] : medals.dos[1];
    let med3 = medalla3 === 2 ? medals.tres[0] : medals.tres[1];
    let med4 = medalla4 === 2 ? medals.cuatro[0] : medals.cuatro[1];
    return `${med1}, ${med2}, ${med3} y ${med4}`;
  };

  const youtubeUrl = "https://youtu.be/GdVpr208yIQ";
  const facebookTitle = `${nameUser()} ha conseguido las insignias: ${medalsInfo()}, si deseas realizar la experiencia ingresa a https://pruebasma.gregoryinnovo.repl.co/ para descubrir las tuyas`;

  return (
    <div className={styles.container}>
      <Head>
        <title>Resultados</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Card sx={{ maxWidth: 645 }}>
          <YouTube
            videoId="hrsL-El8Lus"
            opts={{
              height: "480",
              width: "100%",
              playerVars: {
                autoplay: 1,
              },
            }}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Tus resultados
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {nameUser()}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              Insignias obtenidas
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {medalla1 === 2 ? (
                <AlertInfo severity="success" description={medals.uno[0]} />
              ) : (
                <AlertInfo severity="error" description={medals.uno[1]} />
              )}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {medalla2 === 2 ? (
                <AlertInfo severity="success" description={medals.dos[0]} />
              ) : (
                <AlertInfo severity="error" description={medals.dos[1]} />
              )}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {medalla3 === 2 ? (
                <AlertInfo severity="success" description={medals.tres[0]} />
              ) : (
                <AlertInfo severity="error" description={medals.tres[1]} />
              )}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {medalla4 === 2 ? (
                <AlertInfo severity="success" description={medals.cuatro[0]} />
              ) : (
                <AlertInfo severity="error" description={medals.cuatro[1]} />
              )}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              Comparte tus resultados
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {nameUser()} ha conseguido las medallas: {medalsInfo()}, si deseas
              realizar la experiencia ingresa a
              https://smafinal.gregoryinnovo.repl.co/ para descubrir las tuyas
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={handleOpen}>
              Share
            </Button>
          </CardActions>
        </Card>

        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <Box sx={style}>
              <Typography
                id="transition-modal-title"
                variant="h6"
                component="h2"
              >
                Escoge tu red social preferida
              </Typography>
              <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                Comparte tus resultados en 
              </Typography>
              <FacebookShareButton
                url={youtubeUrl}
                quote={facebookTitle}
                className="Demo__some-network__share-button"
              >
                <FacebookIcon size={32} round />
              </FacebookShareButton>

              <WhatsappShareButton
                url={youtubeUrl}
                title={facebookTitle}
                separator=":: "
                className="Demo__some-network__share-button"
              >
                <WhatsappIcon size={32} round />
              </WhatsappShareButton>

              <EmailShareButton
                url={youtubeUrl}
                subject="SMA de los candidatos 2022"
                body={facebookTitle}
                className="Demo__some-network__share-button"
              >
                <EmailIcon size={32} round />
              </EmailShareButton>
            </Box>
          </Fade>
        </Modal>
      </main>
    </div>
  );
}

