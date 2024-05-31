import "./App.css";
import AddToCart from "./components/addToCart";
import Header from "./components/header";
import MainProductImage from "./components/mainProductImage";

function App() {
  return <>
    <Header  />
    <MainProductImage  />
    <h4 className="text-neutral-500 font-bold">sneaker company</h4>
    <h1 className="font-bold text-2xl">Fall Limited Edition Sneakers</h1>
    <p className="text-neutral-500">These low-profile sneakers are your perfect casual wear companion.Featuring a durable rubber outer sole, they'll withstand everything the weather has to offer.</p>
    <div className="flex flex-row items-center">
    <h5 className="text-2xl font-bold">$125.00</h5>
    <p className="ml-2 rounded-lg px-2 py-0.5 text-white bg-neutral-950">50%</p>
    <p className="line-through text-neutral-500 ml-auto">$250.00%</p>
    </div>
    <AddToCart />
  </>;
}

export default App;
