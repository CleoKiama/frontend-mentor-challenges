



export default function MainProductImage () {

 return (
    <div className="flex flex-row items-center relative">
   <img 
      src= '/icon-previous.svg'
      alt= 'previous'
      className="object-cover h-10 w-10 absolute left-[2%]  rounded-3xl bg-white p-2 "
     />
      <img 
      src= '/image-product-1.jpg'
      alt= 'product image'
      className="object-contain h-62 w-62"
     />
    <img 
      src= '/icon-next.svg'
      alt= 'next'
      className="object-cover h-10 w-10 absolute left-[87%]   rounded-3xl bg-white p-2"
     />
      </div>
 )
}
