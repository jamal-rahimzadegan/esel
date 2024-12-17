import React from 'react';
import { useSelector } from 'react-redux';
import { Modal, Spinner } from 'components';
import { selectorState } from 'constant';

export default function Loader(): JSX.Element {
  const {
    notify: { isLoading },
  } = useSelector(selectorState);

  return (
    <Modal isOpen={isLoading} className="bg-transparent d-flex align-items-center justify-content-center">
      <Spinner />
    </Modal>
  );
}
