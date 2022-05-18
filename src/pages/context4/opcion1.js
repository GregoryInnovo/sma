import OpcionCorrecta from "@components/OpcionCorrecta";
import medals from "@utils/data";

/*
  Opción correcta del contexto 1
*/

export default function Opcion1() {
  
  return (
    <OpcionCorrecta 
        linkUrl="/results/results"
        videoId="https://res.cloudinary.com/gregoryinnovo/video/upload/v1652886835/4.1_lqvkyf.mp4"
        medalMessage={medals.cuatro[0]}
        value={4}
    />
  )
}
