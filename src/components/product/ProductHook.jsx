import axios from "axios";
import { useState } from "react";

export const  useProductHook = () => {

    const postItem = async(item) => {
      console.log(item);
      
        try{
           await axios.post("http://localhost:3000/products", item).then((data) => {
            if (data) {
              console.log("success", data);
          
            }
                // dispatch({
                //   type: "ADD_PRODUCTS",
                //   payload: data,
                // });
              })
        }catch(error){
            console.log(error);
        }
    }
  return postItem;
};

