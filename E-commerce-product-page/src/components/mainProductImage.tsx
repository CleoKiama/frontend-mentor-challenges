import { useState } from "react"
import { useMediaQuery } from "react-responsive"
import clsx from "clsx"
import MainProductImageModal from "./mainProductImageModal"

type props = {
  isModal : boolean
}
export default function MainProductImage ({isModal}:props) {
 const [currentIndex , setCurrentIndex] = useState(0)
  const isDesktop =  useMediaQuery({ query: '(min-width: 768px)' })
  const images = ['/image-product-1.jpg','/image-product-2.jpg','/image-product-3.jpg','/image-product-4.jpg']
  const changeImage = (index:number) => {
   setCurrentIndex(index)
  }
  const imgElements = images.map((image,index) => {
    const isSelected = currentIndex === index ? true : false
    return <li key={index}>
      <img 
      src={image}
      alt="product image" 
      className={clsx("w-20 rounded-lg h-20 object-contain cursor-pointer hover:opacity-40",isSelected && "opacity-30")}
      onClick={() => changeImage(index)}
      />
    </li>
  })
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
         return images.length - 1
      }
      return prev - 1
    })
 }
  const showNavArrows = () => {
    if(isModal) return true
    else return !isDesktop
  }
 return (
  <div className="flex flex-row items-center relative md:flex-col md:col-start-1">
      {
        showNavArrows()  &&
    <img 
      src= '/icon-previous.svg'
      alt= 'previous'
      className="object-cover h-8 w-8 absolute left-[2%] md:top-1/2  rounded-3xl bg-white p-2"
      onClick={decrement}
     />
      }
      {
        isDesktop && !isModal ? <MainProductImageModal src={images[currentIndex]} />
        :
      <img 
          src= {images[currentIndex]}
        alt= 'product image'
        className="w-full max-w-full max-h-72 object-cover rounded-lg md:h-96 md:w-96 md:object-cover md:self-start"
        />

      }
      {
        showNavArrows() &&
    <img 
      src= '/icon-next.svg'
      alt= 'next'
      className="object-cover h-8 w-8 absolute left-[87%] md:top-1/2   rounded-3xl bg-white p-2"
      onClick={increment}
     />
      }
      {
        isDesktop && 
          <ul className="flex flex-row items-center gap-4 w-full mt-8  md:mt-24">
            {imgElements}
          </ul>
      }
    </div>
 )
}
