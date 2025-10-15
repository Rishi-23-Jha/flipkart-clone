import { useState } from "react";
import { slider } from "../utils";

const Carousel = () => {
    const [current, setCurrent] = useState(0);
    return (
   <div className="relative">
       
            <img src={slider[current].image} />
            <button className="absolute  top-[100px] bg-white p-5" onClick={() => setCurrent(current == 0 ? slider.length - 1 : current - 1)}> Prev </button>
            <button className="absolute right-[5px] top-[100px] bg-white p-5" onClick={() => setCurrent(current == slider.length - 1 ? 0 : current + 1)}>Next</button>
       
   </div>
    )
}

export default Carousel;