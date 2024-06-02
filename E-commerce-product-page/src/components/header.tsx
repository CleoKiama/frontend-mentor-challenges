import CartPopover from "./cartPopover.tsx";
import MenuModal from "./menuModal";
import { useMediaQuery } from "react-responsive";
import NavMenu from "./nav.tsx";

export default function Header() {
  const isDesktop =  useMediaQuery({ query: '(min-width: 768px)' })
   
  return (
      <header className="flex flex-row items-center justify-evenly md:col-start-1 md:row-start-1 md:col-span-2">
      {
       !isDesktop &&
      <MenuModal  />
      }
      <h1 className="text-2xl font-bold text-neutral-900">sneakers</h1>
      {
        isDesktop &&
        <NavMenu   />
      }
      <CartPopover  />
      <img src="/image-avatar.png" className="h-8 w-8" />
     <hr  className="h-2 bg-neutral-900" />
    </header>
  );
}
