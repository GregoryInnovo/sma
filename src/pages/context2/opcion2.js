import OpcionIncorrecta from "@components/OpcionIncorrecta"
import medals from "@utils/data";

/*
  Opción incorrecta del contexto 1
*/
export default function Incorrect1() {

  return (
    <OpcionIncorrecta 
      linkUrl="/context2/context2"
      videoId="https://res.cloudinary.com/gregoryinnovo/video/upload/v1652886800/2.2_jmvifl.mp4"
      medalMessage={medals.dos[1]}
      value={2}
      secondsReturn={32}
    />
  )
}
