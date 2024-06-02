import { useData } from "../App"


const Cart =  () => {
  const dataRef = useData()
  let cartElements : JSX.Element[] | JSX.Element
  const handleDelete = (name:string) => {
   dataRef?.setData((prevData) => {
    const newCart = prevData.cart.filter((item) => item.name !== name)
    return {...prevData,cart:newCart}
   })
  }
   cartElements = dataRef!.data.cart.map(( item,index ) => (
   <div className="flex flex-row items-center w-full justify-between my-3" key = {index}>
    <img 
     src={item.imageUrl}
     alt={item.name}
     className="object-cover max-w-16 w-12 h-12 rounded-lg"
    />
    <div className="">
    <h3 className="text-neutral-500 ">{item.name}</h3>
    <p className="text-sm ">
    <span className="text-neutral-500">${item.price} * {item.quantity}</span>
    <span className="font-bold"> ${item.total}</span> 
    </p>
    </div>
    <input 
    type="image"
     src='/icon-delete.svg'
    alt="remove from cart"
   className="h-3 w-3"
    onClick={()=>handleDelete(item.name)}
    />
    </div>
   ))
   if(cartElements.length === 0)  cartElements = <div className="text-center text-neutral-500 pt-8">your cart is empty</div>
  
 return <div className="w-full">
  <h2 className="border-b-2 border-b-neutral-200 pb-4 font-bold  pl-4">Cart</h2>
  {cartElements}
    {
    dataRef && dataRef.data.cart.length > 0 &&
  <button className="ml-6 bg-orange-500 mt-2 px-4 py-1 text-center rounded-lg w-44">Checkout</button>
    }
  </div>
}

export default Cart
