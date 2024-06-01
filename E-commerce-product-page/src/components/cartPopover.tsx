import * as Popover from '@radix-ui/react-popover';
import './styles/cartStyles.css';
import Cart from './cart';

const CartPopover = () => (
  <Popover.Root >
    <Popover.Trigger asChild>
    <img src="/icon-cart.svg" className="h-18 w-18 ml-auto mr-4" />
    </Popover.Trigger>
    <Popover.Portal>
      <Popover.Content className="PopoverContent" align="end" alignOffset={-5}  side="bottom" sideOffset={20}>
        <Cart  />
      </Popover.Content>
    </Popover.Portal>
  </Popover.Root>
);

export default CartPopover;

