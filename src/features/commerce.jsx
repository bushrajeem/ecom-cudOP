import { createContext, useContext, useReducer } from "react";

const EcommerceContext = createContext({ itemlist: [] });

const initialState = {
  cart: [],
  total: 0,

  itemlist: [
    { id: "1", name: "Phone", price: 20000, details: "Powerful smartphone" },
    { id: "2", name: "Laptop", price: 50000, details: "High-performance laptop" },
    { id: "3", name: "Oven", price: 30000, details: "Modern kitchen oven" },
    { id: "4", name: "Fan", price: 10000, details: "Energy-efficient fan" },
  ],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_CART":
      return { ...state, cart: [...state.cart, action.payload] };      
    case "CLEAR_CART":
      return {...state, cart: []};
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
