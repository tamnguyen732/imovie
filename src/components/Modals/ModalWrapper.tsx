import React, { useEffect } from 'react';
import { useGlobalContext } from '~/contexts/ModalContext';

interface Props {
  children: React.ReactNode;
}

const ModalWrapper = ({ children }: Props) => {
  const { closeModal } = useGlobalContext();
  useEffect(() => {
    document.body.classList.add('overflow-y-hidden');
    return () => {
      document.body.classList.remove('overflow-y-hidden');
    };
  }, []);

  const handleCloseModal = () => {
    closeModal();
  };

  return (
    <div>
      <div>
        <div className='fixed z-50 inset-0 overflow-y-hidden sm: mt-20'>
          <div className='flex items-center justify-center min-h-screen  px-4 -mt-5 text-center sm:block sm:p-0 '>
            <div className='fixed inset-0 transition-opacity' aria-hidden='true'>
              <div
                onClick={handleCloseModal}
                className='z-50 absolute inset-0 bg-gray-500 opacity-75'
              ></div>
            </div>
            <div className='flex justify-center items-center'>
              {children}
              <div />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalWrapper;
