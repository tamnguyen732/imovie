import { useState } from 'react';

export type ModalState = 'closed' | 'open';

interface ModalActions {
  readonly closeModal: () => void;
  readonly openModal: () => void;
}

export interface ModalStateAndActions extends ModalActions {
  readonly modal: ModalState;
}

const useModal = (initialValue: ModalState = 'closed'): ModalStateAndActions => {
  const [modal, setModal] = useState<ModalState>(initialValue);

  const closeModal = (): void => {
    setModal('closed');
  };

  const openModal = (): void => {
    setModal('open');
  };

  return { closeModal, openModal, modal };
};

export default useModal;
