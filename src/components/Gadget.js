import { Products } from "../utils"

const Gadget = () => {
    return (
        <div className="mt-5 flex">
          

           <div className=" w-1/3 gap-2 mt-5">
             <h1 className="text-[22px] font-bold">Best Gadget and Appliance</h1>
             <div className="flex flex-wrap gap-5 mt-5">
             {Products.map((item) => 
           
             <div className="border border-solid border-gray  w-[200px] ">
                <div>
                    <img  className = 'h-[142px] w-[142px] p-2'src={item.image}/>
                    <h1>{item.name}</h1>
                    <h1 className="text-[#108934] font-bold">{item.price}</h1>
                
                </div>
            </div>
         
           
           )}
           </div>
           </div>

           <div className="w-2/3">
           <img className="" src="https://rukminim1.flixcart.com/www/2140/1540/promos/15/09/2023/9b08f194-51e5-4e6a-a052-f5f91d75b8a0.jpg?q=60" />
           </div>
        </div>
    )
}

export default Gadget