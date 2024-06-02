import "./App.css";
import AddToCart from "./components/addToCart";
import Header from "./components/header";
import MainProductImage from "./components/mainProductImage";
import { useState,useContext,createContext } from "react";
import type { CartItem, ShoppingCartData } from "./types/cartData";

interface DataContextType {
  data:  ShoppingCartData
  setData: React.Dispatch<React.SetStateAction<ShoppingCartData>>;
}

const DataContext = createContext<DataContextType | undefined>(undefined)

function App() {
   const [data,setData] = useState ({
  "cart": [] as Array<CartItem>,
  "product": {
    "name": "Fall Limited Edition Sneakers",
    "description": "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
    "originalPrice": 250.0,
    "discountedPrice": 125.0,
    "discountPercentage": 50,
    "imageUrl" : "/image-product-1.jpg"
  }
})

  return <>
    <DataContext.Provider value={{data,setData}}>
    <Header />
    <MainProductImage  />
    <main className="flex flex-col gap-4 md:col-start-2">
    <h4 className="text-neutral-500 font-bold">sneaker company</h4>
    <h1 className="font-bold text-2xl">{data.product.name}</h1>
    <p className="text-neutral-500">{data.product.description}</p>
    <div className="flex flex-row items-center md:block">
    <div className="flex flex-row items-center">
    <h5 className="text-2xl font-bold">${data.product.discountedPrice}</h5>
    <p className="ml-2 rounded-lg px-2 py-0.5 text-white bg-neutral-950">${data.product.discountPercentage}</p>
    </div>
    <p className="line-through text-neutral-600 ml-auto font-bold md:ml-0">${data.product.originalPrice}</p>
        </div>
        <AddToCart />
      </main>
        </DataContext.Provider>
    </>;
}

export const useData =  () => {
  return useContext(DataContext)
}
export default App 
