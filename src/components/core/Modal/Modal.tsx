import React, { ReactNode, useEffect } from 'react';
import { Txt } from 'components';
import { lockScroll } from 'utils';
import { LIGHT_THEME } from 'assets/style/theme';
import { ModalBody, BackDrop, ModalContainer } from './ModalStyle';

interface ModalProps {
  isOpen: boolean;
  hasClose?: boolean;
  close?: Function;
  doOnClose?: Function;
  parentClass?: string;
  className?: string;
  children: ReactNode;
  bgColor?: keyof typeof LIGHT_THEME;
}

export default function Modal(props: ModalProps): JSX.Element {
  const { isOpen, close, doOnClose, children, className = '', parentClass = '', bgColor, hasClose } = props;

  const closeModal = () => {
    doOnClose?.();
    close?.(false);
  };

  useEffect(() => lockScroll(isOpen), [isOpen]);

  return (
    <BackDrop className={parentClass} isOpen={isOpen} onClick={closeModal}>
      <ModalContainer className={parentClass ?? 'center-items'}>
        <ModalBody bgColor={bgColor} className={className} onClick={(e) => e.stopPropagation()}>
          {hasClose ? (
            <Txt onClick={closeModal} size="l" weight="bold" color="WHITE" className="pointer">
              ×
            </Txt>
          ) : null}
          {children}
        </ModalBody>
      </ModalContainer>
    </BackDrop>
  );
}
