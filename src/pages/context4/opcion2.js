import OpcionIncorrecta from "@components/OpcionIncorrecta"
import medals from "@utils/data";

/*
  Opción incorrecta del contexto 1
*/
export default function Incorrect1() {

  return (
    <OpcionIncorrecta 
      linkUrl="/context3/context3"
      videoId="Isib0r6DPGM"
      medalMessage={medals.cuatro[1]}
      value={4}
    />
  )
}
