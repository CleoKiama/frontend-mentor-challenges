import { useState } from "react"
import './mainProductImage.css'


export default function MainProductImage () {
 const [currentIndex , setCurrentIndex] = useState(0)
const images = ['/image-product-1.jpg','/image-product-2.jpg','/image-product-3.jpg','/image-product-4.jpg']
 const increment = () => {
   setCurrentIndex (prev=>{
      if (prev === images.length -1){
        return 0
      }
      return prev + 1
    })
 }
const decrement = () => {
   setCurrentIndex(prev => {
      if(prev === 0) {
         return images.length -1
      }
      return prev - 1
    })
 }
 return (
    <div className="flex flex-row items-center relative">
   <img 
      src= '/icon-previous.svg'
      alt= 'previous'
      className="object-cover h-10 w-10 absolute left-[2%]  rounded-3xl bg-white p-2 "
      onClick={increment}
     />
      <img 
      src= {images[currentIndex]}
      alt= 'product image'
      className="object-contain h-62 w-62"
     />
    <img 
      src= '/icon-next.svg'
      alt= 'next'
      className="object-cover h-10 w-10 absolute left-[87%]   rounded-3xl bg-white p-2"
      onClick={decrement}
     />
      </div>
 )
}
