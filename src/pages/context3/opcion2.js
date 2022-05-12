import OpcionIncorrecta from "@components/OpcionIncorrecta"
import medals from "@utils/data";

/*
  Opción incorrecta del contexto 3
*/
export default function Incorrect1() {

  return (
    <OpcionIncorrecta 
      linkUrl="/context3/context3"
      videoId="Isib0r6DPGM"
      medalMessage={medals.tres[1]}
      value={3}
    />
  )
}
