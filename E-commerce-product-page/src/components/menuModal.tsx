import * as Dialog from '@radix-ui/react-dialog';
import './menuModal.css';
import NavMenu from './nav';

const MenuModal = () => (
  <Dialog.Root>
    <Dialog.Trigger asChild>
          <input 
            type='image'
            src='/icon-menu.svg'
            className='h-4 w-4 pr-2'
          />
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="DialogOverlay" />
      <Dialog.Content className="DialogContent">
       <Dialog.Close asChild>
          <input 
            type='image'
            src='/icon-close.svg'
            className='h-4 w-4'
          />
        </Dialog.Close>
        <NavMenu  />
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);

export default MenuModal;



