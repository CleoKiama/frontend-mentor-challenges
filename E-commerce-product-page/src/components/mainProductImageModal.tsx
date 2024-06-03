import * as Dialog from '@radix-ui/react-dialog';
import MainProductImage from "./mainProductImage";
import './styles/mainProductImageModal.css'

type props = { 
 src : string
}

const MainProductImageModal = ({src}:props) => (
  <Dialog.Root>
    <Dialog.Trigger asChild>
       <img 
        src= {src}
        alt= 'product image'
        className="w-full max-w-full max-h-72 object-cover rounded-lg md:h-72 md:w-72 md:object-cover md:self-start"
        />
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="DialogOverlay" />
      <Dialog.Content className="mainContent">
      <Dialog.Close asChild className='ml-[354px] pb-6'>
          <input 
            type='image'
            src='/icon-close.svg'
            className='h-4 w-4 outline-none'
          />
        </Dialog.Close>
        <MainProductImage isModal={true} />
       </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);

export default MainProductImageModal
