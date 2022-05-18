import OpcionCorrecta from "@components/OpcionCorrecta";
import medals from "@utils/data";

/*
  Opción correcta del contexto 3
*/

export default function Opcion1() {
  
  return (
    <OpcionCorrecta 
        linkUrl="/context4/context4"
        videoId="https://res.cloudinary.com/gregoryinnovo/video/upload/v1652886812/3.1_irfsai.mp4"
        medalMessage={medals.tres[0]}
        value={3}
    />
  )
}
