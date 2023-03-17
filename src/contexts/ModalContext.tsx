import React, { createContext, ReactNode, useContext } from 'react';
import useModal, { ModalState } from '../hooks/useModal';

interface ModalContextProps {
  modal: ModalState;
  readonly closeModal: () => void;
  readonly openModal: () => void;
}

const ModalContext = createContext<ModalContextProps>({
  modal: 'closed',
  closeModal: () => {},
  openModal: () => {}
});

interface ModalProviderProps {
  children: ReactNode;
}

const ModalProvider = ({ children }: ModalProviderProps) => {
  const { modal, openModal, closeModal } = useModal('closed');

  return (
    <ModalContext.Provider value={{ modal, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(ModalContext);
};

export { ModalContext, ModalProvider };
