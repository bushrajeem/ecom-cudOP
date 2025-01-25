import { useEcommerce } from "../features/commerce";

function EcommerceCard() {
  const { state, dispatch } = useEcommerce();
  return (
    <div>
      {state.itemlist.map((item, i) => (
        <div className="" key={i}>
          <div className="bg-black box-border rounded-md">pic</div>
          <h1>{item.name}</h1>
          <p>{item.price}</p>
          <p>{item.details}</p>
          <div>
            <button>+</button>
            <button>-</button>
          </div>
          <button
            className="bg-blue-500 text-white rounded-2xl p-5"
            onClick={(item) => {
              dispatch({ type: "ADD_CART", payload: item });
            }}
          >
            ADD TO CART
          </button>
        </div>
      ))}
    </div>
  );
}

export default EcommerceCard;
