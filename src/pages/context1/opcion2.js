import OpcionIncorrecta from "@components/OpcionIncorrecta"
import medals from "@utils/data";

/*
  Opción incorrecta del contexto 1
*/
export default function Incorrect1() {

  return (
    <OpcionIncorrecta 
      linkUrl="/context1/context1"
      videoId="https://res.cloudinary.com/gregoryinnovo/video/upload/v1652886794/1.2_rcm6lb.mp4"
      medalMessage={medals.uno[1]}
      value={1}
      secondsReturn={30}
    />
  )
}
