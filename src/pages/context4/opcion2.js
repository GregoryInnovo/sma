import OpcionIncorrecta from "@components/OpcionIncorrecta"
import medals from "@utils/data";

/*
  Opción incorrecta del contexto 1
*/
export default function Incorrect1() {

  return (
    <OpcionIncorrecta 
      linkUrl="/context4/context4"
      videoId="https://res.cloudinary.com/gregoryinnovo/video/upload/v1652886847/4.2_ly9cuc.mp4"
      medalMessage={medals.cuatro[1]}
      value={4}
      secondsReturn={10}
    />
  )
}
