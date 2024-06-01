import CartPopover from "./cartPopover.tsx";
import MenuModal from "./menuModal";

export default function Header() {

  return (
      <header className="flex flex-row items-center justify-evenly">
      <MenuModal  />
      <h1 className="text-2xl font-bold text-neutral-900">sneakers</h1>
      <CartPopover  />
      <img src="/image-avatar.png" className="h-8 w-8" />
    </header>
  );
}
