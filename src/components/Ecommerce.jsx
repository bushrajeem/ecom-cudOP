import EcommerceCard from "./EcommerceCard"
import Esidebar from "./Esidebar"

function Ecommerce() {
  return (
    <div className="w-full h-screen bg-gray-100 grid grid-cols-12 gap-6 p-7">
      <div className="col-span-8">
        <EcommerceCard />
      </div>
      <div className="col-span-4">
        <Esidebar />
      </div>
    </div>
  );
}

export default Ecommerce
