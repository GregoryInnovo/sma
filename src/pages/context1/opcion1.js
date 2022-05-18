import OpcionCorrecta from "@components/OpcionCorrecta";
import medals from "@utils/data";

/*
  Opción correcta del contexto 1
*/

export default function Opcion1() {
  
  return (
    <OpcionCorrecta 
        linkUrl="/context2/context2"
        videoId="https://res.cloudinary.com/gregoryinnovo/video/upload/v1652886791/1.1_stkaxg.mp4"
        medalMessage={medals.uno[0]}
        value={1}
    />
  )
}
