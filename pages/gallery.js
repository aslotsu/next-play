import Image from "next/image"
import gaga from "../public/gaga.jpg"
const gallery = () => {
    return <div>
        <div style={{height: "20vh"}}></div>
    <div>
        <Image
            src={gaga}
            width={500}
            height={500}
            alt="rubi rose in pant"
            placeholder="blur"

        />
    </div>
    </div>
}
export default gallery