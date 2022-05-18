import OpcionCorrecta from "@components/OpcionCorrecta";
import medals from "@utils/data";

/*
  Opción correcta del contexto 1
*/

export default function Opcion1() {
  
  return (
    <OpcionCorrecta 
        linkUrl="/context3/context3"
        videoId="https://res.cloudinary.com/gregoryinnovo/video/upload/v1652886797/2.1_dwnsgw.mp4"
        medalMessage={medals.dos[0]}
        value={2}
    />
  )
}
