import { options } from "../utils"

const OptionsSection = () => {


    return (
      <div className="flex flex-wrap  m-5">
      
        {
            options.map((item) => (
                  <div className="m-2 p-3 flex flex-col items-center"> 
                     <div className="rounded-lg"><img src={item.image}/></div>
                     <h4>{item.title}</h4> 
                  </div>
            ))        }
      </div>

    )
}

export default OptionsSection