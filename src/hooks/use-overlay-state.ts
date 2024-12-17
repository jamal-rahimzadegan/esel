import { useState } from 'react';

type ConditionType = {
  initialMode?: boolean;
  state?: string;
  toggle?: string;
  open?: string;
  close?: string;
};

export default function useOverlayState(conditions: ConditionType): object {
  const { initialMode = false, state, toggle, open, close } = conditions || {};
  const [isOpen, setIsOpen] = useState<boolean>(initialMode);

  const openModal: Function = (): void => setIsOpen(true);
  const closeModal: Function = (): void => setIsOpen(false);
  const toggleModal: Function = (): void => setIsOpen(!isOpen);

  return {
    [state || 'isOpen']: isOpen,
    [toggle || 'toggleModal']: toggleModal,
    [open || 'openModal']: openModal,
    [close || 'closeModal']: closeModal,
  };
}
