import React, { useCallback, useState } from 'react';

type DataType = {
  title: string;
  msg: string;
  confirmBtnLabel: string;
  onConfirm: Function;
};

export default function useConfirmation(data: DataType): object {
  const { title, msg, confirmBtnLabel, onConfirm } = data;
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onOpen: Function = (): void => setIsOpen(true);

  const renderDialogBox = (): JSX.Element => {
    return (
      <ConfirmationDialog
        title={title}
        msg={msg}
        isOpen={isOpen}
        onConfirm={onConfirm}
        onCancelClick={() => setIsOpen(false)}
        confirmBtnLabel={confirmBtnLabel}
      />
    );
  };

  const Dialog = useCallback(renderDialogBox, [isOpen]);

  return {
    Dialog,
    onOpen,
  };
}
//---- the design of Confirmation box-------------------------------------------------------------------------------------
interface DialogProps {
  title: string;
  msg: string;
  isOpen: boolean;
  onConfirm: Function;
  onCancelClick: Function;
  confirmBtnLabel: string;
}

function ConfirmationDialog(props: DialogProps): JSX.Element {
  const { title, msg, isOpen, onConfirm, onCancelClick, confirmBtnLabel } = props;
  return <p> ConfirmationDialog</p>;
}
