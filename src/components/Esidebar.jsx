import { useState } from "react";
import { useEcommerce } from "../features/commerce";

function Esidebar() {
  const { state, dispatch } = useEcommerce();

  return (
    <div className="bg-gray-200 shadow rounded-lg p-6">
      <h1 className="text-xl font-bold text-center">Your Cart</h1>
      {state.cart.length < 1 ? (
        <p className="text-center text-xl text-gray-400 p-5">Empty cart!</p>
      ) : (
        state.cart.map((item, i) => (
          <div key={i} className="flex items-center justify-between">
            <span>{item.name}</span>
            <span className="text-gray-600">{item.price}</span>
          </div>
        ))
      )}
      <button
        className="bg-slate-200 box-border p-5 rounded-2xl"
        onClick={() => {
          dispatch({ type: "CLEAR_CART", payload: "id" });
        }}
      >
        Clear
      </button>
      <div className="h-[1px] w-full bg-gray-800 mb-3"></div>
     <div className="font-bold">Total: </div>
     {state.cart.map((item, i) => (
    <div key={i}>{item.total}</div>
     ))}
    </div>
  );
}

export default Esidebar;
