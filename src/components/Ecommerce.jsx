import EcommerceCard from "./EcommerceCard"
import Esidebar from "./Esidebar"

function Ecommerce() {
  return (
    <div className='w-full h-screen bg-grey-100 grid grid-cols-12 gap-4 p-10'>
      <div className="col-span-8 h-screen">
        < EcommerceCard />
      </div>
      <div className="col-span-4 bg-white">
        <Esidebar/>
      </div>
    </div>
  )
}

export default Ecommerce
