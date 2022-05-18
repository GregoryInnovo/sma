import OpcionIncorrecta from "@components/OpcionIncorrecta"
import medals from "@utils/data";

/*
  Opción incorrecta del contexto 3
*/
export default function Incorrect1() {

  return (
    <OpcionIncorrecta 
      linkUrl="/context3/context3"
      videoId="https://res.cloudinary.com/gregoryinnovo/video/upload/v1652886820/3.2_edao1j.mp4"
      medalMessage={medals.tres[1]}
      value={3}
      secondsReturn={28}
    />
  )
}
