import { useState } from "react";
import { slider } from "../utils";

const Carousel = () => {
    const [current, setCurrent] = useState(0);
    return (
   <div>
       
            <img src={slider[current].image} />
       
   </div>
    )
}

export default Carousel;