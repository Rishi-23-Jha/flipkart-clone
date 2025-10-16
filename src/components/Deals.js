import { deals } from "../utils";

const Deals = () => {
  return (
    <div className="flex mt-5">

      <div className="flex-1">
        <h1 className="font-extrabold mt-5 mb-4 text-xl">Best deals on SmartPhones</h1>

        <div className="flex flex-wrap gap-4">
          {deals.map((item) => (
            <div
              
              className="flex flex-col items-center w-[150px] p-3 border rounded-lg"
            >
              <img
                src="https://www.sony.co.in/image/2391ae5de6d0a34c41b28c03905f2ddc?fmt=png-alpha&resMode=bisharp&wid=384"
                alt={item.name}
                className="rounded-lg w-full h-[150px] object-cover mb-2"
              />
              <h4>{item.name}</h4>
              <h4 className="font-bold">{item.price}</h4>
            </div>
          ))}
        </div>
      </div>

     
      <div className="w-[300px] h-[300px] ml-5">
        <img
          src="https://rukminim1.flixcart.com/fk-p-flap/1060/1620/image/8c7715465f4e22ca.jpeg?q=60"
          alt="Deals Banner"
          className="w-full h-fullrounded-lg"
        />
      </div>
    </div>
  );
};

export default Deals;
