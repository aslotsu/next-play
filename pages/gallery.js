import Image from "next/image"
import gaga from "../public/gaga.jpg"
const gallery = () => {
    return <div>
        <div style={{height: "20vh"}}></div>
    <Image
        src={gaga}
        alt="rubi rose in pant"
        placeholder="blur"
    />
    </div>
}
export default gallery