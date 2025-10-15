import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import { CiShop } from "react-icons/ci";

 const Clone = () => {
    return (
      <div>
  <div className="header mt-2 mx-5 flex justify-around">
            <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg"/>
            <input className="bg-[#EBF2F2] rounded rounded-lg p-2 mx-5 w-[700px]" placeholder= "Search for Products, Brands and more"/>
            <ul className="flex ">
                <li className="mx-5 ">
                     <FaRegUserCircle className="inline mx-2" size={24}/>
                      <span>Login</span>
                      <MdOutlineKeyboardArrowDown className="inline mx-2" size={18}/>
                </li>
                <li className="mx-5">
                   <IoCartOutline className="inline mx-2" size={24}/> 
                    Cart</li>
                <li className="mx-5">
                     <CiShop className="inline mx-2" size={24}/> 
                    Become a seller</li>
            </ul>
        </div>
      </div>
    )
}

export default Clone

