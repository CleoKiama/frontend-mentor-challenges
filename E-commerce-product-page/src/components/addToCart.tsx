import { useState } from "react"


export default function AddToCart () {
 const [quantity, setQuantity] = useState(0)
  return (
  <section > 
     <div className="flex flex-row items-center justify-between">
       <input 
         type="image"
          src="/icon-plus.svg"
          onClick={()=>setQuantity(quantity+1)}
          alt="increment"
       />
        <p>{quantity}</p>
       <input 
         type="image"
          src="/icon-minus.svg"
          onClick={()=>setQuantity(quantity-1)}
          alt="decrement"
       />
      </div>
      <div className="flex flex-row items-center rounded-xl bg-orange-500 justify-center">
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
