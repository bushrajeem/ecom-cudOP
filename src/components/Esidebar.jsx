import { useEffect, useState } from "react";
import { useEcommerce } from "../features/commerce";

function Esidebar() {
  const { state, dispatch } = useEcommerce();
  const [totalPrice, setTotalPrice] = useState(0);
  const [cartquantity, setCartquantity] = useState(0);

  useEffect(() => {
    const total = state.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    setTotalPrice(total);

    const itemquantity = state.cart.reduce(
      (sum, item) => sum + item.quantity,
      0
    );
    setCartquantity(itemquantity);
  }, [state.cart]); 

  return (
    <div className="bg-gray-200 shadow rounded-lg p-6">
      <h1 className="text-xl font-bold text-center">Your Cart</h1>
      {state.cart.length < 1 ? (
        <p className="text-center text-xl text-gray-400 p-5">Empty cart!</p>
      ) : (
        state.cart.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between p-3 shadow shadow-gray-400"
          >
            <span>{item.name}</span>
            <span className="text-gray-600">{item.price}</span>
            <div className="border-[1px] w-[50px] flex items-center justify-between">
              <button
                onClick={() => {
                  dispatch({ type: "CART_INCREMENT", payload: item.id });
                }}
              >
                +
              </button>
              {item.quantity}
              <button
                onClick={() => {
                  dispatch({ type: "CART_DECREMENT", payload: item.id });
                }}
              >
                -
              </button>
            </div>
          </div>
        ))
      )}
      <button
        className="bg-slate-200 box-border p-2 rounded-lg mt-2"
        onClick={() => {
          dispatch({ type: "CLEAR_CART" });
        }}
      >
        Clear
      </button>
      <div className="h-[1px] w-full bg-gray-800 mb-3"></div>
      <div className="font-bold flex items-center justify-between">
        <span>Total:</span>${totalPrice}
      </div>
    </div>
  );
}

export default Esidebar;
