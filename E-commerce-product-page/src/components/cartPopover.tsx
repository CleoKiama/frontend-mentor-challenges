import * as Popover from '@radix-ui/react-popover';
import './styles/cartStyles.css';
import Cart from './cart';
import { useData } from '../App';

const CartPopover = () =>{
  const dataRef = useData()
  let quantity = 0
  if(dataRef) {
  quantity = dataRef?.data.cart.length
  dataRef!.data.cart.forEach(item=>{
    if(item.quantity > 0) quantity += item.quantity
  })
  }
 return (
  <Popover.Root >
    <Popover.Trigger asChild>
      <div className='flex flex-row items-center ml-auto mr-4'>
    <img src="/icon-cart.svg" className="h-18 w-18" />
      {
      dataRef!.data.cart.length > 0 &&
    <p className='text-white bg-orange-500 w-4 h-4 self-start mb-3  text-center rounded-[100px] px-[1px] text-xs'>
    {quantity}
    </p>
      }
      </div>
    </Popover.Trigger>
    <Popover.Portal>
      <Popover.Content className="PopoverContent" align="end" alignOffset={-5}  side="bottom" sideOffset={20}>
        <Cart  />
      </Popover.Content>
    </Popover.Portal>
  </Popover.Root>
);

} 
export default CartPopover;

