export default function Header() {
  return (
    <header className="flex flex-row items-center justify-evenly">
      <img src="/icon-menu.svg" className="h-18 w-18 mr-4" />
      <h1 className="text-2xl font-bold text-neutral-900">sneakers</h1>
      <img src="/icon-cart.svg" className="h-18 w-18 ml-auto mr-4" />
      <img src="/image-avatar.png" className="h-8 w-8" />
    </header>
  );
}
