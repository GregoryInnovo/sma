import OpcionCorrecta from "@components/OpcionCorrecta";
import medals from "@utils/data";

/*
  Opción correcta del contexto 1
*/

export default function Opcion1() {
  
  return (
    <OpcionCorrecta 
        linkUrl="/context2/context2"
        videoId="k7SiQj9cz-w"
        medalMessage={medals.uno[0]}
        value={1}
    />
  )
}
