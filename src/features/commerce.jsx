import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";



const EcommerceContext = createContext({ itemlist: [] });

const initialState = {
  cart: [],
  total: 0,

  itemlist: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_CART": {
      const exist = state.cart.find((item) => item.id == action.payload.id);
      if (exist) {
        let currentItem = state.cart.map((item) =>
          item.id == action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        let totalCalculation = state.cart.reduce(
          (sum, item) => sum + item.price,
          10
        );
        return { ...state, cart: currentItem };
      } else {
        return { ...state, cart: [...state.cart, action.payload] };
      }
    }

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
      };

    case "CART_DECREMENT":
      return {
        ...state,
        cart: state.cart.map((item) =>
         { if (item.id == action.payload && state.quantity > 1) {
            return { ...item, quantity: item.quantity - 1 }
          }
          else {return item}}
        ),
      };

      case "ADD_PRODUCTS": 
      return { ...state, itemlist: action.payload };
      case "ADD_CART_PRODUCTS": 
      return { ...state, cart: action.payload };

    default:
      return state;
  }    
};

export const EcommerceProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(()=> {
    getProducts();
    getCart();
    clearProducts();
  }, []  )

  const getProducts = () => {
    try{
      axios.get("http://localhost:3000/products").then(({data}) => {
    
        dispatch({
          type: "ADD_PRODUCTS",
          payload: data,
        });
      })
    } catch(error){
      console.log(error);
      
    }
  }
  const getCart = () => {
    try{
      axios.get("http://localhost:3000/cart").then(({data}) => {
    
        dispatch({
          type: "ADD_CART_PRODUCTS",
          payload: data,
        });
      })
    } catch(error){
      console.log(error);
      
    }
  }
  const clearProducts = () => {
    try{
      axios.get("http://localhost:3000/cart").then(({data}) => {
    
        dispatch({
          type: "CLEAR_CART",
          payload: data,
        });
      })
    } catch(error){
      console.log(error);
      
    }
  }

  return (
    <EcommerceContext.Provider value={{ state, dispatch }}>
      {children}
    </EcommerceContext.Provider>
  );
};

export const useEcommerce = () => {
  return useContext(EcommerceContext);
};
