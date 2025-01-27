import { createContext, useContext, useReducer } from "react";

const EcommerceContext = createContext({ itemlist: [] });

const initialState = {
  cart: [],
  total: 0,

  itemlist: [
    {
      id: "1",
      name: "Phone",
      price: 20000,
      details: "Powerful smartphone",
      quantity: 1,
    },
    {
      id: "2",
      name: "Laptop",
      price: 50000,
      details: "High-performance laptop",
      quantity: 1,
    },
    {
      id: "3",
      name: "Oven",
      price: 30000,
      details: "Modern kitchen oven",
      quantity: 1,
    },
    {
      id: "4",
      name: "Fan",
      price: 10000,
      details: "Energy-efficient fan",
      quantity: 1,
    },
  ],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_CART":
      return { ...state, cart: [...state.cart, action.payload] };

    case "CLEAR_CART":
      return { ...state, cart: [] };
    case "CART_INCREMENT":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id == action.payload
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
        total:
          state.total +
          state.cart.find((item) => item.id == action.payload).price,
      };

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
