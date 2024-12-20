import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import { ReactNode } from 'react';

interface IProps {
  isOpen: boolean;
  closeModal: () => void;
  title?: string;
  children: ReactNode;
}

const Modal = ({ isOpen, closeModal, title, children }: IProps) => {
  return (
    <div>
      <div className="flex items-center justify-center" aria-hidden="true">
        <Dialog
          open={isOpen}
          as="div"
          className="relative z-10 focus:outline-none"
          onClose={closeModal}
        >
          <div className="fixed inset-0 z-10 w-screen overflow-y-auto bg-black bg-opacity-25">
            <div className="flex min-h-full items-center justify-center p-4">
              <DialogPanel
                transition
                className="w-full max-w-md rounded-xl bg-white p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
              >
                {title && (
                  <DialogTitle
                    as="h3"
                    className=" text-xl font-medium text-gray-600"
                  >
                    {title}
                  </DialogTitle>
                )}
                <div className="mt-4">{children}</div>
              </DialogPanel>
            </div>
          </div>
        </Dialog>
      </div>
    </div>
  );
};

export default Modal;
