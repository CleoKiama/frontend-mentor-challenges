import { useState } from "react"
import { useData } from "../App"

export default function AddToCart () {
 const [quantity, setQuantity] = useState(0)
  const dataRef = useData()
  const decrement  = () => {
    setQuantity (prev=>{
    if (prev === 0){
      return 0
    }
      return prev - 1
    })
  }
  const increment = () => { 
      setQuantity(quantity+1)
  }
  const addToCart =() => {
   if(dataRef) {
   const {data,setData} = dataRef
      let totalPrice = data.product.discountedPrice
    if(quantity>0) totalPrice = data.product.discountedPrice * quantity
      const newCartItem = {
        name : data.product.name,
        price : data.product.discountedPrice,
        quantity : quantity,
        total : totalPrice,
        imageUrl : data.product.imageUrl
      }
    const newCart = [...data.cart,newCartItem]     
    setData (prevData=>{
        if(prevData) {
          return {
            ...prevData,
            cart : newCart
          }
        }else return prevData
      })
    } 
  }
  return (
  <section > 
     <div className="flex flex-row items-center justify-between">
       <input 
         type="image"
          src="/icon-plus.svg"
          onClick={increment}
          alt="increment"
       />
        <p>{quantity}</p>
       <input 
         type="image"
          src="/icon-minus.svg"
          onClick={decrement}
          alt="decrement"
       />
      </div>
      <div onClick={addToCart} className="flex flex-row items-center cursor-pointer rounded-xl bg-orange-500 justify-center mt-3">
       <img 
        src="/icon-cart.svg"
        alt="cart"
        className="h-5 w-5"
        />
      <p className="rounded-xl px-4 py-2 bg-orange-500 text-neutral-900 font-bold">Add To Cart</p>
      </div>
    </section>
  )
}
