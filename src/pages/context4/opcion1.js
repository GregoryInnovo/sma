import OpcionCorrecta from "@components/OpcionCorrecta";
import medals from "@utils/data";

/*
  Opción correcta del contexto 1
*/

export default function Opcion1() {
  
  return (
    <OpcionCorrecta 
        linkUrl="/results/results"
        videoId="k7SiQj9cz-w"
        medalMessage={medals.cuatro[0]}
        value={4}
    />
  )
}
