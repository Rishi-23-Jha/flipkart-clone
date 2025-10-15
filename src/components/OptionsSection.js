import { options } from "../utils"

const OptionsSection = () => {


    return (
      <div className="flex flex-wrap  m-5">
      
        {
            options.map((item) => (
                  <div className="m-5 p-3 flex flex-col items-center"> 
                     <div className=" w-[64px] h-[64px] rounded-lg" style={{backgroundColor: item.bgColor}}></div>
                     <h4>{item.title}</h4> 
                  </div>
            ))        }
      </div>

    )
}

export default OptionsSection