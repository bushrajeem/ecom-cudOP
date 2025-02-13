import { useState } from "react";
import { useProductHook } from "./ProductHook";

export const Productinput = () => {
  const postItem = useProductHook();
   const [addedItem, setAddedItem] = useState({
      id: "",
      name: "",
      price: "",
      details: "",
      quantity: "",
    })

    const handleChange= (e) => {
     setAddedItem({...addedItem, [e.target.placeholder]: e.target.value,})
    }

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <div className="mb-3 ">
        <input
          className="border-[1px] border-black p-1"
          placeholder="id"
          type="text"
          value={addedItem.id}
          onChange={handleChange}
        />
        <input
          className="border-[1px] border-black p-1"
          placeholder="name"
          type="text"
          value={addedItem.name}
          onChange={handleChange}
        />
        <input
          className="border-[1px] border-black p-1"
          placeholder="price"
          type="text"
          value={addedItem.price}
          onChange={handleChange}
        />
        <input
          className="border-[1px] border-black p-1"
          placeholder="details"
          type="text"
          value={addedItem.details}
          onChange={handleChange}
        />
        <input
          className="border-[1px] border-black p-1"
          placeholder="quantity"
          type="text"
          value={addedItem.quantity}
          onChange={handleChange}
        />
      </div>

      <button
        className="bg-amber-100 p-3 rounded-xl"
        onClick={() =>
          postItem(addedItem)
        }
      >
        Add
      </button>
    </div>
  );
};
