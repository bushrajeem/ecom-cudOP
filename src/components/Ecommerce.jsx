import EcommerceCard from "./EcommerceCard"
import Esidebar from "./Esidebar"
import { Productinput } from "./product/Productinput";

function Ecommerce() {
  return (
    <div className="w-full bg-gray-100 grid grid-cols-12 gap-6 p-7">
      <div className="col-span-8">
        <EcommerceCard />
      </div>
      <div className="col-span-4">
        < Productinput />
        <Esidebar />
      </div>
    </div>
  );
}

export default Ecommerce
