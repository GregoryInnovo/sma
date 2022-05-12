import OpcionIncorrecta from "@components/OpcionIncorrecta"
import medals from "@utils/data";

/*
  Opción incorrecta del contexto 1
*/
export default function Incorrect1() {

  return (
    <OpcionIncorrecta 
      linkUrl="/context1/context1"
      videoId="Isib0r6DPGM"
      medalMessage={medals.uno[1]}
      value={1}
    />
  )
}
