import OpcionIncorrecta from "@components/OpcionIncorrecta"
import medals from "@utils/data";

/*
  Opción incorrecta del contexto 1
*/
export default function Incorrect1() {

  return (
    <OpcionIncorrecta 
      linkUrl="/context2/context2"
      videoId="Isib0r6DPGM"
      medalMessage={medals.dos[1]}
      value={2}
    />
  )
}
