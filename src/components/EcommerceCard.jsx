import axios from "axios";
import { useEcommerce } from "../features/commerce";

function EcommerceCard() {
  const { state, dispatch } = useEcommerce();
  const handleAddtoCart = (item) => {
    try {
       axios.post("http://localhost:3000/cart", item).then((data) => {
        if (data) {
          console.log("success", data);
        }
        dispatch({
          type: "ADD_CART",
          payload: item,
        });
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="grid grid-cols-2 gap-6">
      {state?.itemlist?.map((item, i) => (
        <div
          key={i}
          className="bg-white shadow-blue-500 rounded-lg p-4 hover:shadow"
        >
          <div className="h-40 bg-gray-200 rounded flex items-center justify-center hover:shadow shadow-black text-gray-500">
            Image
          </div>
          <h2 className="mt-4 text-lg font-semibold">{item.name}</h2>
          <p className="text-gray-600">Price: ৳{item.price}</p>
          <p className="text-sm text-gray-500">{item.details}</p>
          <button
            className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-lg w-full hover:bg-blue-700"
            onClick={() => handleAddtoCart(item)}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default EcommerceCard;
