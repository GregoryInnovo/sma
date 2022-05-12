import OpcionCorrecta from "@components/OpcionCorrecta";
import medals from "@utils/data";

/*
  Opción correcta del contexto 3
*/

export default function Opcion1() {
  
  return (
    <OpcionCorrecta 
        linkUrl="/context4/context4"
        videoId="k7SiQj9cz-w"
        medalMessage={medals.tres[0]}
        value={3}
    />
  )
}
