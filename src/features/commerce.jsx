import { createContext, useContext, useReducer } from "react";

const EcommerceContext = createContext({ itemlist: [] });

const initialState = {
  cart: [],

   itemlist: [
    { id: "1", name: "Phone", price: 20000, details: "lorem" },
    { id: "2", name: "Laptop", price: 50000, details: "ipsum" },
  ],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_CART":
      return { ...state, cart: [...state.cart, action.payload]};
    case "CLEAR_CART":
      return state.itemlist.filter((id) => itemlist.id !== action.payload.id)
    default:
      return state;
  }
};

export const EcommerceProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <EcommerceContext.Provider value={{ state, dispatch }}>
      {children}
    </EcommerceContext.Provider>
  );
};

export const useEcommerce = () => {
  return useContext(EcommerceContext);
};
