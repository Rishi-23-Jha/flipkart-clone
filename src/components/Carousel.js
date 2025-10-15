import {  useEffect, useState } from "react";
import { slider } from "../utils";

const Carousel = () => {
    const [current, setCurrent] = useState(0);

  useEffect(() => {
  const timer = setInterval(() => {
        setCurrent((prev) => prev === slider.length-1 ? 0 : prev + 1)
    },2000)
    return () => clearInterval(timer)
  }, [])
    return (
   <div className="relative">
       
            <img src={slider[current].image} />
            <button className="absolute  top-[100px] bg-white w-[40px] h-[88px]" onClick={() => setCurrent((prev) => prev === 0 ? slider.length - 1 : prev - 1)}> Prev </button>
            <button className="absolute right-[5px] top-[100px] bg-white w-[40px] h-[88px]" onClick={() => setCurrent((prev) => prev === slider.length - 1 ? 0 : prev + 1)}>Next</button>
       
   </div>
    )
}

export default Carousel;